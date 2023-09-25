import { Link } from "react-router-dom";
const CategoriesCard = ({card}) => {
 
    const {id, image,title, category, category_bg, card_bg, text_bg, description, price} = card || {};
    const categoryStyle = {
        color: text_bg,
        background: category_bg,
      };
      const textStyle ={
        color:text_bg
      };
      const backgroundStyle ={
        background: card_bg,
      };
      
  return (
    <div className="py-10">
        <Link to={`/cards/${id}`}>
      <div style={backgroundStyle} className="card card-compact w-72">
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          
          <h1 style={categoryStyle} className="w-[80px] p-2 text-center rounded-lg">{category}</h1>
          
          <h2 style={textStyle} className="card-title">{title}</h2>
          
        </div>
      </div>
      </Link>
    
    </div>
  );
};

export default CategoriesCard;
