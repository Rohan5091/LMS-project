import { useNavigate } from "react-router-dom"

function DiniedPage() {
  const navigate=useNavigate()
  return (
    <div className="h-screen gap-4 flex flex-col items-center justify-center relative bg-[#1A2238]">
        <h1 className="text-9xl text-white font-semibold">403</h1>
        <p className="bg-black text-white rotate-12 px-2 absolute">Access Dinied</p>
        <button onClick={()=>navigate("/")} className="border p-2 rounded-md">Go to Home</button>
    </div>
  )
}

export default DiniedPage 