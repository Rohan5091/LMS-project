import sendMail from "../utills/sendMail.utills.js";
import generateSendOtpHTML from "../utills/sendOtpMessage.js";

const sendEmailController=async function(req,res,next){
  const {email,otp}=req.body;
  
  
  if (!email || !otp ) {
      return next(new ApiError(500,"email or otp is required"));
  }
  
  const messageHTML=generateSendOtpHTML(otp);

  try {
      await sendMail({
          email:email,
          subject:"Verify Email",
          messageHTML
      });
  } catch (error) {
      return next(new ApiError(500,error?.message));
  }
  
  return res.status(201).json({
      success:true,
      message:"Email sended succesfully",
  });
}

export default sendEmailController;