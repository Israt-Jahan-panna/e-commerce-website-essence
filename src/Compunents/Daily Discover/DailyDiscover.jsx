const DailyDiscover = () => {
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
      img: "https://i.ibb.co/Ln0Yfbx/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/FKh5D1q/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/86DjGKJ/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/Vjkx7ZP/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/2ZzKMxH/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/SnkWM7s/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/gZnRybY/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/p2kyR9J/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/2Ssc2cx/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/DCXzmc1/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
    {
      img: "https://i.ibb.co/wCS5ypM/image.png",
      title: "Wireless Bluetooth Headset Single",
      price: "8.50",
      off: "16",
      discount: "50",
      review: "121",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mt-14 mb-6">
        <h1 className="text-[24px] font-bold">Daily Discover</h1>
        <h1 className="text-lg font-bold">See more items</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {MostViewedItems.map((data, index) => (
          <div
            key={index}
            className="card w-52 mx-auto rounded-none bg-base-100 shadow-xl"
          >
            <figure className="w-52 h-36">
              <img className="w-full h-full" src={data.img} alt="img" />
            </figure>
            <div className=" p-4">
              <h2 className="">{data.title}</h2>

              <div className="flex flex-col  items-center mt-2 gap-2">
                <div className="rating w-24 ">
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
                <h1 className="opacity-60">({data.review} Review)</h1>
              </div>

              <div className="mt-2 flex justify-center items-center gap-2 ">
                <h1 className="text-xl  font-bold">
                  $<span>{data.price}</span>
                </h1>
                <s>${data.off}</s>
                <h1>-{data.discount}%</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyDiscover;
