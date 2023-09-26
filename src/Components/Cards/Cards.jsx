import CategoriesCard from "./CategoriesCard";


const Cards = ({cards}) => {
   
    return (
        <div className="py-10">
            {/* <h2 className="text-2xl text-center" >All Categories</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:py-10 pl-5">
                {
                    cards?.map(card => <CategoriesCard
                    key={card.id}
                    card={card}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Cards;