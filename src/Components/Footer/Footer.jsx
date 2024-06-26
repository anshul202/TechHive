import React from 'react'
import { FaInstagramSquare, FaPinterest, FaPinterestSquare, FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-12 mt-5'>
        <div className="footerlogo flex items-center gap-5 ">
            <img src="footerlogo" alt=""/>
            <p className='text-slate-600 text-5xl font-bold'>TechHive</p>
        </div>
        <ul className='footerlinks flex list-none gap-12 text-black text-[20]'>
            <li className='cursor-pointer' >Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className="footer-social-icons flex gap-5 ">
            <div className="bg-slate-100 border-2 border-slate-400 ">
            <FaInstagramSquare size={50}/>
            </div>
            <div className=" bg-slate-100 border-2 border-slate-400">
                <FaPinterestSquare size={50}/>
            </div>
            <div  className=" bg-slate-100 border-2 border-slate-400">
                <FaWhatsappSquare size={50}/>
            </div>
        </div>
        <div className="flex flex-col items-center gap-8 w-full mb-7 text-black text-[28px]">
            <hr className='w-[80%] h-1 border-none rounded-[10px] bg-blue-950' />
            <p className='text-slate-600 text-sm font-bold'>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer