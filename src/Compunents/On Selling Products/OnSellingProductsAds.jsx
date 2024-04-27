const OnSellingProductsAds = () => {
  const ads1 = "https://i.ibb.co/FgwqcHR/image.png";
  const ads2 = "https://i.ibb.co/x36TjDS/image.png";
  return (
    <div>
          <h1 className="text-[24px] font-bold mt-12 mb-6">On Selling Products</h1>

      <div className="grid grid-cols-4 gap-4 ">
        <div className="gap-6 flex flex-col items-center justify-center">
          <img src={ads1} alt="" />
          <img src={ads1} alt="" />
        </div>
        <div className="row-span-3 col-span-2  ">
          <img src={ads2} className="bg-[#b076da]  h-[435px] w-full" alt="" />
        </div>
        <div className="gap-6 flex flex-col">
          <img src={ads1} alt="" />
          <img src={ads1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnSellingProductsAds;
