import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import Footer from "../components/Footer";
function Homelayout({children}) {
   
  function opensideBar() {
     const bar=document.getElementsByClassName("drawer-side")
     bar[0].style.width = "auto";
    
  }
  function hidedrower() {
     const element=document.getElementsByClassName("drawer-toggle")
     element[0].checked = false;
  }



  return (
    <div className="min-w-[90vw] ">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-contain">
            <label htmlFor="my-drawer" className="cursor-pointer relative">
               <IoMenu size={"50px"} onClick={opensideBar} />
            </label>
          </div>
        <div className="drawer-side w-0 transition-all delay-500 ease-out ">
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
              <Link to={"/"}>
                 <span  className="text-lg ">Home</span>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                 <span className="text-lg ">About</span>
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                 <span className="text-lg ">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                 <span className="text-lg ">Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
      <Footer/>
    </div>
  );
}

export default Homelayout;
