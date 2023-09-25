
const CategoryCard = ({card}) => {
    // console.log(card);
  const { title, image, price, text_bg, description } = card || {};

  const backgroundStyle ={
    background: text_bg,
    
  };

  return (
        <div>
          <div>
          <img className="h-[700px] w-[1380px] mx-auto py-10 relative " src={image} alt="" />
          </div>
          <button style={backgroundStyle} className="p-2 text-white rounded-lg absolute -mt-32 ml-24 ">Donate: ${price}</button>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="py-10">{description}</p>
          
            
        </div>

    
  );
  
};

export default CategoryCard;
