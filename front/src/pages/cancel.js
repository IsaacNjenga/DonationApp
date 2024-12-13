import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import "../assets/css/cancel.css";

function Cancel() {
  return (
    <>
      {" "}
      <div className="container">
        <div className="navbar-element">
          <Navbar />
        </div>
        <div className="inner-div">
          <div className="message-container">
            {" "}
            <h1 className="title">Donation Cancelled</h1>
            <p className="message">
              It seems your donation didn’t go through. Don’t worry, you can try
              again anytime.
            </p>
            <Link to="/donate" className="tryAgainButton">
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cancel;
