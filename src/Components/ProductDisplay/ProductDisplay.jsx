import React, { useContext } from "react";
import staricon from "../assets/star.svg";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const product = props.product;
  const {addToCart}=useContext(ShopContext);

  return (
    <div className="productdisplay flex my-0 mx-40">
      <div className="productleft flex gap-[17px]">
        <div className="product-imagelist flex flex-col">
          <img className="h-[150px]" src={product.image} alt="" />
          <img className="h-[150px]" src={product.image} alt="" />
          <img className="h-[150px]" src={product.image} alt="" />
          <img className="h-[150px]" src={product.image} alt="" />
        </div>
        <div className="product-displayimage">
          <img
            className="productdisplaymainimg min-h min-w-48"
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className="productright mx-[55px] flex flex-col">
        <h1 className="text-[30px] font-bold">
          {product.name[0].toUpperCase() + product.name.slice(1)}
        </h1>
        <div className="product-displayright items-center gap-1 flex mt-4 text-gray-700">
          <img src={staricon} className="h-4 w-5" />
          <img src={staricon} className="h-4 w-5" />
          <img src={staricon} className="h-4 w-5" />
          <img src={staricon} className="h-4 w-5" />
          <img src={staricon} className="h-4 w-5" />
          <p>(122)</p>
        </div>
        <div className="productdisplayrightprices flex my-[50px] mx-0 gap-7 text-2xl font-bold">
          <div className="productdisplayrightold text-gray-300 line-through">
            {product.old_price}
          </div>
          <div className="productdisplayrightnew text-gray-600 ">
            {product.new_price}
          </div>
        </div>
        <div className="productdisplayrightdescription text-sm font-normal mb-3">
          Description of product
        </div>
        <div className="product-display-rightsize">
          <h1 className="text-lg font-semibold text-zinc-500 ">
            Select Variant
          </h1>
          <div className="productdisplayrightsizes flex gap-5 my-7 mx-0">
            <div className="py-5 px-6 border-2 border-[#ebebeb] rouneded-sm cursor-pointer bg-[#fbfbfb] ">Red</div>
            <div className="py-5 px-6 border-2 border-[#ebebeb] rouneded-sm cursor-pointer bg-[#fbfbfb] ">Platinum</div>
            <div className="py-5 px-6 border-2 border-[#ebebeb] rouneded-sm cursor-pointer bg-[#fbfbfb] ">Silver</div>
            <div className="py-5 px-6 border-2 border-[#ebebeb] rouneded-sm cursor-pointer bg-[#fbfbfb] ">Gold</div>
            <div className="py-5 px-6 border-2 border-[#ebebeb] rouneded-sm cursor-pointer bg-[#fbfbfb] ">IVH Certified</div>
          </div>
          <button onClick={()=>{addToCart(Number(product.id))}} className="addtocart w-[200px] p-3 rounded-lg bg-blue-800 text-white font-semibold mb-[40px] border-none outline-none">
            Add to Cart
          </button>
          <p className="productdisplayrightcategory mt-[10px]">
            <span className="font-semibold">{product.category}</span>
            {}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
