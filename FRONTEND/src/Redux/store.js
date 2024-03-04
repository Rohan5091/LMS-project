
import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from "./Slices/AuthSlices.js"
import courseSliceReducer from "./Slices/CourseSlices.js"
import rayzorpaySliceReducer from "./Slices/RazorpaySlice.js"
import LectureSliceReducer from "./Slices/LectureSlice.js"

const store=configureStore({
   reducer:{
      auth:authSliceReducer,
      course:courseSliceReducer,
      razorpay:rayzorpaySliceReducer,
      lecture:LectureSliceReducer
   },
   devTools:true
})
export default store;