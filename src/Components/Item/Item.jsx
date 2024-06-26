import React from 'react'
import { NavLink } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='w-[260px] hover:scale-105 transition-transform duration-500 cursor-pointer flex flex-col items-center' >
        <NavLink to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} className="max-h-28" src={props.image} alt=""/></NavLink>
        <p className='my-6 mx-0'>{props.name}</p>
        <div className='item-prices flex gap-5'>
            <div className="item-price-new text-violet-900 text-[18px] font-semibold">
                {props.new_price}
            </div>
            <div className="item-price-old text-violet-300 text-[18px] font-medium line-through">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item