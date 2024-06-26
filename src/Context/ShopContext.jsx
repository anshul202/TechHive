import React, { createContext, useState } from "react";
import {products} from "../Components/assets/products"


export const ShopContext=createContext(null)
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < products.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [CartItems, setCartItems] = useState(getDefaultCart())
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(CartItems);
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalamount=0
        for(const items in CartItems){
            if(CartItems[items]>0){
                let iteminfo=products.find((element)=>element.id==items)
                totalamount+=CartItems[items]*Number(iteminfo.new_price.replace(/[^0-9\.-]+/g,""));
            }
        }
        return totalamount;
    }
    const ContexValue={products,CartItems,addToCart,removeFromCart,getTotalCartAmount}
    return (
        <ShopContext.Provider value={ContexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider