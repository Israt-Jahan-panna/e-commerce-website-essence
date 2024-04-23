const NavBar = () => {
  return (
    <div className="navbar bg-[#194E8A] md:px-14 px-4 flex justify-between items-center overflow-hidden">
      <div className="grid">
        <a className="w-24 md:w-36 h-10">
          <img src="https://i.ibb.co/QjZCmZ2/logo.png" alt="" />
        </a>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-row px-1 py-1 lg:px-28 lg:py-4 ">
          <div className="relative py-2">
            <input
              type="text"
              placeholder=" |  Example:Wallet"
              className="input input-bordered rounded-3xl w-30 lg:w-[752px] md:w-[330px] md:pl-10 pl-12 text-xs font-light md:text-xs "
            />
            <button
              className="absolute inset-y-0 left-2 md:gap-x-7 flex items-center px-2 text-gray-500 w-14"
              aria-label=" Example: Wallet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-row gap-1 md:gap-6 text-white ">
        <div className="">
          <button className="text-sm md:text-base">
            Sing In <i className="fa-regular fa-user"></i>{" "}
          </button>
        </div>
        <div>
          <button className="text-sm md:text-base">
            {" "}
            Cart <i className="fa-solid fa-cart-shopping "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
