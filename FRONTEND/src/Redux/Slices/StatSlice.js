import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

const initialState={
   allUserCount:0,
   subscribedCount:0
}

const GetStats=createAsyncThunk("/get/stats",async ()=>{
    try {
       

      
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }

})

const StatSlice=createSlice({
   name:"state",
   initialState,
   reducers:{},
    extraReducers:(builder)=>{
      
    }

})

export default StatSlice.reducer