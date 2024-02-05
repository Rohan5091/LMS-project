import { useState } from "react"
import Homelayout from "../Layouts/Homelayout"
import toast from "react-hot-toast"
import axiosInstance from "../Hellers/axiosinstance"



function Contact() {

  const [inputText,setInputText]=useState({
     Name:"",
     email:"",
     message:""
  })

  const handelformdata=function (e) {
     e.preventDefault()
     const {name,value}=e.target
     setInputText({
      ...inputText,
      [name]:value
    })
  }
  
  async function onsubmitform(e) {
     e.preventDefault()
     
     if (!inputText.email || !inputText.Name || !inputText.message) {
      toast.error("every field is required")
       return
     }
     if (!inputText.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      toast.error("please enter a valid email")
      return
    }
    if (!inputText.password.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
      toast.error("password should be 6-16 charactors and it has atleast 1 number and 1 special charactor")
      return
    }
     try {
        // const response=axiosInstance.post("/contact",inputText)
        toast.promise(response,{
           loading:"submitting your message",
           success:"your message is submitted successfully",
           error:"Failed to submit your form"
        })
       const contactResponse=await response;
       if (contactResponse?.data?.success) {
        setInputText({
          Name:"",
          email:"",
          message:""
        })
       }
     } catch (error) {
        toast.error(error.message)
     }
  }

  return (
    <Homelayout>
      <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col  items-center justify-center gap-2 p-8 rounded-md text-white shadow-[0_0_10px_black]">
        <h1 className="text-3xl font-semibold">Contact form</h1>
        <div className="flex  flex-col gap-2 ">
            <label htmlFor="Name">Name :</label>
            <input
              type="text"
              id="Name"
              required
              placeholder="Enter your name...."
              name="Name"
              className="px-3 w-[17vw] border rounded-md py-1  bg-transparent text-white"
               onChange={handelformdata}
               value={inputText.Name}
            />
          </div>
        <div className="flex flex-col gap-2 ">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              required
              placeholder="Enter your email...."
              name="email"
              className="px-3 w-[17vw]  border rounded-md py-1  bg-transparent text-white"
               onChange={handelformdata}
               value={inputText.email}
            />
          </div>
        <div className="flex flex-col w-full gap-2">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              required
              placeholder="Enter your message...."
              name="message"
              className="px-3 border w-[17vw] rounded-md py-1 h-40 resize-none  bg-transparent text-white"
               onChange={handelformdata}
               value={inputText.message}
            />
          </div>
          <button type="submit" className="bg-yellow-500  border-transparent rounded-md w-full py-1 ">Submit</button>
      </form>
      </div>
    </Homelayout>
  )
}

export default Contact