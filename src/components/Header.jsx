import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg"
          alt="/"
          className="image"
        />
      </div>
      <div className="headerMid">
        <h3 className="headerText">Select Location</h3>
        <h3 className="headerText">Select location according to your place</h3>
      </div>
      <div className="hearderRight">
        <h4 className="headerText">Elansezhian R</h4>
        <h4 className="headerText">9962276900</h4>
      </div>
    </div>
  );
}

export default Header;
