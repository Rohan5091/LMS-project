import {config} from "dotenv"
config()
import app from "./app.js";
import conectDB from "./config/dbConection.js"


conectDB()
.then(()=>{
      app.listen(process.env.PORT,()=>{
            console.log(`Server is Runing at Port ${process.env.PORT}`);
      })
})
.catch((e)=>{
      console.log("database is not connected");
})