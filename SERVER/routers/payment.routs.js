
import { Router } from "express";
import { GetRazorpayKey, buySubscription, cancelSubscription, getAllPaymentDetails, verifySubscription } from "../controllers/payment.controller.js";
import { authrizedRoll, authrizedSubscriber, isLoggedIn } from "../middlewares/userAuth.js";

const router=Router();

router
      .route("/razorpay-key")
      .get(isLoggedIn,GetRazorpayKey)

router
      .route("/subscribe")
      .post(isLoggedIn,buySubscription)

router
      .route("/verify")
      .post(isLoggedIn,verifySubscription)
router
      .route("/unsubscribe")
      .post(isLoggedIn,authrizedSubscriber,cancelSubscription)
router
      .route("/")
      .get(isLoggedIn,authrizedRoll("ADMIN"),getAllPaymentDetails)

export default router;