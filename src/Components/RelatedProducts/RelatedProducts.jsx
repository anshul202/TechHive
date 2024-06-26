import React from 'react'
import { products } from '../assets/products'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-2 h-[90vh]'>
        <h1 className='text-zinc-500 text-5xl font-semibold'>Related Products</h1>
        <hr className='w-[200px] h-2 rounded-[10px] bg-black/15' />
        <div className="relatedproductsitem mt-[50px] flex gap-7 ">
            {products.map((element,index)=>{
                return (<Item key={index} id={element.id} name={element.name} image={element.image} new_price={element.new_price} old_price={element.old_price} />)
            })}
        </div>
    </div>
  )
}

export default RelatedProducts