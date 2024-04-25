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
    <div className=""> 
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
          <div>
            <img
              className="w-full md:w-[886px] h-[426px] object-cover "
              src="https://i.ibb.co/wyCBxZ1/74de85cb793b32d9231081864ccefaee.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full md:w-[886px] h-[426px] object-cover "
              src="https://i.ibb.co/wyCBxZ1/74de85cb793b32d9231081864ccefaee.pngg"
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
              src="https://i.ibb.co/GW458q8/cup.jpg"
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