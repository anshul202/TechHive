import React from 'react'
import './descss.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox my-28 mx-40'>
        <div className="descriptionboxnavigator flex ">
            <div className="descriptionboxnavbox flex items-center justify-center text-base font-semibold h-16 w-40 border-[1px] border-blue-950">Description</div>
            <div className="descriptionboxnavbox fade flex items-center justify-center text-base font-semibold h-16 w-40 border-[1px] border-blue-950">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description flex flex-col border-[1px] p-12 pb-[70px] gap-6 ">
            <p>
            TechHive is a streamlined ecommerce platform designed to offer a wide range of technology products. Built with a focus on simplicity and user-friendliness, TechHive aims to provide an efficient and enjoyable shopping experience for tech enthusiasts, professionals, gamers, and everyday users.
            </p>
            <p>
            TechHive successfully delivers a seamless and efficient ecommerce experience, catering to a broad audience with diverse technology needs. The platform's robust architecture and modern design ensure scalability and maintainability, making it a reliable choice for users seeking the latest tech products.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox