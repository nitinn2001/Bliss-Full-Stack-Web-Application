// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.

import Stripe from "stripe";
import express from "express"

const stripe = new Stripe('sk_test_51PXhpQBXxFG1Uv1TLb4wlAPFMAcmz7CiBqeWd0ozTzK8bw1V4CfJfX4bdm7tYzgSONguF9fZnBuxLyU7ckgTu7O500zYBzmNCB');

const app = express();


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_8387fe5ce71aadb442f58707ebab602268b3b74a7c04faf2881d899bb83f0b62";

app.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    console.log(`Unhandled event type ${event.type}`);

    // Return a 200 response to acknowledge receipt of the event
    response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));