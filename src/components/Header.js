import React, { useState } from "react";

const loggedInUser = () => {
  return false;
};

// JSX => React.createElement => Object => HTML(DOM)
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="data:image/png;base64,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"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
