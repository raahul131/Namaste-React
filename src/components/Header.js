import React, { useState, useContext } from "react";
import Logo from "../assets/images/food_Villa.png";
import { Link } from "react-router-dom";
import useOnline from "../../utilities/useOnline";
import UserContext from "../../utilities/UserContext";

const loggedInUser = () => {
  return false;
};

// JSX => React.createElement => Object => HTML(DOM)
const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 space-x-2">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2 ">Cart</li>

          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-700">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
