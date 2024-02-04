import { useNavigate } from "react-router-dom"



function CourseCard({data}) {
  const navigator=useNavigate()
  return (
  <div onClick={()=>navigator("/course/description")} className="card w-96 bg-slate-700 shadow-xl ">
  <figure><img src={data?.thumbnail?.secure_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-500 font-semibold text-2xl">{data?.title}</h2>
    <p className='line-clamp-2'>{data?.description}</p>
    <p >Categary: <span  className='text-yellow-500'>{data?.category}</span></p>
    <p>Number of Lectures: <span className='text-yellow-500'>{data?.numbersOfLecture}</span></p>
    <p>Created By: <span className='text-yellow-500'>{data?.createdBy}</span></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default CourseCard