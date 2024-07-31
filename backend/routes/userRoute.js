import express from "express"
import { findUser, loginUser, registerUser } from "../controllers/userController.js"
import auth from "../middleware/auth.js"

export const userRouter = express.Router()

userRouter.post('/login', loginUser)
userRouter.post('/register', registerUser)
userRouter.post('/findUser', auth, findUser)