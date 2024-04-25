import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeCarousel = () => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        spaceBetween={30}
        slidesPerView={1}
        speed={1500}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -426],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=" text-start w-[362px] h-[192px] absolute top-10 bottom-10 left-10 right-10">
            <h1 className=" text-7xl font-bold text-[#194E8A]">
              Kitchen Savings.
            </h1>
            <button className="text-sm bg-[#194E8A] text-white px-6 py-3 mt-8">
              Buy Now (5% off)
            </button>
          </div>
          <div>
            <img
              className="w-full md:w-[886px] h-[426px]"
              src="https://i.ibb.co/GW458q8/cup.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full md:w-[886px] h-[426px] "
              src="https://i.postimg.cc/V6gJNf0Y/home-Carousel-Three.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full md:w-[886px] h-[426px] "
              src="https://i.postimg.cc/448Kk3TP/product-Carousel-Eight.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full md:w-[886px] h-[426px]"
              src="https://i.postimg.cc/XqvpGR99/home-Carousel-Five.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img
              className="w-full md:w-[886px] h-[426px]"
              src="https://i.postimg.cc/YSf9Xr31/products-Carousel-Five.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full md:w-[886px] h-[426px] object-cover"
              src="https://i.postimg.cc/W3NL9PNK/products-Carousel-Ten.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
