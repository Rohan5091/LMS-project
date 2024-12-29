import {Router} from "express";
import sendEmailController from "../controllers/email.controller.js";
const emailRouter=Router()


emailRouter.post("/send",sendEmailController)

export default emailRouter;