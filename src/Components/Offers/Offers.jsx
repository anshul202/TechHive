import React from 'react'
import exclusiveimage from '../assets/exclusiveimage.jpg'


const Offers = () => {
  return (
    <div className='h-[65vh] flex m-auto w-[65%] py-5 px-[140px] mb-[150px] bg-gradient-to-t from-purple-300 to-slate-400'>
        <div className="offer-left flex-1 flex flex-col justify-center">
            <h1 className='text-green-950 text-[75px] font-semibold'>Exclusive</h1>
            <h1 className='text-green-950 text-[75px] font-semibold'>Offers for you</h1>
            <p className='text-black tex-[22px] font-semibold'>Only On Best Sellers Product</p>
            <button className='w-72 h-[70px] rounded-[35px] bg-black border-none text-slate-50 text-lg font-medium mt-10'>Check Now</button>
        </div>
        <div className="offer-right flex-1 flex justify-end items-center pt-12">
           
            <img src={exclusiveimage} alt="" />
        </div>
    </div>
  )
}

export default Offers