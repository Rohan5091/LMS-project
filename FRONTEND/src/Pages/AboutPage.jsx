import React from "react";
import Homelayout from "../Layouts/Homelayout";
import AboutImage from "../assets/Images/aboutMainImage.png";
import Slides from "../components/carouselSlides.jsx"
import {arr} from "../constants/AboutpageContants"
function AboutPage() {
  
  return (
    <Homelayout>
      <div className="w-full flex justify-center items-center flex-col ">
        <div className="flex sm:flex-row flex-col mt-5 items-center justify-center ">
          <div className="w-full sm:w-1/2 px-5  lg:px-16 space-y-5  ">
            <h1 className=" text-3xl sm:text-4xl lg:text-5xl text-yellow-500">
              Affordable and quility education
            </h1>
            <p>
              Our goal is to provide affordable and quility education to the
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
        <div className="carousel  mb-6 w-[50%]">
          {arr &&
            arr.map((obj, index) => {
              return (
                <Slides
                  {...obj}
                  slidenumber={index + 1}
                  key={index}
                  totalslides={arr.length}
                />
              );
            })}
        </div>
      </div>
    </Homelayout>
  );
}

export default AboutPage;
