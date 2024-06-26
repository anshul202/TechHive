import React from 'react'

const Loginsignup = () => {
  return (
    <div className='w-full h-[100vh] pt-[100px] bg-amber-200 flex justify-center items-center'>
      <div className="loginsinupcontainer w-[560px] h-[600px] bg-white m-auto px-[60px] py-[40px]">
        <h1 className='my-[20px] mx-0 text-center text-xl'>Sign up</h1>
        <div className="loginsignupfields flex flex-col gap-6 mt-7">
          <input className='w-full h-16 p-5 outline-none border-amber-600 border-2 text-zinc-500 text-lg rounded-lg' type="text" name="" id=""placeholder='your name' />
          <input className='w-full h-16 p-5 outline-none border-amber-600 border-2 text-zinc-500 text-lg rounded-lg' type="email" name="" id=""placeholder='Email Address' />
          <input className='w-full h-16 p-5 outline-none border-amber-600 border-2 text-zinc-500 text-lg rounded-lg' type="password" name="" id=""placeholder='Password' />
          <button className='w-full p-4 text-white mt-[30px] border-none cursor-pointer text-lg font-medium bg-red-400' >Continue</button>
          <p className='loginsuinuplogn mt-[20px] text-gray-500 text-sm font-medium'>Already Have an account<span className='font-semibold text-red-950'>Login Here!</span></p>
          <div className="loginagree flex gap-2">
            <input type="checkbox" name='' id='' />
            <p className='font-light text-sm'>By Continuing, I agree to the terms of use and privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup