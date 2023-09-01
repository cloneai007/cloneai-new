const express = require('express');
const router = express.Router();

const CustomerController = require('./controllers/customerController');
const WebhookController = require('./controllers/webhookController');
const StripeController = require('./controllers/stripeController');
const EmailService = require('./services/emailService');

// Routes
router.get('/customers', CustomerController.getAllCustomers);
router.get('/customers/:email', CustomerController.getCustomerByEmail);
router.put('/customers/add-broker-account', CustomerController.addBrokerAccount);
router.post('/stripe-webhook', WebhookController.handleWebhookEvent);
router.get('/plans', StripeController.getAllPlans);
router.post('/create-subscription', StripeController.createUserSubscription);
router.post('/cancel-subscription', StripeController.cancelSubscription);
router.post('/contact-us', EmailService.sendContactUsEmail);

module.exports = router;
