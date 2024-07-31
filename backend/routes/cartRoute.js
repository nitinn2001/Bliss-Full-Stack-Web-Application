import express from "express"

import auth from "../middleware/auth.js"
import { addOne, addToBag, listItems, removeOne } from "../controllers/cartController.js"

export const cartRouter = express.Router()

cartRouter.post('/addToBag', auth, addToBag)
cartRouter.post('/removeOne', auth, removeOne)
cartRouter.post('/addOne', auth, addOne)
cartRouter.get('/listItems', auth, listItems)