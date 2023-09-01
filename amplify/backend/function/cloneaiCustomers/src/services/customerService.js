const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, UpdateCommand, GetCommand, ScanCommand, QueryCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

class CustomerService {
  constructor() {
    this.client = new DynamoDBClient({
      region: 'us-east-2', credentials: { accessKeyId: 'AKIARRKJBZTEOQSFRSBK', secretAccessKey: '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' }
    });
    this.docClient = DynamoDBDocumentClient.from(this.client);
    this.tableName = 'cloneai_customers_development';
  }

  async getCustomerByIBrokerAccount(interactiveBrokerAccount) {
    const params = {
      TableName: this.tableName,
      IndexName: 'interactiveBrokerAccountIndex',
      KeyConditionExpression: 'interactiveBrokerAccount = :interactiveBrokerAccount',
      ExpressionAttributeValues: {
        ':interactiveBrokerAccount': interactiveBrokerAccount,
      },
    };

    const command = new QueryCommand(params);
    const response = await this.docClient.send(command);
    return response?.Items[0];
  }

  async getCustomerByStripeCustomerId(stripeCustomerId) {
    const params = {
      TableName: this.tableName,
      IndexName: 'stripeCustomerIdIndex',
      KeyConditionExpression: 'stripeCustomerId = :customerId',
      ExpressionAttributeValues: {
        ':customerId': stripeCustomerId,
      },
    };

    const command = new QueryCommand(params);
    const response = await this.docClient.send(command);
    return response?.Items[0];
  }

  async getCustomerByEmail(email) {
    const command = new GetCommand({
      TableName: this.tableName,
      Key: {
        email: email
      }
    });

    const response = await this.docClient.send(command);
    return response.Item;
  }

  async getAllCustomers() {
    const command = new ScanCommand({
      TableName: this.tableName,
    });

    const response = await this.docClient.send(command);
    return response.Items;
  }

  async createCustomer(payload) {
    const command = new PutCommand({
      TableName: this.tableName,
      Item: payload
    });

    const response = await this.docClient.send(command);
    return response.Attributes;
  }

  async updateCustomerByEmail(email, updateValues) {
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
        email: email,
      },
      UpdateExpression: `set ${updateExpression.join(", ")}`,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    });

    const response = await this.docClient.send(command);
    return response.Attributes;
  }
}

module.exports = new CustomerService();
