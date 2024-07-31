import mongoose from "mongoose";
import express from "express";
import { userModel } from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, address } = req.body;


    try {
        const exist = await userModel.findOne({ email: email.toLowerCase() })

        if (exist) {
            return res.json({
                success: false,
                message: "User Already exists"
            })
        }


        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address"
            });
        }

        const newUser = await userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email.toLowerCase(),
            password: password,
            address: address
        });

        console.log("User Added Successfully");


    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "User not added"
        });
    }

};

const loginUser = async (req, res) => {
    const { email, password } = req.body;


    const createToken = (id) => {
        const JWT_SECRET = "random#secret"
        return jwt.sign({ id }, JWT_SECRET)
    }

    try {
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Invalid email address"
            })
        }

        const user = await userModel.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Email not found"
            });
        }

        if (user.password != password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }

        const token = createToken(user._id)

        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "Login failed"
        });
    }
};

const findUser = async (req, res) => {
    try {
        let user = await userModel.findById(req.body.userId)
        if (user) {
            return res.json({
                success: true,
                user: user
            })
        }
    }
    catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
}

export { registerUser, loginUser, findUser };
