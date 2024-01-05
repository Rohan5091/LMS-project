import ApiError from "../utills/error.utills.js"
import jwt from "jsonwebtoken"

const isLoggedIn= async (req,res,next)=>{
        
        const token=(req.cookies && req.cookies.token)
        if (!token) {
            return next( new ApiError (400,"unautherised Access"))
        }
        const userDetail= await jwt.verify(token,process.env.JWT_SECRET)
        req.user=userDetail;
        next()
    };

    export default isLoggedIn;