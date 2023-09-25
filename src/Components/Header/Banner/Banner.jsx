const Banner = () => {
  return (
    
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(donation.png)" } }
    >
      <div className="hero-overlay bg-opacity-90"></div>
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

  
  );
};

export default Banner;
