import { Schema,model } from "mongoose";

const quizSchema= new Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
    },  
   questions:[
      {
         type:questionSchema,
         required:[true,"Questions are required"],
      }
   ],
   courseId:{
      type:String,
      required:[true,"Course id is required"],
   },
   score:{  
      type:Number,
      required:[true,"Score is required"],
      default:-1
   },
   createdBy:{
      type:String,
   },
},{timestamps:true})

const questionSchema=new Schema({
   title:{
      type:String,
      required:[true,"Question is required"],
   },
   options:[
     {
      type:[String],
      required:[true,"Options is required"],
    }
   ],
   answer:{
      type:String,
      required:[true,"Answer is required"],
   }
})

const Quiz=model("Quiz",quizSchema);
const Question=model("Question",questionSchema);

export {Quiz,Question};
 