import React, { useRef, useEffect } from 'react';
import Homelayout from "../Layouts/Homelayout.jsx";
import { Link } from 'react-router-dom';
import homepageImage from "../assets/Images/homePageMainImage.png";
import { useDispatch } from 'react-redux';
import { useEffect as useReduxEffect } from 'react';
import { GetUserProfile } from '../Redux/Slices/AuthSlices.js';
import TopEducator from "../Pages/TopEducator.jsx";
import StudentsReviews from "../Pages/StudentsReviews.jsx";
import SocialMedia from "../Pages/SocialMedia.jsx";
import Carousel from "../Pages/ImageSlider.jsx";
import {Typed} from 'react-typed';

function Homepage() {
    const dispatch = useDispatch();

    async function loaddata() {
        dispatch(GetUserProfile());
    }

    useReduxEffect(() => {
        loaddata();
    }, []);

    const typedElement = useRef(null); // Reference for Typed

    useEffect(() => {
        if (typedElement.current) {
            // Ensure the element is available before attempting to load the typing effect
            typedElement.current = new Typed(typedElement.current, {
                strings: [
                    "Affordable Online courses.",
                    "Industry expert's Lectures.",
                    "24 x 7 Doubt Support.",
                    "Free Personal Guidance.",
                    "Quality Mentorship.",
                    "Mental Health Support."
                ],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
                showCursor: true,    // Show the cursor while typing
                cursorChar: '|',  
            });
        }
    }, []);

    return (
        <Homelayout>
            <div className='flex flex-col bg-gray-800 h-[100vh] sm:flex-row items-center sm:justify-center lg:mb-44 lg:pt-12 my-6'>
                <div className=' pl-6 space-y-5'>
                    <h1 className='text-6xl pb-20 font-extrabold text-teal-300'>
                        Keep Learning, and Keep Exploring!!
                    </h1>

                  
                  <div className="flex flex-row">

                  <h1 className='text-3xl pr-10 font-semibold sm:text-5xl mb-4'>
                        Here You Get 
                  </h1>
                  <div ref={typedElement} className="text-3xl font-semibold sm:text-5xl text-teal-300 mb-4">
                     {/* This is where the typing effect will happen */}
                  </div>


                  </div>


                    
                    <p>
                        We have a large library of courses taught by highly skilled faculties at a very affordable cost.
                    </p>
                    <div className='space-x-4'>
                        <Link to={"/courses"}>
                            <button className='bg-teal-400 transition-all delay-100 font-bold hover:bg-white text-black p-2 rounded-md'>
                                Explore Courses
                            </button>
                        </Link>
                        <Link to={"/contact"}>
                            <button className='text-teal-400 border font-bold border-teal-400 p-2 hover:bg-teal-300 hover:text-black rounded-md'>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className=" p-0 m-0 h-100vh[100%]">
                    <img src={homepageImage} alt="home page image" />
                </div>
            </div>

            

            <Carousel />
            <TopEducator />
            <StudentsReviews />
            <SocialMedia />
        </Homelayout>
    );
}

export default Homepage;