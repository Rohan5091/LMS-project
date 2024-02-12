import { useState } from "react";
import Homelayout from "../Layouts/Homelayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast"
import { createAccount } from "../Redux/Slices/AuthSlices";

function SignUp() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [image, setImage] = useState("");
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });
 
  function handelformdata(e) {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  }
  function GetImage(e) {
     e.preventDefault();
     const uploadedImage=e.target.files[0]
    
     if (uploadedImage) {
        setSignUpData({
          ...signUpData,
          avatar:uploadedImage
        });

        // we can do this for to collect the metadata of the image

        const fileReader=new FileReader()
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load",function () {
             setImage(this.result)
        })
     }
  }

  async function createNewAccount(e) {
     e.preventDefault()
     if (!signUpData.fullName || !signUpData.email || !signUpData.password || !signUpData.avatar) {
         toast.error("every field is required")
         return
     }
     if (signUpData.fullName.length<5) {
         toast.error("name should be atleast 5 charactors")
         return
     }
     if (!signUpData.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
       toast.error("please enter a valid email")
       return
     }
     if (!signUpData.password.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
       toast.error("password should be 6-16 charactors and it has atleast 1 number and 1 special charactor")
       return
     }

     const formData=new FormData()
     formData.append("fullName",signUpData.fullName)
     formData.append("email",signUpData.email)
     formData.append("password",signUpData.password)
     formData.append("avatar",signUpData.avatar)
     
     const response=await dispatch(createAccount(formData))
     
      if (response?.payload?.success) {
        navigate("/")
      }
      
     setSignUpData({
      fullName: "",
      email: "",
      password: "",
      avatar: "",
     })
     setImage("")
  }

  return (
    <Homelayout>
      <div className="flex items-center justify-center h-screen">
        <form noValidate onSubmit={createNewAccount} className="flex  bg-black border rounded-xl p-10  gap-4  flex-col shadow-[0_0_10px_10px_green]">
          <h1 className="text-4xl font-semibold text-blue-500">
            Resistration Page
          </h1>
          <label className=" cursor-pointer mx-auto" htmlFor="uoload_image">
            {image ? (
              <img src={image} className="h-24 w-24 border rounded-full " alt="image" />
            ) : (
              <BsPersonCircle className="h-24 w-24 text-white" />
            )}
          </label>
          <input
            type="file"
            required
            className="hidden"
            name="uoload_image"
            id="uoload_image"
            accept=".jpeg .jpg .png .svg"
            onChange={GetImage}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName">Name :</label>
            <input
              type="text"
              id="fullName"
              required
              placeholder="Enter your name...."
              name="fullName"
              className="px-3 border rounded-md border-black bg-slate-300"
              onChange={handelformdata}
              value={signUpData.fullName}
            />
          </div>
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
              value={signUpData.email}
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
              value={signUpData.password}
            />
          </div>
          <button className="bg-yellow-500 border-white mt-3 py-2 text-black font-bold text-lg rounded-md">
            Create Account
          </button>
          <p>
            If already have a account?{" "}
            <Link
              className="text-yellow-500 text-lg font-semibold"
              to={"/login"}
            >
              login
            </Link>
          </p>
        </form>
      </div>
    </Homelayout>
  );
}

export default SignUp;
