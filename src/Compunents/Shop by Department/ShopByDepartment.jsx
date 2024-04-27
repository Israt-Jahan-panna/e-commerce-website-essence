const ShopByDepartment = () => {
  const ShopByDepartmentCard = [
    {
      img: "https://i.ibb.co/ByjWtgJ/download.png",
      title: "Food",
    },
    {
      img: "https://i.ibb.co/vPyh4s7/image.png",
      title: "Interior",
    },
    {
      img: "https://i.ibb.co/3ybN24K/image.png",
      title: "Art",
    },
    {
      img: "https://i.ibb.co/m96nSCx/image.png",
      title: "Plant",
    },
    {
      img: "https://i.ibb.co/xCk89Yh/image.png",
      title: "Colorful",
    },
    {
      img: "https://i.ibb.co/5RpkqgK/image.png",
      title: "Architecture",
    },
    {
      img: "https://i.ibb.co/rkN6d6T/image.png",
      title: "Minimal",
    },
    {
      img: "https://i.ibb.co/qCZSX0d/image.png",
      title: "Technology",
    },
    {
      img: "https://i.ibb.co/8jdY9TN/image.png",
      title: "Animal",
    },
    {
      img: "https://i.ibb.co/jV650fD/image.png",
      title: "Nature",
    },
    {
      img: "https://i.ibb.co/LpNV7d3/image.png",
      title: "Texture",
    },
    {
      img: "https://i.ibb.co/jrpV5mN/image.png",
      title: "Portrait",
    },


  ];

  return (
    <div className="mx-auto">
      <h1 className="text-[24px] font-bold mt-12 mb-6">Shop by Department</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {ShopByDepartmentCard.map((data) => (
          <>
            <div className="cursor-pointer">
                <img className="w-44 mx-auto" src={data.img} alt="" />
                <h1 className="text-center mt-4">
                    {data.title}
                </h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ShopByDepartment;
