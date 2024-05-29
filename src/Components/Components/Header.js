import { LOGO_URL } from "../Utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);

  // this cartItems will get that data of this items
  // we have subscribed to the store,store.cart.items
  // and whenever my items will modify my cartItems ...m..
  // how do i use my cartItems --i can use my c.I over here down
  // i can just write a jsx and i can do cartItems.length
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
          <li className="px-5 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
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

          <li className="px-5 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
