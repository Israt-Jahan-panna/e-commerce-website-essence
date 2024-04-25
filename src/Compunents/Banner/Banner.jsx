import React from "react";

import HomeCarousel from "./HomeCarousel";
import BrandsCarousel from "./BrandsCarousel";


const Banner = () => {
  return (
   
    <div className="font-Inter   bg-gray-200 p-4 md:px-14 px-4">
       <div className=" grid grid-cols-1  lg:grid-cols-10 gap-4">
       {/* categories card */}
      <div className="col-span-1 lg:col-span-2 bg-white shadow-lg w-[238px] h-[600px] md:px-6 md:py-6 mx-auto justify-center p-6">
      <ul>
          <li className="flex gap-1 font-bold text-base text-[#194E8A] mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />
            All Categories
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5 ">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Cars and Motorcycles
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Music and Books
          </li>
          
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Arts and Crafts
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Moms and Babies
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Softwares
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Home & Garden
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Electronics
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Kids and Toy
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Clothing and Shoes
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Beauty and Health
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Sports
          </li>
          <li className="flex gap-1 font-normal text-base text-black mb-5">
            {" "}
            <img
              src="https://i.ibb.co/fSStjGG/image.png"
              className="w-[23px] h-[23px]"
              alt=""
            />{" "}
            Jewellery
          </li>
        </ul>
      </div>
      {/* carousel  */}
     <div className="col-span-3 md:col-span-4 lg:col-span-6 mb-7">
      <div className=" lg:w-[886px] md:[600px]">
      <HomeCarousel></HomeCarousel>
      <BrandsCarousel></BrandsCarousel>
      </div>
     
     </div>
     {/* card */}
      <div className="col-span-2">
        <h2 className="text-xl font-semibold">Featured Item</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    </div>
  );
};

export default Banner;
