import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Components/Header/Navbar/Navbar";


const MainLayout = () => {
    const loc = useLocation();

    console.log(loc);
  
    return (
        <div className="max-w-screen-xl mx-auto">
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;