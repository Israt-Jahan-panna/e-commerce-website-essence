import HomeCarousel from "./HomeCarousel";
import BrandsCarousel from "./BrandsCarousel";

const Banner = () => {
  return (
    <div className="font-Inter  mt-12 ">
      <div className=" grid grid-cols-1  lg:grid-cols-10 gap-4">
        {/* categories card */}
        <div className="col-span-1 lg:col-span-2 bg-white shadow-lg  md:px-6 md:py-6 mx-auto justify-center p-6">
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
        <div className="col-span-2 md:col-span-3  lg:col-span-5 mb-7">
          <div className="">
            <HomeCarousel></HomeCarousel>
            <BrandsCarousel></BrandsCarousel>
          </div>
        </div>
        {/* card */}
        <div className="col-span-1 w-96 lg:col-span-2 col  bg-white shadow-lg px-7 py-3 flex flex-col gap-6 ">
          <h2 className="text-base font-normal ">Good Afternoon, John Smith</h2>
          <div className=" text-center ">
            <h1 className="text-xl font-semibold text-[#010E0E]">
              Flash Sale for You!
            </h1>
            <h1 className="text-[#194E8A] text-8xl font-bold">
              40 <span className="text-xl">%off</span>
            </h1>
            <h2 className="text-sm font-normal">
              After 12 hr this offer will be end.{" "}
              <button className="text-[#194E8A] font-semibold">Get Now</button>{" "}
            </h2>
          </div>
          <div className="">
            <img src="https://i.ibb.co/Fm39fqb/image.png" alt="" />
          </div>
          <button className="text-base font-bold bg-[#194E8A] text-center  text-white px-24 py-3 mt-8">
            Add to Cart
          </button>
        </div>
      </div>
       {/* End Banner  */}
      <div  className="m-4 lg:px-14">
        <div  className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-between">
          <div className="bg-[#F7F8F8] flex flex-row justify-center items-center gap-4 px-2 py-3">
            <div className="">
              <a href=""><i className="fa-regular fa-circle-check text-yellow-300"></i></a>
            </div><div>
              
          <h1 className="font-bold">Quick & Easy Store Pickup</h1>
          <p>Get your order as little as 1hr</p>
            </div>
          </div>
         
          <div className="bg-[#F7F8F8] flex flex-row justify-center items-center gap-4 px-2 py-3">
            <div className="">
              <a href=""><i className="fa-regular fa-circle-check text-yellow-300"></i></a>
            </div><div>
              
          <h1 className="font-bold">Low Price Guarantee</h1>
          <p>We won’t be beat on price</p>
            </div>
          </div>
          <div className="bg-[#F7F8F8] flex flex-row justify-center items-center gap-4 px-2 py-3">
            <div className="">
              <a href=""><i className="fa-regular fa-circle-check text-yellow-300"></i></a>
            </div><div>
              
          <h1 className="font-bold">Knowledgeable Advice</h1>
          <p>Answer to your tech questions</p>
            </div>
          </div>
          <div className="bg-[#F7F8F8] flex flex-row justify-center items-center gap-4 px-2 py-3">
            <div className="">
              <a href=""><i className="fa-regular fa-circle-check text-yellow-300"></i></a>
            </div><div>
              
          <h1 className="font-bold">Lates & Greatest Tech</h1>
          <p>Discover whats new & excitings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
