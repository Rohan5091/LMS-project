import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {logoutmethod} from "../Redux/Slices/AuthSlices.js"
function Homelayout({children}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn)
  const role=useSelector((state)=>state?.auth?.role)
  function opensideBar() {
     const bar=document.getElementsByClassName("drawer-side")
     bar[0].style.width = "auto";
  }
  function hidedrower() {
     const element=document.getElementsByClassName("drawer-toggle")
     element[0].checked = false;
  }
  function handlelogout(e) {
     e.preventDefault()
    const res=dispatch(logoutmethod())

    if (res?.payload?.success) {
       navigate("/")
    }
  }
  return (
    <div className="min-w-[90vw] h-screen ">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-contain">
            <label htmlFor="my-drawer" className="cursor-pointer relative">
               <IoMenu size={"50px"} onClick={opensideBar} />
            </label>
          </div>
        <div className="drawer-side w-0 max-w-fit z-50 transition-all delay-500 ease-out ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full space-y-4 bg-base-200 text-base-content">
            <li className=" absolute top-1 right-0">
              <ImCross onClick={hidedrower} size={"50px"}/>
            </li>
            <li>
              <Link  to={"/"}>
                 <span  className="text-lg ">Home</span>
              </Link>
            </li>
            { isLoggedIn && role=="ADMIN" && (
              <li>
              <Link  to={"/admin/dashboard"}>
                 <span  className="text-lg ">Admin Dashboard</span>
              </Link>
            </li>
            )}
            <li>
              <Link to={"/about"}>
                 <span className="text-lg ">About</span>
              </Link>
            </li>
            <li>
              <Link to={"/course/create"}>
                 <span className="text-lg ">Create course</span>
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                 <span className="text-lg ">Contact</span>
              </Link>
            </li>
           
            {
              (!isLoggedIn) && (
                <div className="width-full flex absolute bottom-14">
                    <li>
                      <Link to={"/login"}>
                        <span className="text-lg bg-yellow-500 border rounded-md px-3">Login</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>
                        <span className="text-lg bg-green-600 border rounded-md px-3">Signup</span>
                      </Link>
                    </li>
                </div>
              )
            }
            {
              (isLoggedIn) && (
                <div className="width-full flex">
                    <li>
                      <Link onClick={handlelogout}>
                        <span className="text-lg bg-yellow-500 border rounded-md px-3">Logout</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/user/profile"}>
                        <span className="text-lg bg-green-600 border rounded-md px-3">Profile</span>
                      </Link>
                    </li>
                </div>
              )
            }
          </ul>
        </div>
      </div>
      {children}
      <Footer/>
    </div>
  );
}

export default Homelayout;
