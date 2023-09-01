const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const app = express();

// Middleware
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    const url = req.originalUrl;
    if (url.startsWith('/stripe-webhook')) {
      req.rawBody = buf.toString()
    }
  }
}));
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Routes
const routes = require('./routes');
app.use('/', routes);

module.exports = app;
