import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
    const JWT_SECRET = "random#secret"

    const token = req.headers.token
    if (!token) {
        return res.json({
            success: false,
            message: "Token wasn't found"
        })
    }

    try {
        const token_decode = jwt.verify(token, JWT_SECRET)
        req.body.userId = token_decode.id
        next()
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            message: err
        })
    }

}
export default auth

