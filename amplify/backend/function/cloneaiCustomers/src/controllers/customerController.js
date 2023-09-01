const CustomerService = require('../services/customerService');
const { v4: uuidv4 } = require('uuid');

class CustomerController {
  addBrokerAccount = async (req, res) => {
    try {
      const { email, interactiveBrokerAccount, ...rest } = req.body;

      if (!email) {
        return res.status(400).send({ message: 'Email is required' });
      }

      if (!interactiveBrokerAccount) {
        return res.status(400).send({ message: 'Interactive broker account is required' });
      }

      const customerByIBrokerAccount = await CustomerService.getCustomerByIBrokerAccount(interactiveBrokerAccount);

      if (customerByIBrokerAccount) {
        return res.status(400).send({ message: `Provided broker account already attached with email ${customerByIBrokerAccount.email}` });
      }

      const customerByEmail = await CustomerService.getCustomerByEmail(email);

      if (customerByEmail?.interactiveBrokerAccount) {
        return res.status(400).send({ message: `${customerByEmail.email} is already attached with broker account number ${customerByEmail.interactiveBrokerAccount}` });
      }

      if (!customerByEmail) {
        await CustomerService.createCustomer({ ...req.body, id: uuidv4() });
        const createdCustomer = await CustomerService.getCustomerByEmail(email);
        return res.status(200).send({ message: 'Customer created successfully', customer: createdCustomer });
      } else {
        const updatedCustomer = await CustomerService.updateCustomerByEmail(email, { ...rest, interactiveBrokerAccount });
        return res.status(200).send({ message: 'Customer updated successfully', customer: updatedCustomer });
      }
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ message: error.message || 'Internal server error' });
    }
  }

  getCustomerByInteractiveBrokerAccount = async (req, res) => {
    try {
      const { interactiveBrokerAccount } = req.params;
      const customer = await CustomerService.getCustomerByInteractiveBrokerAccount(interactiveBrokerAccount);
      res.status(200).json(customer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error?.message || 'Internal server error' });
    }
  };

  getCustomerByStripeCustomerId = async (req, res) => {
    try {
      const { stripeCustomerId } = req.params;
      const customer = await CustomerService.getCustomerByStripeCustomerId(stripeCustomerId);
      res.status(200).json(customer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error?.message || 'Internal server error' });
    }
  };

  getCustomerByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const customer = await CustomerService.getCustomerByEmail(email);
      res.status(200).json(customer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error?.message || 'Internal server error' });
    }
  };

  getAllCustomers = async (req, res) => {
    try {
      const customers = await CustomerService.getAllCustomers();
      res.status(200).json(customers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error?.message || 'Internal server error' });
    }
  };

  createCustomer = async (req, res) => {
    try {
      const { payload } = req.body;
      const createdCustomer = await CustomerService.createCustomer(payload);
      res.status(201).json(createdCustomer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error?.message || 'Internal server error' });
    }
  };

  updateCustomerByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const { updateValues } = req.body;
      const updatedCustomer = await CustomerService.updateCustomerByEmail(email, updateValues);
      res.status(200).json(updatedCustomer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error?.message || 'Internal server error' });
    }
  };
}

module.exports = new CustomerController();
