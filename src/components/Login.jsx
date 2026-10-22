import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full min-h-screen flex justify-center bg-gray-300'>
        <div className='h-full bg-gray-100 shadow max-w-4xl rounded-2xl mt-5'>
            <div className='text-center p-20 h-full'>
                <h1 className='text-4xl'>CREATE ACCOUNT</h1>
                <h3 className='text-3xl'>LogIn</h3>
                <h5 className='text-xl mt-2'>Don't have an account ?<Link className="text-blue-900"to='/signup'>Go to SignUp</Link></h5>
                <form className='text-center mt-10 font-semibold'>
                    <label className='text-xl'>Enter Email</label>
                    <input className='px-3 py-2 w-full border-2 mt-3 mb-4 block rounded'
                    type="email" placeholder='Email' name='email' />
                    <label className='text-xl'>Enter Password</label>
                    <input className='px-3 py-2 w-full border-2 mt-5 mb-4 block rounded'
                    type="password" placeholder='Password' name='password'/>
                    
                    <label className='text-xl'>Enter Confirm Password</label>
                    <input className='px-3 py-2 w-full border-2 mt-5 block rounded'
                    type="password" placeholder='Confirm Password' name='password'/>
                    <input className="w-full py-3 bg-blue-600 text-white mt-5 font-semibold rounded-2xl"type="submit" value="Login" />
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login



