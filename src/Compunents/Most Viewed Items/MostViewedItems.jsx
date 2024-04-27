// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const MostViewedItems = () => {
  const MostViewedItems = [
    {
      img: "https://i.ibb.co/fq5Bmqp/b24db1b3445c2acf3a368e1eadf3ffc8.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/7k7kn44/c772d6af83e025dbd74f19468a5d30d9.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/v46y6j3/0571091f4116edfa89f126cd7bcf8c5e.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/rHTcHL9/4376af5efb09aff1888a2ae186b671c9.pngg",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/JKpMZ3V/79c212616b136a22c02b4a51db69c1e2.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/fq5Bmqp/b24db1b3445c2acf3a368e1eadf3ffc8.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/fq5Bmqp/b24db1b3445c2acf3a368e1eadf3ffc8.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/fq5Bmqp/b24db1b3445c2acf3a368e1eadf3ffc8.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
  ];
  



  return (
    <div>
      <h1 className="text-[24px] font-bold mt-12 mb-6">Most Viewed Items</h1>

      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}

          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwipe"
        >
          { MostViewedItems.map((data)=>
          <>
          <SwiperSlide>
              <div className="card w-20 md:w-60 rounded-none bg-base-100 shadow-xl">
                <figure className="w-20 md:w-60 h-36 md:h-44 ">
                  <img
                    className="md:w-full md:h-full"
                    src={data.img}
                    alt="img"
                  />
                </figure>
                <div className=" md:p-4">
                  <h2 className=" text-xs lg:text-base">
                    {data.title}
                  </h2>

                  <div className="flex flex-col  items-center mt-2 gap-2">
                    <div className="rating md:w-24 w-10">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                    </div>
                    <h1 className="opacity-60  text-xs md:text-base">({data.review}Review)</h1>
                  </div>

                  <div className="mt-2 flex justify-center items-center md:text-xl text-xs  md:gap-2 ">
                    <h1 className="md:text-xl text-xs font-bold">
                      $<span>{data.price}</span>
                    </h1>
                    <s>${data.off}</s>
                    <h1>-{data.discount}%</h1>
                  </div>
                </div>
              </div>
              
            </SwiperSlide>
          </>)

          }
        </Swiper>
      </>
    </div>
  );
};

export default MostViewedItems;
