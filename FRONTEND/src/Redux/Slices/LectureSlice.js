import { createSlice } from "@reduxjs/toolkit";

const initialState={
   lectures:[]
}



const LectureSlice=createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:((builder)=>{

    })
})


export default LectureSlice.reducer