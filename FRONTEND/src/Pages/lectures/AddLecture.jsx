import React from 'react'
import { useLocation } from 'react-router-dom'
import Homelayout from '../../Layouts/Homelayout';

function AddLecture() {
  const {state}=useLocation()
  console.log(state);
  return (
    <Homelayout>
        <div className='min-h-[90vh] flex items-center justify-center'>
             <div className='w-1/3 '>

             </div>
        </div>
    </Homelayout>
  )
}

export default AddLecture