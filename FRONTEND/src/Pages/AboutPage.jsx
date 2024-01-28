import React from "react";
import Homelayout from "../Layouts/Homelayout";
import AboutImage from "../assets/Images/aboutMainImage.png";
import apj from "../assets/Images/apj.png";
import billGates from "../assets/Images/billGates.png";
import einstein from "../assets/Images/einstein.png";
import nelsonMandela from "../assets/Images/nelsonMandela.png";
import steveJobs from "../assets/Images/steveJobs.png";


function AboutPage() {
  const arr=[
    {
      src:apj,
      name:"APJ Abdul kalam",
      quote:"If you want to shine like a sun, first burn like a sun."
    }
  ]
  return (
    <Homelayout>
      <div className="w-full flex justify-center items-center flex-col ">
        <div className="flex sm:flex-row flex-col mt-5 items-center justify-center ">
          <div className="w-full sm:w-1/2 px-5  lg:px-16 space-y-5 z-20 ">
            <h1 className=" text-3xl sm:text-4xl lg:text-5xl text-yellow-500">
              Affordable and quility education
            </h1>
            <p>
              OUr goal is to provide affordable and quility education to the
              world.We are providing the platform for the aspiring teachers and
              the students to share their skills, creativity and knowledge to
              each other to empower and contribute in the growth and wellness of
              mankind
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex items-center">
            <img src={AboutImage} alt="about page image" />
          </div>
        </div>
        {/* <div className="carousel  mb-6 w-[50%]">
          <div id="slide1" className="carousel-item space-y-3  flex flex-col items-center justify-center relative w-full">
            <img
              src={apj}
              className="w-[50%]  "
            />
            <p className="text-xl text-white">If you want to shine like a sun, first burn like a sun.</p>
            <h3 className="text-2xl font-semibold text-blue-500">APJ Abdul Kalam</h3>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item space-y-4 flex-col  flex items-center justify-center relative w-full">
            <img
              src={billGates}
              className="w-[50%]  "
            />
            <p className="text-xl text-white">If you want to shine like a sun, first burn like a sun.</p>
            <h3 className="text-2xl font-semibold text-blue-500">Bill Gates</h3>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item space-y-4 flex-col flex items-center justify-center relative w-full">
            <img
              src={einstein}
              className="w-[50%] "
            />
            <p className="text-xl text-white">If you want to shine like a sun, first burn like a sun.</p>
            <h3 className="text-2xl font-semibold text-blue-500">Einstein</h3>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item space-y-4 flex-col flex items-center justify-center relative w-full">
            <img
              src={nelsonMandela}
              className="w-[50%]  "
            />
            <p className="text-xl text-white">If you want to shine like a sun, first burn like a sun.</p>
            <h3 className="text-2xl font-semibold text-blue-500">Nelson Mandela</h3>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item space-y-4 flex-col flex items-center justify-center relative w-full">
            <img
              src={steveJobs}
              className="w-[50%]"
            />
            <p className="text-xl text-white">If you want to shine like a sun, first burn like a sun.</p>
            <h3 className="text-2xl font-semibold text-blue-500">Steve Jobs</h3>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div> */}
        <Slides arr={arr}/>
      </div>
    </Homelayout>
  );
}

export default AboutPage;
