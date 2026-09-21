import React from 'react'
import {Link} from 'react-router-dom'
import {LogOut} from 'lucide-react'

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
             <div className='flex gap-10 text-xl font-semibold border-gray-500 border-4 rounded-full px-6'>
              <Link className="hover:text-blue-500" to='/'>Home</Link>
              <Link className="hover:text-pink-500" to='/about'>About Us</Link>
              <Link className="hover:text-emerald-500" to='/service'>Services</Link>
              <Link className="hover:text-red-600" to='/contact'>Contact Us</Link>  
        </div>
        <div className='flex gap-5'>
           <Link className='border-4 px-5 py-1 rounded-2xl hover:bg-amber-500 font-bold' to='/login'>Login</Link>
           <Link className='border-4 px-5 py-1 rounded-2xl hover:bg-emerald-400 font-bold' to='/signup'>Signup</Link>
           <Link className="px-2 py-2 border-2 rounded-3xl hover:bg-red-500" to='/signup'><LogOut /></Link>
        </div>
    </div>
  )
}

export default Navbar
