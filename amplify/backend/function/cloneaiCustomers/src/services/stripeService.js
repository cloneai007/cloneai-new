const stripeConfig = require('../config/stripeConfig');
const stripe = require('stripe')(stripeConfig.accessKey);

class StripeService {
    fetchStipePlans = async () => {
        try {
            const prices = await stripe.prices.list({
                expand: ['data.product']
            });
            return prices?.data;
        } catch (e) {
            throw e;
        }
    }

    createStripeCustomer = async (email) => {
        const customer = await stripe.customers.create({
            email: email,
        });
        return customer;
    }

    cancelSubscription = async (subscriptionId) => {
        const deletedSubscription = await stripe.subscriptions.del(
            subscriptionId
        );
        console.log('result cancelSubscription', deletedSubscription);

        return deletedSubscription;
    }

    createStripeSubscription = async (payload) => {
        const { paymentMethodId, customerId, priceId, subscription } = payload;
        try {
            await stripe.paymentMethods.attach(paymentMethodId, {
                customer: customerId,
            });
        } catch (error) {
            throw error;
        }

        const updateCustomerDefaultPaymentMethod = await stripe.customers.update(
            customerId,
            {
                invoice_settings: {
                    default_payment_method: paymentMethodId,
                },
            }
        );

        console.log('updateCustomerDefaultPaymentMethod', updateCustomerDefaultPaymentMethod)

        let trial_period_days = 7;

        if (subscription?.id) {
            // If the customer has an existing subscription
            const currentTimestamp = Math.floor(Date.now() / 1000);

            // Check if the customer canceled the last subscription before the trial ended
            if (
                subscription.status === 'canceled' &&
                subscription.trial_end > currentTimestamp
            ) {
                // Calculate the remaining days of the previous trial period
                const remainingDays = Math.ceil((subscription.trial_end - currentTimestamp) / (24 * 60 * 60));

                // Adjust the trial period based on the remaining days of the previous trial
                trial_period_days = Math.min(remainingDays, 7);
            }
        }

        console.log('trial_period_days', trial_period_days);

        // Create the subscription
        const subs = await stripe.subscriptions.create({
            customer: customerId,
            items: [{ price: priceId }],
            expand: ['latest_invoice.payment_intent'],
            trial_period_days: trial_period_days,
            default_payment_method: paymentMethodId,
        });
        console.log('subscription...createStripeSubscription', subs)
        return subs;
    }
}

module.exports = new StripeService();
