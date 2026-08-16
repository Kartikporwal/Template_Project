import React from 'react'

const ContactSection = () => {
  return (
    <>
    <div className='w-full h-[220px] bg-[#30233d] flex flex-col justify-center items-center text-white mt-2'>
        <h1 className='text-4xl md:text-5xl font-bold'>CONTACT US</h1>
        <p className='mt-3 text-gray-300'>We'd love to hear from you</p>
    </div>

    <div className='w-[90%] max-w-6xl mx-auto py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div>
                <h2 className='text-xl font-bold text-gray-800 mb-10'>
                    CONTACT US</h2>
                    <div className='flex items-center mb-8'>
                        <div className='w-14 h-14 rounded-full  bg-[#f45b2a] flex items-center justify-center text-white text-xl'>
                             <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div className='ml-5'>
                            <h3 className='font-bold text-gray-800'>EMAIL</h3>
                             <p className="text-sm text-gray-500">
                                    hello@creativeagency.com
                                </p>
                        </div>
                    </div>
                    <div className='flex items-center mb-8'>
                        <div className='w-14 h-14 rounded-full bg-[#f45b2a] flex items-center justify-center text-white text-xl'>
                              <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className='ml-5'>
                            <h3 className='font-bold text-gray-800'>CALL US !</h3>
                            <p className='text-sm text-gray-500'>+91 1234567890</p>
                        </div>
                    </div>
                    <div className='flex items-center mb-8'>
                        <div className='w-14 h-14 rounded-full bg-[#f45b2a] flex items-center justify-center text-white text-xl'>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='ml-5'>
                            <h3 className='font-bold text-gray-800'>ADDRESS</h3>
                            <p className='text-sm text-gray-500'>123, Main Road, New City</p>
                            <p className='text-sm text-gray-500'>India 123456</p>
                        </div>
                    </div>
            </div>
            <div>
                <h2 className='text-xl font-bold text-gray-800 mb-8'>SAY HELLO !</h2>
                <form className='flex flex-col'>
                    <input type="text" placeholder='Name'
                    className='border-b border-gray-400 py-3 mb-5 outline-none' />
                      <input type="email" placeholder='Email'
                    className='border-b border-gray-400 py-3 mb-5 outline-none' />
                      <input type="text" placeholder='Phone'
                    className='border-b border-gray-400 py-3 mb-5 outline-none' />
                    <textarea placeholder='Message'
                    className='border-b border-gray-400 py-3 mb-5 outline-none resize-none'></textarea>
                    <button type='submit'
                    className='w-40 py-3 bg-[#f45b2a] text-white text-sm font-bold hover:bg-[#d9471c]'>
                    SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </div>
     </>
  )
}

export default ContactSection
