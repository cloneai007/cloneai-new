const CustomerService = require('../services/customerService');
const ScheduleEventService = require('../services/scheduleEventService');
const EmailService = require('../services/emailService');
const { v4: uuidv4 } = require('uuid');
const logUtils = require('../utils/logUtils');


class WebhookService {
  handleCustomerCreated = async (stripeCustomer) => {
    // logUtils.logSuccess(`Start from here...................................`)

    // logUtils.logInfo('handleCustomerCreated stripeCustomer', stripeCustomer)
    try {
      const email = stripeCustomer.email;
      const customer = await CustomerService.getCustomerByEmail(email);
      const payload = {
        stripeCustomerId: stripeCustomer.id,
        interactiveBrokerLinked: false,
        interactiveBrokerAccountStatus: 'pending'
      };

      if (!customer) {
        await CustomerService.createCustomer(Object.assign(payload, { email, id: uuidv4() }));
        const customer = await CustomerService.getCustomerByEmail(email);
        logUtils.logSuccess(`customer with stripeCustomerId ${customer.stripeCustomerId} is created`)

      } else {
        await CustomerService.updateCustomerByEmail(email, payload);
        const customer = await CustomerService.getCustomerByEmail(email);
        logUtils.logSuccess(`customer with stripeCustomerId ${customer.stripeCustomerId} is updated`)
      }
      logUtils.logSuccess(`handleCustomerCreated payload ${payload}`)
    } catch (error) {
      logUtils.logError('handleCustomerCreated error', error);
    }
  };

  handleSubscriptionCreated = async (subscription) => {
    logUtils.logInfo('handleSubscriptionCreated subscription', subscription)
    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(subscription.customer);
      if (customer) {
        const payload = {
          subscription: {
            ...(customer?.subscription || {}),
            id: subscription.id,
            trial_start: subscription.trial_start,
            trial_end: subscription.trial_end,
            status: subscription.status,
            current_period_end: subscription.current_period_end,
            start_date: subscription.start_date,
            plan: {
              ...(customer?.subscription?.plan || {}),
              id: subscription.plan.id,
            }
          },
          interactiveBrokerLinked: ['active', 'trialing'].includes(subscription.status),
        }
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        logUtils.logSuccess(`handleSubscriptionCreated payload`, console.table(payload))

      } else {
        logUtils.logError(`Customer with ${subscription.customer} not found handleSubscriptionCreated`);
      }
    } catch (error) {
      logUtils.logError('handleSubscriptionCreated error', error);
    }
  };

  handleSubscriptionDeleted = async (subscription) => {
    // logUtils.logInfo('handleSubscriptionDeleted subscription', subscription)

    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(subscription.customer);
      if (customer) {
        const payload = {
          subscription: {
            ...(customer?.subscription || {}),
            status: subscription.status
          },
          interactiveBrokerLinked: false,
        };
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        await EmailService.sendEmail(customer.email, 'Subscription Cancelled', 'Your subscription has been cancelled.');
        await ScheduleEventService.deleteScheduleEvent(subscription.id);
        logUtils.logSuccess(`handleSubscriptionDeleted payload`, console.table(payload))

      } else {
        logUtils.logError(`Customer with ${subscription.customer} not found handleSubscriptionDeleted`);
      }
    } catch (error) {
      logUtils.logError('handleSubscriptionDeleted error', error);
    }
  };

  handleSubscriptionResumed = async (subscription) => {
    // logUtils.logInfo('handleSubscriptionResumed subscription', subscription)

    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(subscription.customer);
      if (customer) {
        const payload = {
          subscription: {
            ...(customer?.subscription || {}),
            status: subscription.status
          },
          interactiveBrokerLinked: true,
        };
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        await EmailService.sendEmail(customer.email, 'Subscription Resumed', 'Your subscription has been resumed.');
        logUtils.logSuccess(`handleSubscriptionResumed payload`, console.table(payload))
      } else {
        logUtils.logError(`Customer with ${subscription.customer} not found handleSubscriptionResumed`);
      }
    } catch (error) {
      logUtils.logError('handleSubscriptionResumed error', error);
    }
  };

  handleSubscriptionPaused = async (subscription) => {
    // logUtils.logInfo('handleSubscriptionPaused subscription', subscription)

    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(subscription.customer);
      if (customer) {
        const payload = {
          subscription: {
            ...(customer?.subscription || {}),
            status: subscription.status
          },
          interactiveBrokerLinked: false,
        };
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        await EmailService.sendEmail(customer.email, 'Subscription Paused', 'Your subscription has been paused.');
        logUtils.logSuccess(`handleSubscriptionPaused payload`, console.table(payload))
      } else {
        logUtils.logError(`Customer with ${subscription.customer} not found handleSubscriptionPaused`);
      }
    } catch (error) {
      logUtils.logError('handleSubscriptionPaused error', error);
    }
  };

  handleSubscriptionUpdated = async (subscription) => {
    logUtils.logInfo('handleSubscriptionUpdated subscription', subscription)

    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(subscription.customer);
      if (customer) {
        const payload = {
          subscription: {
            ...(customer?.subscription || {}),
            id: subscription.id,
            trial_start: subscription.trial_start,
            trial_end: subscription.trial_end,
            status: subscription.status,
            current_period_end: subscription.current_period_end,
            start_date: subscription.start_date,
            plan: {
              ...(customer?.subscription?.plan || {}),
              id: subscription.plan.id,
            }
          },
          interactiveBrokerLinked: ['active', 'trialing'].includes(subscription.status),
        }

        if (subscription.status === 'past_due') {
          await EmailService.sendEmail(customer.email, 'Payment Past Due', 'Your subscription payment is past due. Please update your payment information.')
        }
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        logUtils.logSuccess(`handleSubscriptionUpdated payload`, console.table(payload))
      } else {
        logUtils.logError(`Customer with ${subscription.customer} not found handleSubscriptionUpdated`);
      }
    } catch (error) {
      logUtils.logError('handleSubscriptionUpdated error', error);
    }
  };

  handlePaymentFailure = async (invoice) => {
    // logUtils.logInfo('handlePaymentFailure invoice', invoice)

    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(invoice.customer);
      const payload = {
        interactiveBrokerLinked: false,
      };
      if (customer) {
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        await EmailService.sendEmail(customer.email, 'Payment Failed', 'Your payment for the subscription has failed.');
        logUtils.logSuccess(`handlePaymentFailure payload`, console.table(payload))
      } else {
        logUtils.logError(`Customer with ${invoice.customer} not found handlePaymentFailure`);
      }
    } catch (error) {
      logUtils.logError('handlePaymentFailure error', error);
    }
  };

  handlePaymentIntentFailed = async (paymentIntent) => {
    // logUtils.logInfo('handlePaymentIntentFailed subscription', paymentIntent)

    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(paymentIntent.customer);
      const payload = {
        interactiveBrokerLinked: false,
      };

      const code = paymentIntent?.last_payment_error?.code;
      const errorMessage = paymentIntent?.last_payment_error?.message;

      if (customer) {
        if (code && errorMessage) {
          const subject = code.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
          await EmailService.sendEmail(customer.email, subject, errorMessage);
        } else if (paymentIntent.status === 'requires_payment_method') {
          await EmailService.sendEmail(customer.email, 'Card Declined', 'Your card was declined');
        } else if (paymentIntent.status === 'requires_action') {
          await EmailService.sendEmail(customer.email, 'Authentication Required', 'Your card was declined. This transaction requires authentication.');
        }
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        logUtils.logSuccess(`handlePaymentIntentFailed payload`, console.table(payload))
      } else {
        logUtils.logError(`Customer with ${paymentIntent.customer} not found handlePaymentIntentFailed`);
      }

    } catch (error) {
      logUtils.logError('handlePaymentIntentFailed error', error);
    }
  }

  handleInvoicePaid = async (invoice) => {
    // logUtils.logInfo('handleInvoicePaid invoice', invoice)

    try {
      if (invoice.billing_reason === 'subscription_create' && invoice.paid) {
        const url = `https://billing.stripe.com/p/login/test_28oeXvbhtczT6hqdQR?prefilled_email=${invoice.customer_email}`;
        return EmailService.sendEmail(
          invoice.customer_email,
          'Subscription Created',
          `Your subscription has been created successfully and trial period is started now you can manage your subscription from the following url ${url}`);
      }
      const customer = await CustomerService.getCustomerByEmail(invoice.customer_email);
      const payload = {
        interactiveBrokerLinked: invoice.paid
      };
      if (customer) {
        await CustomerService.updateCustomerByEmail(customer.email, payload);
        await EmailService.sendEmail(customer.email, 'Payment Successful', 'Your payment for the subscription has been successful.');
        logUtils.logSuccess(`handleInvoicePaid payload`, console.table(payload))
      } else {
        logUtils.logError(`Customer with ${invoice.customer} not found handleInvoicePaid`);
      }
    } catch (error) {
      logUtils.logError('handleInvoicePaid error', error);
    }
  };

  handleTrialEnding = async (subscription) => {
    // logUtils.logInfo('handleTrialEnding subscription', subscription)

    try {
      const customer = await CustomerService.getCustomerByStripeCustomerId(subscription.customer);
      // Send email to customer
      if (customer) {
        await EmailService.sendEmail(customer.email, 'Trial Ending Soon', 'Your trial period is ending soon.');
        logUtils.logSuccess(`handleTrialEnding email sent`);
        ScheduleEventService.createScheduleEvent({
          id: subscription.id,
          trial_end: subscription.trial_end,
          email_sent_count: 1,
          email: customer.email,
          type: 'trial_email_event'
        })

      } else {
        logUtils.logError(`\x1b[31mCustomer with ${subscription.customer} not found handleTrialEnding\x1b[0m`);
      }
    } catch (error) {
      logUtils.logError('handleTrialEnding error', error);
    }
  };
}

module.exports = new WebhookService();
