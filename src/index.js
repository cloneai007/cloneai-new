import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import globalvariables from "./configurations/globalvariables";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const key = 'pk_test_51KqzpnJ71VHv16QMCZk6tn1ORc7TFyXwfDQ72ts4yjv47AfKZhlu84TtW08HPnXy7hJ6VxKl42NWI58ShuLq9ke000RFoYTw4C';
const stripePromise = loadStripe(key);

Amplify.configure(awsmobile)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </React.StrictMode>
);
