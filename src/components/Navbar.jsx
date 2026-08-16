import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-5 py-7 bg-gray-200 flex items-center justify-between h-20'>
      <img className='h-12'src="images/logo (3).png" alt="" />
         <h2 className='font-bold'>WEBPRO <br />
          TAGLINE HERE
         </h2>
       <div className='flex items-center gap-5 text-xl'>
                <a href=""><i className='fa-brands fa-facebook'></i></a>
                <a href=""><i className='fa-brands fa-twitter'></i></a>
                <a href=""><i className='fa-brands fa-dribbble'></i></a>
                <a href=""><i className='fa-brands fa-linkedin-in'></i></a>
            </div>
             <div className='flex gap-10 text-xl font-semibold'>
              <Link className="hover:text-blue-500 hover:underline" to='/'>Home</Link>
              <Link className="hover:text-pink-500 hover:underline" to='/about'>About Us</Link>
              <Link className="hover:text-emerald-500 hover:underline" to='/service'>Services</Link>
              <Link className="hover:text-red-600 hover:underline" to='/contact'>Contact Us</Link>
              
        </div>
    </div>
  )
}

export default Navbar
