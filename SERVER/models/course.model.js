
import {Schema,model} from "mongoose"

const courseSchema= new Schema({
      title:{
         type: String,
         required:[true,"title is required"],
         minLength:[6,"minimum length of title is 6"],
         maxLength:[59,"maximum length of tile is 25"],
         trim:true
      },
      description:{
         type:String,
         required:[true,"description is required"],
         minLength:[6,"minimum length of description is 6"],
         maxLength:[200,"maximum length of description is 200"],
      },
      category:{
         type:String,
         required:[true,"category is required"],
      },
      thumbnail:{
          public_id:{
            type:String,
            required:true
          },
       secure_url:{
          type:String,
          required:true
       }
      },
      lectures:[
        {
           title:String,
           description:String,
           lecture:{
               public_id:{
                  type:String,
                  required:true
               },
               secure_url:{
                  type:String,
                  required:true
               }
           }
        }
    ],
    numbersOfLecture:{
       type:Number,
       default:0
    },
    createdBy:{
        type:String,
        required:true
    }
},{
   timestamps:true
})

const Course=model("Course",courseSchema);

export default Course;