import toast from "react-hot-toast"
import axiosInstance from "../../Hellers/axiosinstance"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState={
    coursedata:[]
}


 export const GetAllCourses=createAsyncThunk("courses/get",async()=>{
     try {
        const response=axiosInstance.get("/courses")
        toast.promise(response,{
          loading:"loading course data....",
          success:((data)=>{
             return(data?.data?.message)
          }),
          error:"Failed to get the courses"
        })
        return (await response).data.data
     } catch (error) {
        toast.error(error?.response?.data?.message)
     }
 })
 const CourseSlice=createSlice({
  name:"CourseSlice",
  initialState,
  reducers:{
      
  },
  extraReducers:(builder)=>{
     builder.addCase(GetAllCourses.fulfilled,(state,action)=>{
         if (action.payload) {
            console.log(action.payload);
            state.coursedata=[...action.payload];
         }
     })
  }
  }
 )
 export default CourseSlice.reducer;
