import express from "express"
import { addItem, getItems } from "../controllers/itemController.js"
import multer from "multer"

export const itemRouter = express.Router()

itemRouter.get('/getItems', getItems)
itemRouter.post('/add', addItem)

