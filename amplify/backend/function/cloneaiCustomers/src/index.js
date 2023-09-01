const awsServerlessExpress = require('aws-serverless-express');
const ScheduleEventService = require('./services/scheduleEventService');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  ScheduleEventService.sendTrialEmails();
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
