import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo _nobg.svg'
import { CiShoppingCart } from "react-icons/ci";
import {NavLink} from "react-router-dom" 

const Navbar = () => {
    const [Menu, setMenu] = useState("shop")
  return (
    <div className='flex justify-around p-4 shadow-sm'>
        <div className="nav-logo flex items-center gap-3">
            <img className="h-10 w-10" src={logo} alt="logo" />
            <p className='text-black font-semibold text-3xl'>TechHive</p>
        </div>
        <ul className='nav-menu flex items-center list-none gap-12 text-gray-500 text-lg font-medium'>
            <li  className='cursor-pointer' onClick={()=>{
                setMenu('shop')
            }}><NavLink to="/">Shop</NavLink> {Menu==='shop' && <hr className='border-none w-[80%] h-1 rounded-md bg-red-500 transition-all hover:width-[20%] hover:h-2'/>}</li>
            <li  className='cursor-pointer' onClick={()=>{
                setMenu('mobiles')
            }}><NavLink to="/mobiles">Mobiles</NavLink>{Menu==='mobiles' && <hr className='border-none w-[80%] h-1 rounded-md bg-red-500'/>}</li>
            <li  className='cursor-pointer' onClick={()=>{
                setMenu('laptops')
            }}><NavLink to="/laptops">Laptops</NavLink>{Menu==='laptops' && <hr className='border-none w-[80%] h-1 rounded-md bg-red-500'/>}</li>
            <li  className='cursor-pointer' onClick={()=>{
                setMenu('accessories')
            }}><NavLink to="/accessories">Accessories</NavLink>{Menu==='accessories' && <hr className='border-none w-[80%] h-1 rounded-md bg-red-500'/>}</li>

        </ul>
        <div className="nav-login-cart flex items-center gap-11">
            <NavLink to="/login"><button className='h-13 w-36 outline-0 border-2 border-violet-500 rounded-xl py-1 active:bg-gray-100'>login</button></NavLink>
            <NavLink to="/cart"><CiShoppingCart size={35}/></NavLink>
            <div className='h-5 w-5 flex justify-center items-center mt-[-35px] ml-[-55px] text-xs font-medium bg-red-600 text-white rounded-full'>0</div>
        </div>
    </div>
  )
}

export default Navbar