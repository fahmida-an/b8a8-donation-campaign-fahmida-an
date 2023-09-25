import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard"



const Card = () => {
    const [card, setCard] = useState({});
    const {id} = useParams();
    const idInt = parseInt(id);
    const cards = useLoaderData();


    // console.log(cards);
    useEffect(()=>{
        const findCard = cards.find(card=> card.id === idInt)
        setCard(findCard);
        console.log(setCard);
      
    },[idInt, cards]);

    return (
        <div>
            {
                <CategoryCard card={card}></CategoryCard>
            }
        </div>
    );
};

export default Card;