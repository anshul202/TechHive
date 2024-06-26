import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import removeicon from '../assets/remove-from-cart.png'

const CartObject = () => {
  const { products, CartItems,removeFromCart,getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems my-25 mx-[170px]">
      <div className="cartitemsmainformat grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] gap-[75px] py-4 px-1 bg-gray-300 text-base font-semibold rounded-md">
        <p className="text-center">Products</p>
        <p className="text-center">Name</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-center">Total</p>
        <p className="text-center">Remove</p>
      </div>
      <hr className=" h-1 bg-[#e2e2e2] border-0 "/>
      {products.map((element,index)=>{
        if(CartItems[element.id]>0)
        return (<div key={element.id} >
        <div className="cartitemsformat text-base grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] gap-[75px] py-4 px-1 bg-slate-50 font-normal rounded-lg">
            <img className="carticon-producticon h-36 w-18" src={element.image} alt="" />
            <p className="flex items-center justify-center">{element.name}</p>
            <p className="flex items-center justify-center">{element.new_price}</p>
            <button className="cartitemsquantity h-36 w-18 border-2 bg-slate-50 border-white">{CartItems[element.id]}</button>
            <p className="flex items-center justify-center">{"\u20b9"}{Number(element.new_price.replace(/[^0-9\.-]+/g,""))*CartItems[element.id]}</p>
            <div className="flex justify-center items-center"><img className="size-7 cursor-pointer" onClick={()=>removeFromCart(element.id)} src={removeicon} alt="" /></div>
        </div>
      </div>)})}

      <div className="cartitemsdowntotal flex my-[100px] mx-0">
        <div className="cartitemstotal flex-1 flex flex-col mr-[200px] gap-[46px]">
            <h1>Cart totals</h1>
            <div>
                <div className="cart-itemstotalitems flex justify-between py-[15px] px-0">
                    <p>Subtotal</p>
                    <p>{0}</p>
                </div>
                <hr className="h-1 bg-[#e2e2e2] border-0 "/>
                <div className="cart-itemstotalitems flex justify-between py-[15px] px-0">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr className="h-1 bg-[#e2e2e2] border-0 "/>
                <div className="cart-itemstotalitems flex justify-between py-[15px] px-0">
                    <h3>Total</h3>
                    <h3>{"\u20b9"}{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className="p-3 outline-none border-none bg-blue-900 text-white text-base font-semibold w-[40%]">
                Proceed to Checkout
            </button>
        </div>
        <div className="cartitems-promocode flex-1 text-base font-medium">
            <p className="text-zinc-500">If you have a promo code, Enter it here</p>
            <div className="flex justify-end cartitems-promobox w-auto mt-[15px] h-[58px] pl-[5] bg-[#eaeaea]">
                <input className="p-3 rounded-l-lg border-none outline-none bg-transparent text-base min-w-[330px] h-[50px]" type="text" placeholder="Promo Code" />
                <button className="w-40 h-full text-white bg-black rounded-r-lg">Apply</button>
            </div>
        </div>
      </div>
    </div>
  );
};


export default CartObject;
