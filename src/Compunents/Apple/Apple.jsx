const Apple = () => {

  const ShopByDepartmentCard = [
    {
      img: "https://i.ibb.co/8N31x0B/image.png",
      title: "Bleuets",
    },
    {
      img: "https://i.ibb.co/rxKBs4M/image.png",
      title: "Aneth",
    },
    {
      img: "https://i.ibb.co/McwRvty/image.png",
      title: "Aubergines",
    },
    {
      img: "https://i.ibb.co/k9s1QyL/image.png",
      title: "Fraises",
    },
    {
      img: "https://i.ibb.co/9rVTMm4/image.png",
      title: "Radis",
    },
    {
      img: "https://i.ibb.co/ZWW8gFM/image.png",
      title: "Fèves vertes",
    },



  ];


  return (
    <div>
      <div className="flex justify-between mt-14 mb-6">
        <h1 className="text-[24px] font-bold flex items-center gap-2">
          <span>
            <img
              src="https://i.ibb.co/YBPHsN5/image.png"
              className="w-12"
              alt=""
            />
          </span>
          Apple
        </h1>
        <h1 className="text-lg font-bold">See more items</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {ShopByDepartmentCard.map((data) => (
          <>
            <div className="cursor-pointer">
                <img className="w-52 mx-auto" src={data.img} alt="" />
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

export default Apple;
