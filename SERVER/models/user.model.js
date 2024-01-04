
import {Schema, model} from "mongoose";

const userSchema= new Schema({
   fullName:{
      type:String,
      required:["true","Name must be required"],
      minlength:[4,"minimum length of name is 4"],
      maxlength:[50,"maximum length is 50"],
      lowercase:true,
      trim:true
   },
   email:{
      type:String,
      required:["true","email must be required"],
      lowercase:true,
      unique:true,
      match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"Use a valid email id"]
   },
   password:{
      type:String,
      required:["true","password must be required"],
      select:false,
      minlength:[5,"Password must contain atleast 5 charactors"],
   },
   avatar:{
      public_id:{
        type:String
      },
      public_url:{
        type:String
      }
   },
   role:{
      type:String,
      enum:["USER","ADMIN"] ,
      default:"USER" 
   },

   forgetPasswordToken:{
      type:String
   },
   forgetPasswordExpiry:{
       type:Date
  }
},{
  timestamps:true
});

userSchema.pre("save",function (next) {
    
   
   next()
})

const User =model("User",userSchema);

export default User;