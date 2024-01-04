import AppError from "../utills/error.utills"
import User from "../models/user.model"
const register= async (req,res,next)=>{
    
     const{fullName,email,password}=req.body;
     if (!fullName || !email ||!password) { 
        return next(new AppError(400,"Every field must be required")) 
     }

     const userExist=User.findOne({email})
     if (userExist) {
        return next(new AppError(400,"User is already Exist")) 
     }
     
     const user=await User.create({
         fullName,
         email,
         password,
         avatar:{
            public_id:email,
            public_url:"https://res.cloudanary"
         }
     })
     if(!user){
        return next(new AppError(400,"User is not created")) 
     }

     // todo file upload
    await user.save()

    }
const login= async (req,res)=>{
    
    }
const logout= async (req,res)=>{
    
    }
const profile= async (req,res)=>{
    
    }

export {register,login,logout,profile};