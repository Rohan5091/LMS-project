import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routers/user.route.js"
import errorMiddleware from "./middlewares/error.middlewares.js";
import courseRoute from "./routers/course.route.js";
import paymentRoute from "./routers/payment.routs.js";
import mescellaniousRoute from "./routers/miscellaneous.js";

const app=express();
 
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     credentials:true
// }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));




app.use("/api/v1/data/",mescellaniousRoute);
app.use("/api/v1/user/",userRoute);
app.use("/api/v1/payment/",paymentRoute);
app.use("/api/v1/courses/",courseRoute);

app.use("/",(req,res)=>{
  res.send("Hey I am rohan malakar")   
});


app.all("*",(req,res,next)=>{
      res.status(404)
      res.send("OOPS! page not found")   
});

app.use(errorMiddleware)

export default app;