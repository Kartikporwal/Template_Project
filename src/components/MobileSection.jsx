import React from 'react'

const MobileSection = () => {
  return (
    <div className='w-full bg-white py-5'>
      <div className='w-[90%] mx-auto flex flex-col md:flex-row'>
         <div className='w-full md:w-1/2 h-[450px] flex items-center justify-center'>
          <img className="h-[400px] object-contain" src="images/Iphone.png" alt="" />
         </div>
         <div className='w-full md:w-1/2 bg-[#30233d] text-white md:px-14 py-12'>
          <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-8'>
            WE ARE <br />CREATIVE AGENCY</h2>

            <div className='mb-7'>
              <h3 className='text-lg font-medium mb-2'>CREATIVE DESIGN</h3>
              <p className='text-xs text-gray-300 leading-5'>
                    We create modern and visually appealing designs that reflect your
                   brand identity and provide an engaging experience for your audience.
              </p>
            </div>
            <div className='mb-7'>
              <h3 className='text-lg font-medium mb-2'>SMART DEVELOPMENT</h3>
              <p className='text-xs text-gray-300 leading-5'>
                 Our development approach focuses on clean, scalable, and reliable
                solutions that work smoothly across different devices and platforms.
              </p>
            </div>
            <div className='mb-7'>
              <h3 className='text-lg font-medium mb-2'>BETTER EXPERIENCE</h3>
              <p className='text-xs text-gray-300 leading-5'>
                    We focus on usability and performance to build simple, fast, and
                 user-friendly digital experiences that keep your customers engaged.
              </p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default MobileSection
