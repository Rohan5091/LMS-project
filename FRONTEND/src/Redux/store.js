
import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from "./Slices/AuthSlices.js"
import courseSliceReducer from "./Slices/CourseSlices.js"
import rayzorpaySliceReducer from "./Slices/RazorpaySlice.js"
import LectureSliceReducer from "./Slices/LectureSlice.js"
import StatSliceReducer from "./Slices/StatSlice.js"
import QuizSliceReducer from "./Slices/QuizSlices.js"

const store=configureStore({
   reducer:{
      auth:authSliceReducer,
      course:courseSliceReducer,
      razorpay:rayzorpaySliceReducer,
      lecture:LectureSliceReducer,
      stat:StatSliceReducer,
      quiz:QuizSliceReducer
   },
   devTools:true
})
export default store;