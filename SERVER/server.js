import {config} from "dotenv"
config()
import app from "./app.js";
import conectDB from "./config/dbConection.js"
import cloudinary from "cloudinary"
import EventEmitter from 'events';
EventEmitter.defaultMaxListeners = 15;



conectDB()
.then(()=>{
      app.listen(process.env.PORT,()=>{
            console.log(`Server is Runing at Port ${process.env.PORT}`);
      })
})
.catch((e)=>{
      console.log("database is not connected");
})




cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key:process.env.CLOUDINARY_API_KEY,
      api_secret:process.env.CLOUDINARY_API_SECRET
})