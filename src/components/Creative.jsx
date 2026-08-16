import React from 'react'

const Creative = () => {
  return (
    <div>

    <div className='w-full bg-white py-2'>
        <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 h-[600px]'>
             <img className="w-full h-full object-cover" src="images/awesome.png" alt="" />
            </div>

         <div className='w-full md:w-1/2 bg-[#30233d] text-white flex items-center'>
            <div className='px-10 md:px-16 lg:px-20'>
                <h2 className='text-4xl font-bold leading-tight mb-6'>WE ARE <br />CREATIVE AGENCY</h2>
                <p className="text-xl text-gray-200 leading-6 mb-5 max-w-lg">
              We create innovative digital experiences that combine creativity,
              strategy, and technology to help businesses build a strong and
              memorable online presence.
            </p>

            <p className="text-xl text-gray-300 leading-6 mb-8 max-w-lg">
              Our team transforms creative ideas into modern and engaging
              solutions. From design to development, we focus on creating
              experiences that connect brands with their audience and help
              businesses grow.
            </p>
              <button className='mt-6 bg-[#f45b2a] px-8 py-3 text- font-bold text-white'>
            CLICK HERE</button>
            </div>
         </div>
        </div> 
    </div>
    </div>
  )
}

export default Creative

