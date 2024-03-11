import { createSlice } from "@reduxjs/toolkit"

const initiateState={
   allUserCount:0,
   subscribedCount:0
}

const StatSlice=createSlice({
   name:"state",
   initiateState,
   reducers:{},
   extraReducers:(builder)=>{
      
   }

})

export default StatSlice.reducer