
const ShopAllCategories = () => {

    const OnSelling = [
        {
          img:"https://i.ibb.co/hDCjPrv/image.png",
          title:"Portrait",
        },
        {
          img:"https://i.ibb.co/MVqjqWz/download.png",
          title:"Space",
        },
        {
          img:"https://i.ibb.co/tJZFg16/image.png",
          title:"Texture",
        },
        {
          img:"https://i.ibb.co/fHHf4BQ/image.png",
          title:"Minimal",
        },
        {
          img:"https://i.ibb.co/gw7Kyp9/image.png",
          title:"Food",
        },
        {
          img:"https://i.ibb.co/zP3s1BT/image.png",
          title:"Art",
        },
        {
          img:"https://i.ibb.co/xqgrVPQ/image.png",
          title:"Architecture",
        },
        {
          img:"https://i.ibb.co/Yk5pQH3/image.png",
          title:"Nature",
        },
        {
          img:"https://i.ibb.co/0KyZ5Sd/image.png",
          title:"Colorful",
        },
        {
          img:"https://i.ibb.co/rGGkmFH/image.png",
          title:"Interior",
        },
        {
          img:"https://i.ibb.co/dcdmnNP/image.png",
          title:"Colorful",
        },
        {
          img:"https://i.ibb.co/fXR0dmL/image.png",
          title:"Business",
        },
        {
          img:"https://i.ibb.co/9s92WRT/image.png",
          title:"Plant",
        },
        {
          img:"https://i.ibb.co/5WMFnN5/image.png",
          title:"Animal",
        },
        {
          img:"https://i.ibb.co/tJZFg16/image.png",
          title:"Technology",
        },

    
      ]
    


  return (
    <div>
      <h1 className="text-[24px] font-bold mt-12 mb-6">Shop All Categories</h1>
      <div className="grid lg:grid-cols-5 gap-6">

      {
        OnSelling.map((data)=><>
        <div className="flex rounded-none bg-[#E6E7E7] border-2 border-gray-300 border-opacity-20 shadow-md">
          
            <img
              src={data.img}
              alt="Movie"
              className="object-cover w-[100px] h-[90px]"
            />
         
          <div className="flex justify-center flex-col px-4">
            <h2 className="text-[15px] whitespace-nowrap font-bold  my-1">{data.title}</h2>
               
          </div>
        </div>
        </>)
      }




      </div>
    </div>
  )
}

export default ShopAllCategories