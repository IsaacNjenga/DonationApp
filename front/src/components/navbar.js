import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>THE HOPE PROJECT</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/more">More</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button className="donate-button">
          <Link to="/donate" className="donate-link">
            Donate
          </Link>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
