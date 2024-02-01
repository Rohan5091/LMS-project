
import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from "./Slices/AuthSlices.js"
import courseSliceReducer from "./Slices/CourseSlices.js"

const store=configureStore({
   reducer:{
      auth:authSliceReducer,
      course:courseSliceReducer
   },
   devTools:true
})
export default store;