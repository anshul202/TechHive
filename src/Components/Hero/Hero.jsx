import React from "react";
import heroImage from "../assets/laptopHero.png";
import "./Hero.css";
import { FaHandPaper } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero h-[100vh] bg-gradient-to-r from-slate-700 via-gray-100 to-slate-100 flex">
      <div className="hero-left  flex flex-col justify-center gap-5 p-40 leading-5">
        <h2 className="bg-gradient-to-l from-black via-slate-100 to-slate-300 bg-clip-text text-transparent font-semibold text-7xl ">
          Latest Releases
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-black text-8xl font-bold">New</p>
            <FaHandPaper />
          </div>
          <p className="text-black text-6xl font-bold">Wide Range</p>
          <p className="text-black text-6xl font-bold">Of Products</p>
        </div>
        <div className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-7 font-medium bg-red-500 text-white text-xl font-medium">
          <div>Versatile Tech Products</div>
        </div>
      </div>
      <div className="hero-right flex items-center justify-center">
        <img className="size-max" src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//   <section className="section banner banner-section">
//      <div className="container banner-column">
//         <img className="banner-image" src="\"/>
//         <div className="banner-inner">
//            <h1 className="heading-xl">Experience Media Like Never Before</h1>
//            <p className="paragraph">
//               Enjoy award-winning stereo beats with wireless listening freedom and sleek,
//               streamlined with premium padded and delivering first-rate playback.
//            </p>
//            <button className="btn btn-darken btn-inline">
//               Our Products<i className="bx bx-right-arrow-alt"></i>
//            </button>
//         </div>
//         <div className="banner-links">
//            <a href="#" title=""><i className="bx bxl-facebook"></i></a>
//            <a href="#" title=""><i className="bx bxl-instagram"></i></a>
//            <a href="#" title=""><i className="bx bxl-twitter"></i></a>
//            <a href="#" title=""><i className="bx bxl-youtube"></i></a>
//         </div>
//      </div>
//   </section>
//   )
// }

// export default Hero;
