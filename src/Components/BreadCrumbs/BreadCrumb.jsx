import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { RxSlash } from "react-icons/rx";

const BreadCrumb = (props) => {
    const product=props.product;
  return (
    <div className='breadcrump flex items-center gap-2 text-sm font-semibold my-14 capitalize mx-[170px]'>
        Home<RxSlash/>Shop<RxSlash/>{product?.category}<RxSlash/>{product?.name}
    </div>
  )
}

export default BreadCrumb  