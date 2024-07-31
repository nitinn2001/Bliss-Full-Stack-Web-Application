import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    images: { type: Array, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }
})

export const itemModel = mongoose.model("item", itemSchema)