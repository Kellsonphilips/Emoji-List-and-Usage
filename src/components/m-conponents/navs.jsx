// eslint-disable-next-line 
import React from "react";

function Nav() {
  return (
    <header className="nav">
      <div className="first">
        <a href="/">Home</a>
      </div>
      <div className="second">
        <input className="search" type="search" placeHolder="Search" />
        <a href="#">About</a>
        <a href="#">Contribute</a>
        <a href="#">Contact Us</a>
      </div>
    </header>
  );
}

export default Nav;
