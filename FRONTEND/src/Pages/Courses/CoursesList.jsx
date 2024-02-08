import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {GetAllCourses} from "../../Redux/Slices/CourseSlices.js"
import Homelayout from "../../Layouts/Homelayout.jsx"
import CourseCard from "../../components/CourseCard.jsx"


function CoursesList() {

  const {coursedata}=useSelector((state)=>state?.course)
  const dispatch=useDispatch()
  async function LoadCourses() {
     await dispatch(GetAllCourses())
  }
  console.log(coursedata);
  useEffect(()=>{
    LoadCourses()
  },[])
  return (
    <Homelayout>
    <div className="min-h-[90vh] pt-12 pl-20 flex flex-col items-center gap-10 text-white">
         <h1 className="text-center text-3xl">
             Explore all courses made by <span className="font-bold text-yellow-500">Industry experts</span>
         </h1>
         <div className="flex flex-wrap gap-4 p-10">
             {coursedata?.map((course)=>{
                return <CourseCard key={course._id} data={course}/>
             })}   
         </div>
    </div>
    </Homelayout>
  )
}

export default CoursesList