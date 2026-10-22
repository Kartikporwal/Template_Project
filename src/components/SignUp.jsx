import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='w-full min-h-screen flex justify-center bg-gray-300'>
        <div className='h-full bg-gray-100 shadow max-w-4xl rounded-2xl mt-5' >
            <div className='text-center p-20  h-full'>
                <h1 className='text-4xl'>Welcome to <span className='text-blue-900'>CreativeX</span></h1>
                <h3 className='text-xl mt-4'>Create your Account</h3>
                <form className='text-center mt-10 font-semibold'>
                    <label className='text-xl'>Enter Name</label>
                    <input className='px-3 py-2 w-full border-2 mt-3 mb-4 rounded'
                    type="text" placeholder='Name' name='name' />
                    <label className='text-xl'>Enter Email</label>
                    <input className='px-3 py-2 w-full border-2 mt-3 mb-4 rounded block'
                    type="email" placeholder='Email' name='email' />
                    <label className='text-xl'>Enter Password</label>
                    <input className='px-3 py-2 w-full border-2 mt-3 mb-4 rounded block'
                    type="password" placeholder='Password' name='password'/>
                    <h5 className='text-xl mt-2'>Already have an account ?<Link className="text-blue-800" to='/login'>Log In</Link></h5>
                    <input className="w-full py-3 bg-blue-600 text-white mt-5 font-semibold rounded-2xl"type="submit" value="Create Account" />
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default SignUp
