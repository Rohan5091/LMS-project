
import React from "react";
import Homelayout from "../Layouts/Homelayout.jsx";
import AboutImage from "../assets/Images/aboutMainImage.png";
import Slides from "../components/carouselSlides.jsx";
import { arr } from "../constants/AboutpageContants";
import gif3 from "../assets/Images/gif3.gif"; // Adjust path as necessary

function AboutPage() {
  return (
    <Homelayout>
      <div
        className="w-full flex justify-center items-center flex-col relative"
        style={{
          backgroundImage: `url(${gif3})`,
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the GIF from repeating
          opacity: 0.8, // Reduces opacity of the background image only
          zIndex: -5, // Keeps the background behind the content
          height: "150vh", // Ensures the background covers the full height
        }}
      >
        {/* Content Section */}
        <div className="w-full flex justify-center items-center flex-col relative z-10">
          <div className="flex sm:flex-row flex-col mt-5 items-center justify-center ">
            <div className="w-full sm:w-1/2 px-5 lg:px-16 space-y-5">
              <h1 className="text-5xl w-[100%] text-center pl-10 font-extrabold text-teal-300">
                "Affordable and quality education, that meets the expectations"
              </h1>
              <p className="text-2xl font-extralight pl-10 pt-10 text-teal-300">
                Our mission is to make quality education accessible and affordable for everyone across the globe. We aim to create a platform where aspiring teachers and eager students can connect, collaborate, and share their skills, creativity, and knowledge. By fostering this exchange, we empower individuals to grow personally and professionally. <br /> <br />
          
                Ultimately, our goal is to uplift individuals and communities by emphasizing the transformative power of education. By enabling access to knowledge and creativity, we strive to contribute to the overall growth and well-being of humanity.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex items-center">
              <img src={AboutImage} alt="about page image" />
            </div>
          </div>
          <div className="carousel mb-6 w-[50%]">
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
      </div>
    </Homelayout>
  );
}

export default AboutPage;
