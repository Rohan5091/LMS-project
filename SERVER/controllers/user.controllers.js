
import User from "../models/user.model.js"
import ApiResponse from "../utills/apiresponse.js"
import ApiError from "../utills/error.utills.js"
import emailValidator from "email-validator"

const cookieOptions={
    maxAge:7*1000*60*60*24,// 7days
    httpOnly:true,
    secure:true
};

const register= async function (req,res,next){
       const {fullName,email,password}=req.body;

       if (!fullName || !email || !password) {
         return next(new ApiError(409, "Every field is required")) 
       // throw new ApiError(400,"Every field is required")
       }
 
      //Email validator
       const valid=emailValidator.validate(email)
       if (!valid) {
        return next(new ApiError(409, "Enter a valid email id")) 
       }
      // find that the user is present or not 
       const emailExist= await User.findOne({email})

       if (emailExist) {
        return next(new ApiError(409, "User is already exist")) 
       }

        
           const user= await User.create({
                 fullName,
                 email,
                 password,
                 avatar:{
                    public_id:email,
                    public_url:null
                 }
           })
           
           if (!user) {

        return next(new ApiError(409, "User is not created")) 
            
           }
           
         await user.save();
         user.password=undefined;
        
         const token=await user.generateJWTtoken()
         res.cookie("token",token,cookieOptions);
          

       return res.status(202).json({
          success:true,
          message:"USER IS SUCESSFULLY RESISTER TO THE ",
          data:user

       })
     
    }

const login= async (req,res,next)=>{
      const {email,password}=req.body;

      if (!email || !password) {
         return next(new ApiError(409, "Every field is required")) 
      }
      
      const user= await User.findOne({email}).select("+password");
       
      if (!user) {
        return next(new ApiError(409, "Unautherised access"))  
      }
       
        
      if (!(await user.comparePassword(password))) {
        return next(new ApiError(409, "Incorrect password"))  
      }
      const token= await user.generateJWTtoken();
      res.cookie("token",token,cookieOptions)
    
      
     return res.status(202).json({
        success:true,
        message:"user loged in sucessfully"
      })

    }

const logout= async (req,res)=>{
    
    res.cookie("token",null,{
       secure:true,
       maxAge:0,
       httpOnly:true
    });
     res.status(202).json({
        success:true,
        message:"user login sucessfully"
     })
    }
const profile= async (req,res,next)=>{

  try {
    const userId=req.user.id;
    const user= await User.findById(userId)

    res.status(202).json({
        success:true,
        message:"user Details",
        data:user
    })
  } catch (error) {
    return next(new ApiError(500, error.message))  
  }
    }

export {register,login,logout,profile};