import React from "react";

const Banner = () => {
  return (
    <div className="font-Inter flex justify-between items-center bg-gray-200 p-4 md:px-14 px-4">
      <div className="flex  space-x-4 bg-white shadow-lg w-[236px] h-[600px] px-6 py-6">
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
          {/*  */}
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
      <div className="flex-1 mx-4">
        <div
          id="carousel"
          className="carousel bg-white overflow-hidden rounded-lg shadow-md"
        >
          <div className="carousel-item">Item 1</div>
          <div className="carousel-item">Item 2</div>
        </div>
      </div>
      <div className="card bg-white p-4">
        <h2 className="text-xl font-semibold">Featured Item</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Banner;
