import React from 'react'
import {data} from '../assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='flex flex-col mb-10 items-center gap-2 height-[90vh] overflow-y-hidden'>
        <h1 className='text-amber-800 text-[50px] mt-3 font-semibold'> {`Hive's chosen`}</h1>
        <hr className='w-52 h-2 border-10 bg-amber-900 '/>
        <div className='mt-12 flex gap-[30px]'>
            {data.map((element,index)=>{
                return <Item key={index} id={element.id} name={element.name} image={element.image} new_price={element.new_price} old_price={element.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular