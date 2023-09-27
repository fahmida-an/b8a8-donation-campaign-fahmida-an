import React from 'react';

const DonationCard = ({card, price}) => {
    const { id, title, image, category, price, text_bg, category_bg,card_bg } = card || {};
    const categoryStyle = {
        color: text_bg,
        background: category_bg,
      };
      const textStyle ={
        color:text_bg
      };
      const btnStyle ={
        background:text_bg
      };
      
      const backgroundStyle ={
        background: card_bg,
      };

      





    return (
        <div className="flex justify-center items-center py-6 ">
        <div style={backgroundStyle} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={image} alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
          <h4 style={categoryStyle} className="mb-2 w-[90px] p-1 text-center block font-sans text-sm font-semibold leading-snug tracking-normal antialiased">
             {category}
            </h4>
            <h6 style={textStyle} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
              {title}
            </h6>
            <h4 style={textStyle} className="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal antialiased">
             ${price}
            </h4>
  
            <a className="inline-block" href="#">
              <button style={btnStyle}
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                View Details
              
              </button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default DonationCard;