import mongoose from "mongoose";
import { itemModel } from "../models/itemModel.js";

const addItem = async (req, res) => {
    const item = new itemModel({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        images: req.body.images
    })

    try {
        await item.save()
        res.json({
            success: true,
            message: "Item added successfully"
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            message: "Item not added"
        })
    }
}

const getItems = async (req, res) => {
    const response = await itemModel.find({})
    if (response) {
        return res.json({
            data: response,
            message: "Successful"
        })
    }

}

export { addItem, getItems }