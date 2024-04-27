const WeeklyTopVendors = () => {
  const WeeklyData = [
    {
      logo: "https://i.ibb.co/hVqYTRg/image.png",
      title: "Pizza Hut",
      items: "400",
      review: "121",
      img1: "https://i.ibb.co/ThNw8fh/image.png",
      img2: "https://i.ibb.co/ThNw8fh/image.png",
      img3: "https://i.ibb.co/ThNw8fh/image.png",
    },
    {
      logo: "https://i.ibb.co/TPPK0t2/image.png",
      title: "Louis Vuitton",
      items: "400",
      review: "121",
      img1: "https://i.ibb.co/wrWCgr8/image.png",
      img2: "https://i.ibb.co/7KLzy87/image.png",
      img3: "https://i.ibb.co/hXKy9TR/image.png",
    },
    {
      logo: "https://i.ibb.co/8xW0kG4/image.png",
      title: "Mitsubishi",
      items: "400",
      review: "121",
      img1: "https://i.ibb.co/xz00QNG/image.png",
      img2: "https://i.ibb.co/zn7FYrh/image.png",
      img3: "https://i.ibb.co/SJm3qSH/image.png",
    },
    {
      logo: "https://i.ibb.co/J5HfJhy/image.png",
      title: "Ferrari",
      items: "400",
      review: "121",
      img1: "https://i.ibb.co/rM2BNCs/image.png",
      img2: "https://i.ibb.co/h1qWKJH/image.png",
      img3: "https://i.ibb.co/1RXdXJ4/image.png",
    },
    {
      logo: "https://i.ibb.co/wWLqRb6/image.png",
      title: "Louis Vuitton",
      items: "400",
      review: "121",
      img1: "https://i.ibb.co/bX7cYYq/image.png",
      img2: "https://i.ibb.co/44YfWj7/image.png",
      img3: "https://i.ibb.co/Hhj9JnQ/image.png",
    },
  ];

  return (
    <div>
      <h1 className="text-[24px] font-bold mt-12 mb-6">Weekly Top Vendors</h1>

      <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 ">
        {WeeklyData.map((data,index) => 
          
            <div key={index} className="card rounded-none w-60 bg-base-100 ">
              <div className="flex pl-2 pt-2 items-center gap-2 ">
                <img className="w-20" src={data.logo} alt="" />
                <div className="p-2">
                  <h1 className="text-lg font-bold">{data.title}</h1>
                  <div className="flex items-center gap-2">
                    <div className="mt-2 text-sm">
                      <h1>items</h1>
                      <h1>({data.items})</h1>
                    </div>
                    <div className="flex flex-col  items-center mt-2 gap-2">
                      <div className="rating w-16 ">
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
                      <h1 className="opacity-60 text-sm">
                        ({data.review} Review)
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-4 p-4">
                <div className="row-span-2 col-span-2 ">
                  <img className="w-full h-full" src={data.img1} alt="" />
                </div>
                <div className="">
                  <img className="w-full h-full" src={data.img2} alt="" />
                </div>
                <div className="">
                  <img className="w-full h-full" src={data.img3} alt="" />
                </div>
              </div>
            </div>
        
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-14">
        <img src="https://i.ibb.co/frqzCn6/image.png" alt="" />
        <img src="https://i.ibb.co/6PCs9rs/image.png" alt="" />
        <img src="https://i.ibb.co/frqzCn6/image.png" alt="" />
        <img src="https://i.ibb.co/GMn0mpy/image.png" alt="" />
        <img src="https://i.ibb.co/frqzCn6/image.png" alt="" />
        <img src="https://i.ibb.co/RQ4Mb3B/image.png" alt="" />
      </div>
    </div>
  );
};

export default WeeklyTopVendors;
