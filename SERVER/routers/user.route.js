
import {Router} from "express";
import {register,login,logout,profile} from "../controllers/user.controllers.js"
const router=Router()

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/profile",profile)

export default router;