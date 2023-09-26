import swal from "sweetalert";
const CategoryCard = ({card}) => {
    // console.log(card);
  const { id, title, image, price, text_bg, description } = card || {};

  

  const backgroundStyle ={
    background: text_bg,
    
  };
  const handleAddtoDonations = () =>{
    const addedDonationsArray = [];
    const donatedThings = JSON.parse(localStorage.getItem('donations'));
    if(!donatedThings){
      addedDonationsArray.push(card)
      localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
    }
    else{
      // const isExists = donatedThings.find(card => card.id ===id)
      // if(!isExists){
        addedDonationsArray.push(...donatedThings, card)
        localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
        swal("Good job!", "Donated successfully!", "success");
        
      // }
    //   else{
    //     swal("Error!", "No Duplicate ", "error");
    // }
    }
  }

  return (

    
        <div className="md:text-center items-center">
          
          <div>
          <img className=" md:h-[500px] md: w-[700px] lg:h-[700px] lg:w-[1380px] mx-auto py-10 lg:relative " src={image} alt="" />
          </div>
          <button onClick={handleAddtoDonations} style={backgroundStyle} className="p-2 mb-5 text-white rounded-lg lg:absolute lg:-mt-32 lg:ml-24 ">Donate: ${price}</button>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="py-10">{description}</p>
          
            
        </div>

    
  );
  
};

export default CategoryCard;
