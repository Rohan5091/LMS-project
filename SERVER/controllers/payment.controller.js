import User from "../models/user.model.js";
import ApiError from "../utills/error.utills.js";
import {razorpay} from "../server.js"
import crypto from "crypto"
import Payment from "../models/payment.model.js";
import generateEnrollmentEmailHTML from "../utills/EnrolledToCourseMessage.js";
export const GetRazorpayKey= async (req,res,next)=>{
      return  res.status(200).json({
            success:true,
            message:"Razorpay key",
            key:process.env.RAYZORPAY_KEY_ID
        })
    };
export const buySubscription= async (req,res,next)=>{
  try {
        const {id}=req.user
        const user = await User.findById(id)

        if (!user) {
           return next( new ApiError(409,"Unauthorised access"))
        }

        if(user?.role=="ADMIN"){
          return next( new ApiError(400,"You Don't need to subscribe"))
        }
        
    
            const subscription= await razorpay.subscriptions.create({
               plan_id:process.env.RAYZORPAY_PLAN_ID,
               customer_notify:1,
               total_count:1,
               expire_by: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60),
            })
           
            user.subscription.id=subscription.id
            user.subscription.status=subscription.status

            await user.save()
            
           return res.status(200).json({
              success:true,
              message:"subscribed succesfully",
              subscription_id:subscription.id
          });
        } catch (error) {
          return next( new ApiError(400,error.message))
        }
    };
export const verifySubscription= async (req,res,next)=>{

      try {
        
        const {id}=req.user;
        const {razorpay_payment_id,razorpay_signature,razorpay_subscription_id}=req.body;
        const user= await User.findById(id)
        if (!user) {
          return next(new ApiError(400,"Unauthorised access"))
        }
        const subscriptionId=user.subscription.id
        const generatedSignature=crypto
        .createHmac("sha256",process.env.RAYZORPAY_SECRET) 
        .update(`${razorpay_payment_id }|${subscriptionId}`)
        .digest("hex")
       
       
        if (generatedSignature !== razorpay_signature) {
         return  next(
              new ApiError(500,"Payment not verified please try again later")
           )
        }
 
        await Payment.create({
          razorpay_payment_id,
          razorpay_subscription_id,
          razorpay_signature
        })
        user.subscription.status="active";

        const messageHTML=generateEnrollmentEmailHTML(user.fullName);
        try {
          await sendMail({
              email:user.email,
              subject:"Enrollment Message",
              messageHTML
          });
          } catch (error) {
              console.log("error",error);
          }

            await user.save()

            return res.status(200).json({
            success:true,
            message:"Payment verified successfully",
            data:user
        })

      } catch (error) {
         next( new ApiError(500,error.message))
      }

    };
export const cancelSubscription= async (req,res,next)=>{
     try {
        const {id}=req.user;
        const user = await User.findById(id);
        if (!user) {
           return next( new ApiError(409,"Unauthorised access"))
        }

        if(user?.role=="ADMIN"){
          return next( new ApiError(400,"You Don't need to cancel subscribe"))
        }
     
          
          const subscriptionId=user.subscription.id;
          
          const subscription = await razorpay.subscriptions.cancel(
              subscriptionId 
          );
          
          user.subscription.status=subscription.status;
          user.subscription.id=subscription?.id || null
          await user.save()

          return res.status(200).json({
            success:true,
            message:"subscription cancelled successfully",
        })

        } catch (error) {
          return next( new ApiError(400,error.message))
        }
        
      
    };
export const getAllPaymentDetails= async (req,res,next)=>{

      try {
        const {count}=req.query
        const subscriptions=await razorpay.subscriptions.all({
           count:count || 100
        })

      const monthlySalesRecords=new Array(12)
      const finalMonth={}
      const allPayments={...subscriptions}
      const activeUserData=[];
      
        subscriptions?.items?.forEach((item,idx)=>{
            if (item?.status=="active") {
              activeUserData.push(item)
            }
        })
        
        activeUserData.forEach((e)=>{
           const date=new Date(e?.created_at*1000)
           const month=date?.getMonth()
           monthlySalesRecords[month]=monthlySalesRecords[month]+1
        })
         
        return res.status(200).json({
         success:true,
         message:"subscribers detail",
         monthlySalesRecords,
         finalMonth,
         allPayments
         })
         
      } catch (error) {
        return next( new ApiError(400,error.message))
      }

    };
