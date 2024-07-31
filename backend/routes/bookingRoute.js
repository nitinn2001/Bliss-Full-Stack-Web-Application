import express from "express";
import { getCheckoutSession } from "../controllers/bookingController.js";

export const bookRouter = express.Router();

bookRouter.post('/checkout-session/', getCheckoutSession);
