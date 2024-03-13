import User from "../models/user.model.js";
import ApiResponse from "../utills/apiresponse.js";
import sendMail from "../utills/sendMail.utills.js";

export const contactUs = async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new AppError("Name, Email, Message are required"));
  }

  try {
    const subject = "Contact Us Form";
    const textMessage = `${name} - ${email} <br /> ${message}`;

    await sendMail(process.env.CONTACT_US_EMAIL, subject, textMessage);
  } catch (error) {
    return next(new ApiResponse(400, error.message));
  }

  res.status(200).json({
    success: true,
    message: "Your request has been submitted successfully",
  });
};

export const userStats = async (req, res, next) => {
  try {
    
    const allUsersCount = await User.countDocuments();
  
    const subscribedUsersCount = await User.countDocuments({
      "subscription.status": "active",
    });
  
    res.status(200).json({
      success: true,
      message: "All registered users count",
      allUsersCount,
      subscribedUsersCount,
    });
  } catch (error) {
    return next(new ApiResponse(400, error.message));
  }
};
