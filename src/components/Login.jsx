import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='absolute top-0 flex flex-col items-center pt-8 start-0 z-50 end-0 w-full bg-gradient-to-b from-[#2A2A2A] to-[#040404]'>
      <form className="w-[735px] bg-[#121212] px-32 rounded-lg pt-8 pb-16">
        <div className='text-center text-white font-bold'>
          <Link to={"/"} >
            <i className='fab fa-spotify text-4xl mb-2'></i>
          </Link>
          <h3 className='text-3xl'>Log in to Spotify</h3>
        </div>
        <div className='flex gap-2 flex-col text-sm items-center mt-10'>
          <button type="button" className="text-white w-[320px] font-semibold px-10 border border-gray-400 hover:border-white relative rounded-full py-3 items-center">
            <img src="https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg" className='absolute top-1/2 -translate-y-1/2 start-7' alt="google" />
            Continue with Google
          </button>
          <button type="button" className="text-white w-[320px] font-semibold px-10 border border-gray-400 hover:border-white relative rounded-full py-3 items-center">
            <img src="https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg" className='absolute top-1/2 -translate-y-1/2 start-7' alt="google" />
            Continue with Facebook
          </button>
          <button type="button" className="text-white w-[320px] font-semibold px-10 border border-gray-400 hover:border-white relative rounded-full py-3 items-center">
            <img src="https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg" className='absolute top-1/2 -translate-y-1/2 start-7' alt="google" />
            Continue with Apple
          </button>
        </div>
        <hr className='border-[#292929] mt-10' />
        <div className='w-[324px] mx-auto mt-8'>
          <div className="mb-5 text-white w-full">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email or username</label>
            <input type="email" id="email" className="bg-transparent border border-gray-500 text-sm rounded  focus:ring-white focus:border-white block w-full p-3.5 placeholder:text-gray-400 hover:border-white placeholder:font-semibold" placeholder="Email or username" required />
          </div>
          <div className="mb-5 text-white w-full">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Password</label>
            <input type="email" id="email" className="bg-transparent border hover:border-white border-gray-500 text-sm rounded  focus:ring-white focus:border-white block w-full p-3.5 placeholder:text-gray-400 placeholder:font-semibold" placeholder="Password" required />
          </div>
          <button type="submit" className="w-full bg-[#1ED760] hover:bg-[#3BE477] hover:scale-105 font-semibold rounded-full px-5 py-3 text-center">Login</button>
          <div className='mt-10 flex flex-col items-center gap-7'>
            <Link className='font-medium text-sm underline mx-auto text-white text-center' to={"/"}>Forgot your password?</Link>
            <div className='text-sm'>
              <span className='text-gray-400'>Don't have an account?</span>
              <Link className='font-medium text-sm underline mx-auto text-white text-center ms-2' to={"/"}>Sign up for Spotify?</Link>
            </div>
          </div>
        </div>
      </form>
      <div className='bg-[#121212] w-full text-center py-8 mt-10  text-[#b3b3b3] text-[12px]'>
        <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
      </div>
    </div>
  )
}

export default Login