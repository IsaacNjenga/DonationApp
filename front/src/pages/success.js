import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import "../assets/css/success.css";

function Success() {
  return (
    <>
      <div className="success-container">
        <div className="navbar-element">
          <Navbar />
        </div>
        <div className="success-inner-div">
          <div className="success-message-container">
            <h1 className="success-title">Donation Successful!</h1>
            <p className="success-message">
              Thank you for your generous contribution! Your support means a lot
              to us.
            </p>
            <Link to="/" className="success-home-button">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
