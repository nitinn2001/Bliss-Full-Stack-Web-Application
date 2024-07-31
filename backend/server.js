import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { itemRouter } from "./routes/itemRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { cartRouter } from "./routes/cartRoute.js";
import { bookRouter } from "./routes/bookingRoute.js";
import Stripe from "stripe";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API Working!");
});

const stripe = new Stripe('sk_test_51PXhpQBXxFG1Uv1TLb4wlAPFMAcmz7CiBqeWd0ozTzK8bw1V4CfJfX4bdm7tYzgSONguF9fZnBuxLyU7ckgTu7O500zYBzmNCB');
const endpointSecret = 'whsec_...'; // Replace with your actual webhook secret

// API Endpoints
app.use('/api/item', itemRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/book', bookRouter);
app.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
    let event = request.body;

    if (endpointSecret) {
        const signature = request.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                request.body,
                signature,
                endpointSecret
            );
        } catch (err) {
            console.log('Webhook signature verification failed', err.message);
            return response.sendStatus(400);
        }
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log(`Payment for session ${session.id} was successful!`);
            // Fulfill the purchase, e.g., update order status in your database
            break;
        default:
            console.log(`Unhandled event type ${event.type}.`);
    }

    response.send();
});

// Database connection
mongoose.connect('mongodb://localhost:27017/bliss')
    .then(() => console.log("Server to Database connection successful"))
    .catch(() => console.log("Error in database connection"));

// Start server
const server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
