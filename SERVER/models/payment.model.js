

import { Schema, model } from "mongoose";

const PaymentModel=new Schema({
    razorpay_payment_id:{
       type:String,
       required:true
    },
    razorpay_subscription_id:{
       type:String,
       required:true
    },
    razorpay_signature:{
       type:String,
       required:true
    },
},{
  timestamps:true
})

const Payment=model("Payment",PaymentModel)

export default Payment;