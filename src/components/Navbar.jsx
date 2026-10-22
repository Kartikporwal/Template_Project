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
             <div className='flex gap-10 text-xl font-bold'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About Us</Link>
              <Link to='/service'>Services</Link>
              <Link to='/contact'>Contact Us</Link>  
        </div>
        <div className='flex gap-5'>
           <Link className='bg-green-500 px-6 py-2 text-xl font-semibold rounded' to='/signup'>Sign Up</Link>
           <Link className='bg-gray-700 text-white px-6 py-2 text-xl font-semibold' to='/login'>Log In</Link>
           <Link className="px-2 py-2 border-2 rounded-3xl" to='/signup'><LogOut /></Link>
        </div>
    </div>
  )
}

export default Navbar
