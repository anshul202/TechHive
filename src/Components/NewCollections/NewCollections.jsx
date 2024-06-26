import React from 'react'
import { latest } from '../assets/latest'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-2 mb-[100px] overflow-y-hidden'>
        <h1 className='text-amber-800 text-[50px] mt-3 font-semibold'>New Collections</h1>
        <hr className='w-52 h-2 border-10 bg-amber-900 ' />
        <div className='grid grid-cols-4  mt-12 gap-6'>
            {latest.map((element, index) => {
                 return <Item key={index} id={element.id} name={element.name} image={element.image} new_price={element.new_price} old_price={element.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections