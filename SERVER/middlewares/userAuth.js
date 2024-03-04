import User from "../models/user.model.js";
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


const authrizedRoll= (...roles)=> async (req,res,next)=>{
       const currentUserRole=req.user.role ;   
       if (!roles.includes(currentUserRole)) {
           return next(new ApiError(400, "You do not have Permision Access this route"));              
       }
       next()
    };

const authrizedSubscriber= async (req,res,next)=>{
       const user= await User.findById(req.user.id)
       const currentUserRole=user.role ;   
       const subscription=user.subscription; 
       if (currentUserRole!=="ADMIN" && subscription.status!=="active") {
        return next(new ApiError(400, "You do not have Permision Access this route"));
       }   
       next()
    }

    export  {isLoggedIn,authrizedRoll,authrizedSubscriber};
    