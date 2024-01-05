
import {Router} from "express";
import {register,login,logout,profile} from "../controllers/user.controllers.js"
import isLoggedIn from "../middlewares/userAuth.js"
const userRoute=Router()

userRoute.post("/register",register)
userRoute.post("/login",login)
userRoute.get("/logout",logout)
userRoute.get("/profile",isLoggedIn,profile)

export default userRoute;