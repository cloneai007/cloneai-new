const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, ScanCommand, GetCommand, UpdateCommand, DeleteCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const EmailService = require('./emailService');
const convertTimestampToDays = require('../utils/convertTimestampToDays');
const logUtils = require('../utils/logUtils');

class ScheduleEventService {
  constructor() {
    this.client = new DynamoDBClient({
      region: 'us-east-2', credentials: { accessKeyId: 'AKIARRKJBZTEOQSFRSBK', secretAccessKey: '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' }
    });
    this.docClient = DynamoDBDocumentClient.from(this.client);
    this.tableName = 'cloneai_schedule_events_development';
    this.deleteScheduleEvent("sub_1NYQP7J71VHv16QMOCt0qK5x")
    console.log('ScheduleEventService ScheduleEventService ScheduleEventService')
  }

  async getAllEvents() {
    const command = new ScanCommand({
      TableName: this.tableName,
    });

    const response = await this.docClient.send(command);
    return response.Items;
  }

  async getEventById(id) {
    const command = new GetCommand({
      TableName: this.tableName,
      Key: {
        id: id
      }
    });

    const response = await this.docClient.send(command);
    return response.Item;
  }

  async createScheduleEvent(payload) {
    try {
      const event = await this.getEventById(payload.id);
      if (!event) {
        const command = new PutCommand({
          TableName: this.tableName,
          Item: payload
        });

        const response = await this.docClient.send(command);
        return response.Attributes;
      } else {
        console.log('already found')
      }
    } catch (e) {
      console.log('error createScheduleEvent', e);
    }
  }

  async deleteScheduleEvent(id) {
    try {
      const command = new DeleteCommand({
        TableName: this.tableName,
        Key: { id },
      });
      const response = await this.docClient.send(command);
      return response;
    } catch (e) {
      console.log('error deleteScheduleEvent', e);
    }
  }

  async updateEventById(id, updateValues) {
    const expressionAttributeValues = {};
    const updateExpression = [];

    Object.entries(updateValues).forEach(([attributeName, attributeValue]) => {
      if (attributeValue !== undefined) {
        const expressionAttributeValue = `:${attributeName}`;
        expressionAttributeValues[expressionAttributeValue] = attributeValue;
        updateExpression.push(`${attributeName} = :${attributeName}`);
      }
    });

    const command = new UpdateCommand({
      TableName: this.tableName,
      Key: {
        id: id,
      },
      UpdateExpression: `set ${updateExpression.join(", ")}`,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    });

    const response = await this.docClient.send(command);
    return response.Attributes;
  }

  sendTrialEmails = async () => {
    try {
      const items = await this.getAllEvents();

      for (const item of items) {
        console.log('item', item);
        const numberOfDaysRemaining = convertTimestampToDays(item.trial_end);
        console.log('numberOfDaysRemaining', numberOfDaysRemaining);
        if (numberOfDaysRemaining === 2 && item.email_sent_count === 1) {
          logUtils.logSuccess(`CronJob: Trial Ending Soon (2nd last day)`);
          await EmailService.sendEmail(item.email, 'Trial Ending Soon (2nd last day)', 'Your trial period is ending soon.');
          await this.updateEventById(item.id, { email_sent_count: item.email_sent_count + 1 });
        } else if (numberOfDaysRemaining === 1) {
          logUtils.logSuccess(`CronJob: Trial Ending Soon (last day)`);
          await EmailService.sendEmail(item.email, 'Trial Ending Soon (last day)', 'Your trial period is ending soon.');
          await this.updateEventById(item.id, { email_sent_count: item.email_sent_count + 1 });
        }

        if (numberOfDaysRemaining <= 0 || item.email_sent_count >= 3) {
          await this.deleteScheduleEvent(item.id);
          logUtils.logSuccess(`Record for ${item.id} deleted from DynamoDB.`);
        }
      }
    } catch (error) {
      console.error('Error fetching subscription data:', error);
    }
  };

}

module.exports = new ScheduleEventService();
