import React, { useState, useEffect } from 'react';
// import SearchCard from '../../../Pages/SearchCard/SearchCard';
// import CategoriesCard from '../../Cards/CategoriesCard';

import SearchCategory from '../../../Pages/SearchCard/SearchCategory';
import { Link } from 'react-router-dom';
// import CategoriesCard from '../../Cards/CategoriesCard';
const Banner = () => {
  const [data, setData] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showFilteredItems, setShowFilteredItems] = useState(false);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  useEffect(() => {
    // Filter data based on searchCategory
    const filtered = data.filter((card) =>
      card.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchCategory, data]);

  const handleButtonClick = () => {
    setShowFilteredItems(true);
  };


  return (
  
    
    <div

      className="hero min-h-screen"
      style={{ backgroundImage: "url('./donation.png')" } }
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        
        <div className="max-w-md flex">
          <input
            className="border h-10 pl-2 w-[150px] md:w-[300px] lg:w-[400px] "
            type="search"
            placeholder="Search Category"
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
          />
          <Link to={"/searchdata"}>
          <button onClick={handleButtonClick}
            className="bg-[#FF444A] text-white rounded-sm font-bold p-2 "
            type="submit"
          >
            Search
          </button>
          </Link>
        </div>
      </div>
<div>
  
{showFilteredItems && (
        <div className="card-container grid grid-cols-1 lg:grid-cols-3 mt-[400px]">
          {filteredData.map((card) => (
            <SearchCategory key={card.id} card={card} ></SearchCategory>
          ))}
          </div>
    
          )}
</div>
    </div>

    

  
  );
};

export default Banner;
