import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routers/user.route.js"
import errorMiddleware from "./middlewares/error.middlewares.js";

const app=express();
 
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
   origin:process.env.FRONTEND_URL,
   credentials:true
}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));

// 3 module


app.use("/api/v1/user/",userRoute);


app.use("/",(req,res)=>{
  res.send("Hey I am rohan malakar")   
});


app.all("*",(req,res,next)=>{
      res.status(404)
      res.send("OOPS! page not found")   
});

app.use(errorMiddleware)

export default app;