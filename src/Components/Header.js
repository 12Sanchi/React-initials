import { LOGO_URL } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  //in 16-nav-items
  return (
    <div className="flex justify-between  bg-pink-100  shadow-lg sm:bg-blue-200 lg:bg-pink-200">
      <div className="logo-container  ">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className=" flex  ">
          <li className="px-5">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
