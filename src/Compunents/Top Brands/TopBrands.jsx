// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const TopBrands = () => {
  const TopBrands = [
    {
      img: "https://i.ibb.co/B6gRLXJ/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/bNL7zmP/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/CzBgZ3B/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/7bdTYMT/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/vDjPvYF/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/7bTbhkY/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/qmcMZqD/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/1dqYGgR/image.png",
      title: "Brand Name",
    },
    {
      img: "https://i.ibb.co/B6gRLXJ/image.png",
      title: "Brand Name",
    },
  ];

  return (
    <div>
      <h1 className="text-[24px] font-bold mt-12 mb-6">Top Brands</h1>

      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwipe"
      >
        {TopBrands.map((data) => (
          <>
            <SwiperSlide>
              <div className="cursor-pointer">
                <img className="w-10 md:w-32  mx-auto" src={data.img} alt="" />
                <h1 className="text-center text-[8px] md:text-sm md:mt-">{data.title}</h1>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBrands;
