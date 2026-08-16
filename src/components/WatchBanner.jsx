import React from 'react'

const WatchBanner = () => {
  return (
    <div className='w-full bg-white py-10'>
        <div className='relative w-full h-[250px] bg-[#f45b2a] overflow-hidden'>
            <div className='absolute left-[18%] top-1/2 z-10 -translate-y-1/2'>
                <h2 className='text-white text-5xl font-bold leading-tight'>WE ARE <br />
                CREATIVE</h2>
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                <img className='w-[200px] h-[250px] object-contain' src="images/watch.png" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default WatchBanner

