import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: ["true", "Name must be required"],
      minlength: [4, "minimum length of name is 4"],
      maxlength: [50, "maximum length is 50"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: ["true", "email must be required"],
      lowercase: true,
      unique: true,
      match: [
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        "Use a valid email id",
      ],
    },
    password: {
      type: String,
      required: ["true", "password must be required"],
      select: false,
      minlength: [5, "Password must contain atleast 5 charactors"],
    },
    avatar: {
      public_id: {
        type: String,
      },
      public_url: {
        type: String,
      },
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    subscription:{
      type: String,
      enum: ["YES", "NO"],
      default: "NO",
    },

    forgetPasswordToken: {
      type: String,
    },
    forgetPasswordExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// this method is used to save the incrypted password to the db

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
      return next();
  }
  this.password=await bcrypt.hash(this.password,10)
  return next();

})

// this method for creating the JWT token for the user

userSchema.methods = {
  generateJWTtoken:async function () {
    return await jwt.sign(
      {
        id: this._id,
        email: this.email,
        role: this.role,
        subscription: this.subscription,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TOKEN_EXPIRY,
      }
    );
  },
  comparePassword:async function (password) {
        return await bcrypt.compare(password,this.password)
  } 
  
};

const User = model("User", userSchema);

export default User;
