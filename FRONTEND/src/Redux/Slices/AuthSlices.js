
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Hellers/axiosinstance.js"
import toast from "react-hot-toast";

const initialState={
  isLoggedin:localStorage.getItem("isLoggedIn")|| false,
  roll:localStorage.getItem("role")|| "",
  data:localStorage.getItem("data")||{}
}

export const createAccount=createAsyncThunk("/auth/sigup", async (data)=>{
   try {
       const res= axiosInstance.post("/user/register",data);
       toast.promise(res,{
         loading:"wait! creating your account",
         success:((data)=>{
             return data?.data?.message;
         }),
         error:"Failed to create account"

       });
       return (await res).data;
   } catch (error) {
      toast.error(error?.response?.data?.message)
   }
})

export const Loginmethod=createAsyncThunk("/auth/login", async (data)=>{
   try {
       const res= axiosInstance.post("/user/login",data);
       toast.promise(res,{
         loading:"wait! login in process",
         success:((data)=>{
             return data?.data?.message;
         }),
         error:"Failed to LoggedIn"

       });
       return (await res).data;
   } catch (error) {
      toast.error(error?.response?.data?.message)
   }
})

const authSlice=createSlice({
  name:"authSlice",
  initialState,
  reducers:{}
})

export const {} = authSlice.actions
export default authSlice.reducer
