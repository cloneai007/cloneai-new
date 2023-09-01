
const stripe = require('stripe')


/* const {
  updateUserSubscription,
  deleteUserSubscription,
} = require('./database'); */

exports.handler = async function (event, context, callback) {
  //const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const webhookSecret= "whsec_5fa25390847b1969e0051ce5e240a5a7ec150e66b19874d4e79760eb1cb31bbd"
  try {

//     console.log(event)
//     const requestId = event?.requestContext?.requestId;
//     const sig = event?.headers['Stripe-Signature'];
//     console.log("sig \n",sig)
//     console.log("event.body \n",event.body)
//     const body=JSON.stringify(event.body)

    

//     const stripeEvent = stripe.webhooks.constructEvent(body, sig, webhookSecret);
//     const eventType = stripeEvent.type ? stripeEvent.type : '';
//     // https://stripe.com/docs/api#event_object
//     const jsonData = JSON.parse(event.body);

//     console.log(`Event Type: ${eventType}`);
//     console.log(jsonData);

//     const subscriptionId = stripeEvent.data.object.id;
//     const customerId = stripeEvent.data.object.customer;
//     const priceId = stripeEvent.data.object.plan?.id;

//     let customerEmail;
//     customerEmail = stripeEvent.data.object['customer_details']?.email;
//     if (!customerEmail) {
//       const customer = await stripe.customers.retrieve(customerId);
//       customerEmail = customer.email;
//     }

//     switch (eventType) {
//       case 'customer.subscription.created':
//         console.log("customer subscription created")
//         break;
//       case 'customer.subscription.updated':
//         console.log("customer.subscription.updated", customerEmail, subscriptionId,priceId)
// /*         await updateUserSubscription(
//           customerEmail,
//           subscriptionId,
//           priceId,
//         ); */
//         break;
//       case 'customer.subscription.deleted':
//         console.log("customer.subscription.deleted", customerEmail  )
// /*         await deleteUserSubscription(
//           customerEmail,
//         ); */
//       default:
//         (
//         console.log('Unhandled event type')
//        // console.log(stripeEvent.data.object)
//         )
//         break;
//     }

    const data = {
      statusCode: 200,
      body: JSON.stringify({
        received: true,
      }),
    };
    
    return ;
  } catch (uncaughtError) {
    console.error(uncaughtError);
    throw uncaughtError;
  }
}