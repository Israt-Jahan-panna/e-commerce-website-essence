const OnSellingProducts = () => {

  const OnSelling = [
    {
      img:"https://i.ibb.co/qybBY3L/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/L0MJDNq/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/wRZwR03/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/K26grN3/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/tsBB6YJ/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/Prc6KY9/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/S3wH5Zm/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/tQDf8BY/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },
    {
      img:"https://i.ibb.co/YkGYkLr/image.png",
      title:"Wireless Bluetooth Headset Single",
      discription:"Wireless Bluetooth Headset Single",
      price:"8",
      off:"16",
      discount:"50",

    },

  ]


  return (
    <div>
      <h1 className="text-[24px] font-bold mt-12 mb-6">On Selling Products</h1>
      <div className="grid lg:grid-cols-3 gap-6">

      {
        OnSelling.map((data)=><>
        <div className="flex rounded-none bg-base-100 shadow-xl">
          
            <img
              src={data.img}
              alt="Movie"
              className="object-cover w-[130px] h-[130px]"
            />
         
          <div className="flex justify-center flex-col px-4">
            <h2 className="text-[15px] whitespace-nowrap font-bold  my-1">{data.title}</h2>
            <h2 className="text-sm whitespace-nowrap  my-1">{data.discription}</h2>
            <div className="mt-2 flex items-center gap-2 ">
              <h1 className="text-lg  font-bold ">
                $<span>{data.price}</span>
              </h1>
              <s className="text-sm">${data.off}</s>
              <h1 className="text-sm">-{data.discount}%</h1>
            </div>   
          </div>
        </div>
        </>)
      }




      </div>
    </div>
  );
};

export default OnSellingProducts;
