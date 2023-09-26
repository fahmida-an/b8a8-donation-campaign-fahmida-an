import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-around lg:justify-between items-center lg:py-6 shadow-md lg:px-5">
                <Logo></Logo>
                <ul className="flex flex-col lg:flex-row gap-2 p-2 lg:gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
             Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
             Donation
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
             Statistics
            </NavLink>
            
          </li>
        </ul>

            </nav>
        </div>
    );
};

export default Navbar;