import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);

    const [isShow,setIsShow] = useState(false)
    useEffect(()=>{
        const donatedThings = JSON.parse(localStorage.getItem("donations"));
        if(donatedThings){
            setDonations(donatedThings);
        }
    },[]);
    return (
        <div>
   
            <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {
                isShow ? donations.map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  )) 
                  
                  : donations.slice(0,4).map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))
            }
          </div>

          {donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} style={{ display: isShow ? 'none' : 'block' }} className="px-5 bg-green-700 text-white p-2 block mx-auto">
            
         SEE ALL
          </button>}
        </div>
    );
};

export default Donation;
