import { useState } from "react";
import Homelayout from "../Layouts/Homelayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast"
import { Loginmethod} from "../Redux/Slices/AuthSlices";

function Login() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
 
  function handelformdata(e) {
    const { name, value } = e.target;
    setLoginData({
      ...LoginData,
      [name]: value,
    });
  }

  
  async function OnLogin(e) {
     e.preventDefault()
     
     if ( !LoginData.email || !LoginData.password ) {
         toast.error("Every field is required")
         return
     }
     
     if (!LoginData.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
       toast.error("please enter a valid email")
       return
     }
     if (!LoginData.password.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
       toast.error("password should be 6-16 charactors and it has atleast 1 number and 1 special charactor")
       return
     }
      
     
     const formData={
       ...LoginData
     }
     
     const response=await dispatch(Loginmethod(formData))
      if (response?.payload?.success) {
        navigate("/")
      }

     setLoginData({
      email: "",
      password: "",
     })

  }
  return (
    <Homelayout>
      <div className="flex items-center justify-center h-screen">
        <form noValidate onSubmit={OnLogin} className="flex  bg-black border rounded-xl p-10  gap-4  flex-col shadow-[0_0_10px_10px_green]">
          <h1 className="text-4xl font-semibold text-blue-500">
            Login Page
          </h1>
         
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email...."
              name="email"
              className="px-3 border rounded-md border-black bg-slate-300"
              onChange={handelformdata}
              value={LoginData.email}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              required
              placeholder="Enter your password....."
              name="password"
              className="px-3 border rounded-md border-black bg-slate-300"
              onChange={handelformdata}
              value={LoginData.password}
            />
          </div>
          <button className="bg-yellow-500 border-white mt-3 py-2 text-black font-bold text-lg rounded-md">
            Login
          </button>
          <p>
            Do not have a account?{" "}
            <Link
              className="text-yellow-500 text-lg font-semibold"
              to={"/SignUp"}
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </Homelayout>
  );
}
export default Login;
