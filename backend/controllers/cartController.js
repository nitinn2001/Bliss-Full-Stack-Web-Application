import mongoose from "mongoose";
import { userModel } from "../models/userModel.js";

const addToBag = async (req, res) => {
    try {
        let user = await userModel.findOne({ _id: req.body.userId })
        let itemId = req.body.itemId
        let quantity = req.body.quantity

        if (!user) {
            return res.json({
                success: false,
                message: "The user could not be found"
            })
        }

        let cartData = user.cartItems
        if (!cartData[itemId]) {
            cartData[itemId] = quantity
        }
        else {
            cartData[itemId] += quantity
        }

        await userModel.findByIdAndUpdate(req.body.userId, { $set: { cartItems: cartData } })
        res.json({
            success: true,
            message: "Product & Quantity added successfully"
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            message: "Product not added!"
        })
    }
}

const listItems = async (req, res) => {
    let userData = await userModel.findById(req.body.userId)
    if (!userData) {
        return res.json({
            success: false,
            message: "The user could not be found"
        })
    }

    return res.json({
        success: true,
        message: "skjbs",
        data: userData.cartItems
    })

}

const removeOne = async (req, res) => {

    try {
        let user = await userModel.findById(req.body.userId)
        if (!user) {
            return res.json({
                success: false,
                message: "User couldn't be found"
            })
        }

        let cartData = user.cartItems

        if (cartData[req.body.itemId]) {
            cartData[req.body.itemId] -= 1
        }

        let userData = await userModel.findByIdAndUpdate(req.body.userId, { $set: { cartItems: cartData } })
        res.json({
            success: true,
            message: "Removal of this item by 1 is successful",
            data: cartData
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
}

const addOne = async (req, res) => {
    try {
        let user = await userModel.findById(req.body.userId)
        if (!user) {
            return res.json({
                success: false,
                message: "User could not be found"
            })
        }

        let cartData = user.cartItems
        cartData[req.body.itemId] += 1

        await userModel.findByIdAndUpdate(req.body.userId, { $set: { cartItems: cartData } })
        res.json({
            success: true,
            message: "this item's quantity is increased by 1",
            data: cartData
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: "this item's quantity is not increased by 1"
        })
    }
}

export { addToBag, listItems, removeOne, addOne }