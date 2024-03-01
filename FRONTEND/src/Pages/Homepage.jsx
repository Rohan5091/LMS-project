import React from 'react'
import Homelayout from "../Layouts/Homelayout.jsx"
import { Link } from 'react-router-dom'
import homepageImage from "../assets/Images/homePageMainImage.png"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GetUserProfile } from '../Redux/Slices/AuthSlices.js'


function Homepage() {
   const dispatch=useDispatch()
  
  async function loaddata() {
    await dispatch(GetUserProfile())
 }

  useEffect(()=>{
     loaddata()
  },[])
  return (
     <Homelayout>
          <div className='flex flex-col sm:flex-row items-center sm:justify-center lg:mb-44 lg:pt-12  my-6 '>
              <div className='sm:w-1/2 pl-6 space-y-5 '>
                  <h1 className='text-3xl font-semibold sm:text-5xl mb-4'>
                     Find out best <span className='text-yellow-500'>Online course</span>
                  </h1>
                  <p>
                     We have large library of courses taught by highly skilled faculties at a very affordable cost
                  </p>
                  <div className='space-x-4'>
                      <Link to={"/courses"}>
                         <button className='bg-yellow-500 transition-all delay-100 hover:bg-yellow-600 text-black p-2 rounded-md'>Explore Courses</button>
                      </Link>
                      <Link to={"/contact"}>
                         <button className='text-yellow-500 border border-yellow-500 p-2 rounded-md'>Courses</button>
                      </Link>
                  </div>
              </div>
              <div>
                 <img src={homepageImage} alt="home page image" />
              </div>

          </div>
     </Homelayout>
  )
}

export default Homepage