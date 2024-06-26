import React from "react";

const NewsLetter = () => {
  return <div className=" h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-[140px] mb-20 bg-gradient-to-t from-black/15 to-slate-50 gap-[30px]">
    <h1 className="text-zinc-800 text-[55px] font-semibold">Get Exclusive Offers On Your Mail</h1>
    <p className="text-[20px]">Subscribe to our newsletter and stay updated</p>
    <div className="flex items-center justify-between bg-white h-24 w-[720px] rounded-[80px] border-1 border-gray-400">
        <input className="w-500px ml-[30px] border-none outline-none text-slate-400 text-[16px] shadow-slate-900" type="email" placeholder="Your Email"/>
        <button className="w-52 h-[70px] rounded-[80px] bg-black text-white">Subscribe!</button>
    </div>
  </div>;
};

export default NewsLetter;
