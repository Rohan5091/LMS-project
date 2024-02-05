import { useLocation } from "react-router-dom"
import Homelayout from "../../Layouts/Homelayout"
import { useSelector } from "react-redux";



function CourseDescription() {
   const {state}=useLocation()
  const {data,role}=useSelector((state)=>state?.auth)
  
  return (
    <Homelayout>
    <div className="min-w-[90vw] flex pt-12 px-20 text-white flex-col justify-center items-center">
       <div className="grid grid-cols-2 gap-10 py-10 relative">
          <div className="space-y-5 mx-auto ">
             <img 
              src={state?.thumbnail?.secure_url}
              alt="thumbnail"
              className="w-96"
              />
              <div className="space-y-4">
                 <div className="flex  flex-col justify-between items-center text-xl">
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">
                           Total Lectures : {" "}
                        </span>
                        {state?.numbersOfLecture}
                    </p>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">
                          Instructure : {" "}
                        </span>
                        {state?.createdBy}
                    </p>
                    {
                      role=="ADMIN" || data?.subscription?.status=="ACTIVE" ? (
                        <button className="bg-yellow-500 text-2xl m-4 rounded-md px-5 py-3 w-full hover:bg-yellow-600 transition ease-in-out duration-300 font-bold ">
                            Watch leture
                        </button>
                      ):(
                        <button className="bg-yellow-500 m-4 text-2xl rounded-md px-5 py-1 w-full hover:bg-yellow-600 transition hover:text-black ease-in-out duration-300 font-bold ">
                           subscribe
                        </button>
                      )
                    }
                 </div>
              </div>

          </div>
          <div className="space-y-3 text-xl  w-[60%]">
             <h1 className="text-3xl  font-bold text-yellow-500 mb-5 text-center">
                {state.title}
             </h1>
             <p className=" text-yellow-500 font-semibold">Course description</p>
             <p className="line-clamp-2 ">{state?.description}</p>
          </div>
       </div>
    </div>
    </Homelayout>
  )
}

export default CourseDescription