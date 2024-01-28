import React from 'react'

function Slides({arr}) {
    const len=arr.length
  return (
         arr.length && (
          arr.map((obj,id)=>{
            <div id={id} className="carousel-item space-y-3  flex flex-col items-center  justify-center relative w-full">
            <img
              src={obj.src}
              className="w-[50%]"
            />
            <p className="text-xl text-white">{obj.quote}</p>
            <h3 className="text-2xl font-semibold text-blue-500">{obj.name}</h3>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
        </div>
          })
         )     
  )
}

export default Slides