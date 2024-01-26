
import { createSlice } from "@reduxjs/toolkit";

const initialState={
  isLoggedin:localStorage.getItem("isLoggedIn")|| false,
  roll:localStorage.getItem("role")|| "",
  data:localStorage.getItem("data")||{}
}

const authSlice=createSlice({
  name:"authSlice",
  initialState,
  reducers:{}
})

export const {} = authSlice.actions
export default authSlice.reducer
