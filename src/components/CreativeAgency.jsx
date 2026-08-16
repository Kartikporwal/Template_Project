import React from 'react'

const CreativeAgency = () => {
  return (
    <div className='bg-white w-full'>
    <div className='relative w-full h-full overflow-hidden'>
      <img className="w-full h-full object-cover" src="images/agency.png" alt=""/>
    
      <div className='absolute inset-0 flex items-center justify-end'>
        <div className='w-1/2 px-20'>
            <h1 className='text-8xl font-bold leading-tight'>
                WE ARE <br />
                CREATIVE AGENCY
            </h1>
            <p className='mt-5 text-xl leading-6 text-white'>
           We are a creative agency dedicated to turning ideas into meaningful
           digital experiences. Our team combines creativity, strategy, and
           technology to create modern and engaging <br />
           solutions that help brands
           stand out and grow.</p>
           <p className='mt-4 text-xl leading-6 text-white'>
            We create innovative digital experiences that combine creativity,
            strategy, and technology to help businesses build a strong and
            memorable online presence.</p>
           <button className='mt-6 bg-orange-600 px-8 py-3 text- font-bold text-white'>
            CLICK HERE</button>
        </div>
      </div>
        </div>      
    </div>
  )
}

export default CreativeAgency


