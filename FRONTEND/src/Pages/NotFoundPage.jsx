import { useNavigate } from "react-router-dom"


function NotFoundPage() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-blue-400 relative">
        <span className="text-9xl text-yellow-500 tracking-widest">404</span>
        <p children className="bg-black text-white rotate-12 absolute">page not found....</p>
        <button className="border-yellow-900 border p-2 rounded-md">
          <a >
             <span onClick={()=>navigate(-1)} className="text-yellow-900">Go Back</span>
          </a>
        </button>
    </div>
  )
}

export default NotFoundPage