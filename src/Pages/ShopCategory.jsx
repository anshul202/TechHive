import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { IoIosArrowDropdown } from "react-icons/io";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);
  return (
    <div>
      <img className="w-[80%] h-[70vh] object-cover block my-7 mx-auto" src={props.banner} alt="" />
      <div className="shopcategoryindexsort flex my-0 mx-[170px] justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1-12</span>Out of 36 Products{" "}
        </p>
        <div className="py-[10px] px-[20px] rounded-[40px] border-gray-500">
          Sort by <IoIosArrowDropdown />
        </div>
      </div>
        <div className="shopcategory my-20 mx-[70px] grid grid-cols-4 gap-y-20">
          {products.map((element, index) =>
            ((element.category == props.category) && index<46) ? (
              <Item
                key={element.id}
                id={element.id}
                name={element.name}
                image={element.image}
                new_price={element.new_price}
                old_price={element.old_price}
              />
            ) : null
          )}
        </div>
        <div className="flex justify-center items-center my-[150px] mx-auto w-60 h-16 bg-slate-200 text-gray-500 text-sm font-medium rounded-2xl">
          Explore more
        </div>
    </div>
  );
};

export default ShopCategory;
