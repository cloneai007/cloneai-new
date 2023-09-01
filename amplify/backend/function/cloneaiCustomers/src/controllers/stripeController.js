const StripeService = require('../services/stripeService');
const CustomerService = require('../services/customerService');
const { v4: uuidv4 } = require('uuid');

class StripeController {
    getAllPlans = async (req, res) => {
        try {
            const plans = await StripeService.fetchStipePlans();
            res.status(200).json(plans);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message || 'Internal server error' });
        }
    };

    cancelSubscription = async (req, res) => {
        const { id } = req.body;
        console.log('id', id);
        try {
            const result = await StripeService.cancelSubscription(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message || 'Internal server error' });
        }
    }

    createUserSubscription = async (req, res) => {
        const { email, paymentMethodId, priceId, planName } = req.body;
        try {
            if (!email) {
                return res.status(400).send({ message: 'Email is required' });
            }
            if (!paymentMethodId) {
                return res.status(400).send({ message: 'paymentMethodId is required' });
            }
            if (!priceId) {
                return res.status(400).send({ message: 'priceId is required' });
            }

            const customer = await CustomerService.getCustomerByEmail(email);
            const payload = {
                subscription: {
                    ...(customer?.subscription || {}),
                    plan: {
                        ...(customer?.subscription?.plan || {}),
                        name: planName
                    }
                }
            }

            if (!customer) {
                await CustomerService.createCustomer(Object.assign(payload, { email, id: uuidv4() }));
            } else {
                await CustomerService.updateCustomerByEmail(email, payload);
            }
            
            if (customer && customer?.subscription && customer?.subscription?.status !== 'canceled') {
                return res.status(400).send({ message: `You already have a subscription with status ${customer.subscription.status}` });
            }

            let stripeCustomer = { id: customer?.stripeCustomerId }

            if (!stripeCustomer.id) {
                stripeCustomer = await StripeService.createStripeCustomer(email);
                console.log('customer createUserSubscription', stripeCustomer);
            }

            const subscription = await StripeService.createStripeSubscription({
                paymentMethodId,
                priceId,
                customerId: stripeCustomer.id,
                subscription: customer?.subscription || {}
            });
            res.status(200).json(subscription);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message || 'Internal server error' });
        }
    }
}

module.exports = new StripeController();
