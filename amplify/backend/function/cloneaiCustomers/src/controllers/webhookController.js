const WebhookService = require('../services/webhookService');
const stripeConfig = require('../config/stripeConfig');
const logUtils = require('../utils/logUtils');
const stripe = require('stripe')(stripeConfig.accessKey);

class WebhookController {
  constructor() {
    this.eventQueue = []; // Queue to store incoming events
    this.isProcessing = false; // Flag to track if event processing is already in progress
  }

  enqueueEvent = async (event) => {
    this.eventQueue.push(event); // Add the event to the queue
    console.log('this.eventQueue', this.eventQueue);
    if (!this.isProcessing) {
      await this.processEvents(); // Start processing events if not already in progress
    }
  }

  processEvents = async () => {
    this.isProcessing = true; // Set the processing flag to true

    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift(); // Dequeue the next event

      try {
        logUtils.logInfo(`started ${event.type}`);
        await this.handleEvent(event); // Process the event
        logUtils.logInfo(`ended ${event.type}`);
      } catch (error) {
        console.log('Error processing event:', error);
      }
    }

    this.isProcessing = false; // Set the processing flag to false when the queue is empty
  }

  handleEvent = async (event) => {
    try {
      // Handle the specific events we're interested in
      switch (event.type) {
        case 'customer.created':
          await WebhookService.handleCustomerCreated(event.data.object);
          logUtils.logSuccess('customer.created is completed');
          break;
        case 'customer.subscription.created':
          await WebhookService.handleSubscriptionCreated(event.data.object);
          break;
        case 'customer.subscription.deleted':
          await WebhookService.handleSubscriptionDeleted(event.data.object);
          break;
        case 'customer.subscription.paused':
          await WebhookService.handleSubscriptionPaused(event.data.object);
          break;
        case 'customer.subscription.resumed':
          await WebhookService.handleSubscriptionResumed(event.data.object);
          break;
        case 'customer.subscription.trial_will_end':
          await WebhookService.handleTrialEnding(event.data.object);
          break;
        case 'customer.subscription.updated':
          await WebhookService.handleSubscriptionUpdated(event.data.object);
          break;
        case 'invoice.payment_failed':
          await WebhookService.handlePaymentFailure(event.data.object, stripe);
          break;
        case 'invoice.paid':
          await WebhookService.handleInvoicePaid(event.data.object);
          break;
        case 'payment_intent.payment_failed':
          await WebhookService.handlePaymentIntentFailed(event.data.object);
          break;
        default:
          // Ignore unsupported events
          break;
      }
    } catch (e) {
      console.log('Error processing event:', e);
    }
  }

  handleWebhookEvent = async (req, res) => {
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.header('Stripe-Signature'),
        stripeConfig.webhookHash
      );
    } catch (err) {
      console.log(err);
      console.log('⚠️  Webhook signature verification failed.');
      console.log('⚠️  Check the env file and enter the correct webhook secret.');
      return res.sendStatus(400);
    }

    // Enqueue the event for processing
    await this.enqueueEvent(event);

    return res.sendStatus(200);
  }
}

module.exports = new WebhookController();
