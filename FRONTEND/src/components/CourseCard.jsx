import { useNavigate } from "react-router-dom"

function CourseCard({data,courseId}) {
  const navigator=useNavigate()
  return (
  <div onClick={()=>navigator(`/course/description/${courseId}`,{state:{...data}})} className="card w-96 bg-slate-700 shadow-xl ">
  <figure className="h-52">
    <img src={data?.thumbnail?.secure_url} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-teal-500 font-semibold text-2xl">{data?.title}</h2>
    <p className='line-clamp-2'>{data?.description}</p>
    <p >Categary: <span  className='text-teal-500'>{data?.category}</span></p>
    <p>Number of Lectures: <span className='text-teal-500'>{data?.numbersOfLecture}</span></p>
    <p>Created By: <span className='text-teal-500'>{data?.createdBy}</span></p>
  </div>
</div>
  )
}

export default CourseCard