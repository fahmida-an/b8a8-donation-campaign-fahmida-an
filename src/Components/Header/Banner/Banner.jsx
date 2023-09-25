const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(Clothing.png)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex">
          <input
            className="border h-10 pl-2 w-[400px] "
            type="search"
            placeholder="search here.."
          />
          <button
            className="bg-[#FF444A] text-white rounded-sm font-bold p-2 "
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    // <div className="h-[70vh]">
    //    <div className="relative">
    //    <img className="w-full" src="Clothing.png" alt="" />
    //    </div>

    //    <div className="absolute mt-[-350px] ml-[350px] flex justify-center ">
    //     <input className="border h-10 pl-2 w-[400px] " type="search" placeholder="search here.." />
    //     <button className="bg-[#FF444A] text-white rounded-sm font-bold p-2 " type="submit">Search</button>
    //    </div>

    // </div>
  );
};

export default Banner;
