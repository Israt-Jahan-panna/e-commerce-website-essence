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
    </div>
  );
};

export default Banner;
