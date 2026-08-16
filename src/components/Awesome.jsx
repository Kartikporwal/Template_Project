import React from 'react'

const Awesome = () => {
  return (
    <div className='w-full bg-white py-10'>
        <div className='w-[90%] mx-auto flex items-center'>
            <div className='w-[25%] px-5'>
                <h2 className='text-5xl font-bold  text-gray-800'>
                    WHAT <br />MAKES US <br /> AWESOME ?
                </h2>
                <button className='mt-6 bg-[#30233d] text-white px-7 py-3 font-bold'>
                    CLICK HERE</button>
            </div>

            <div className='w-[75%] flex'>
                <div className='w-1/3'>
                  <div className='bg-[#f45b2a] h-[150px] flex flex-col items-center justify-center text-white'>
                    <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 mb-4'>
                        <i className="fa-regular fa-flag text-xl"></i>
                    </div>
                    <h3 className='text-sm font-semibold'>
                        We are <br />Creative
                    </h3>
                  </div>
                  <div className='bg-white px-7 py-5'>
                    <p className='text-xl text-gray-600'>
                           We turn ideas into creative digital experiences by combining
                           modern design, fresh concepts, and innovative thinking to make
                          every project unique and engaging.
                    </p>
                    </div> 
                </div>
                 <div className='w-1/3'>
                  <div className='bg-[#f45b2a] h-[150px] flex flex-col items-center justify-center text-white'>
                    <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 mb-4'>
                        <i className="fa-regular fa-desktop text-xl"></i>
                    </div>
                    <h3 className='text-sm font-semibold'>We are <br />Better</h3>
                    </div>

                        <div className="bg-white px-7 py-5">
                            <p className="text-xl text-gray-600">
                                We focus on quality, performance, and user experience to build
                               reliable digital solutions that are simple to use, visually
                               appealing, and designed to deliver better results.
                            </p>
                        </div>
                 </div>
                 <div className='w-1/3'>
                  <div className='bg-[#f45b2a] h-[150px] flex flex-col items-center justify-center text-white'>
                    <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 mb-4'>
                        <i className="fa-regular fa-user text-xl"></i>
                    </div>
                    <h3 className='text-sm font-semibold'>We are <br />Best</h3>
                    </div>

                        <div className="bg-white px-7 py-5">
                            <p className="text-xl text-gray-600">
                          We believe in delivering our best through dedication, teamwork,
                        and attention to detail. Our goal is to create solutions that
                       help brands grow and stand out in the digital world.     
                            </p>
                        </div>
                 </div>
        </div>
      </div>
    </div>
  )
}

export default Awesome
