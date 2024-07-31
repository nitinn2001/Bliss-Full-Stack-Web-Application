import mongoose from "mongoose";
import { itemModel } from "../models/itemModel.js";
import Stripe from "stripe";
const stripe = new Stripe('sk_test_51PXhpQBXxFG1Uv1TLb4wlAPFMAcmz7CiBqeWd0ozTzK8bw1V4CfJfX4bdm7tYzgSONguF9fZnBuxLyU7ckgTu7O500zYBzmNCB');
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

const getCheckoutSession = async (req, res, next) => {
    try {
        const cartItems = req.body;

        if (!cartItems || Object.keys(cartItems).length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const lineItemsPromises = Object.keys(cartItems).map(async (itemId) => {
            const item = await itemModel.findById(itemId);
            if (!item) {
                throw new Error(`Item with ID ${itemId} not found`);
            }

            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.title,
                        description: item.description,
                        images: [item.images[0]],
                    },
                    unit_amount: item.price * 100,
                },
                quantity: cartItems[itemId]
            };
        });

        const lineItems = await Promise.all(lineItemsPromises);

        // const orderId = uuidv4();

        // lineItems.cartId = orderId
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            success_url: 'http://localhost:5173/after-checkout',
            cancel_url: 'http://localhost:5173/cart',
            line_items: lineItems,
            mode: 'payment',
        });

        console.log("session identifier", session)

        console.log("Came till here")

        res.status(200).json({
            success: true,
            session
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export { getCheckoutSession };
