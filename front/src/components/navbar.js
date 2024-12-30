import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../App";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useContext(UserContext);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Social Icons */}
      <div className="icons-div">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faSquareXTwitter} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <li>
              <Link to="/dashboard" className="navbar-link">
                Dashboard
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="navbar-link">
                Admin
              </Link>
            </li>
          </>
        )}
      </div>

      {/* Logo */}
      <div className="navbar-logo">
        <h1>
          THE <span className="highlight">HOPE</span> PROJECT
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="links">
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/more" className="navbar-link">
              More
            </Link>
          </li> */}
          <li>
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/volunteer" className="navbar-link">
              Volunteer
            </Link>
          </li>
          {user ? (
            <li>
              <Link to="/logout" className="navbar-link">
                Logout
              </Link>
            </li>
          ) : null}
        </ul>
        <button className="donate-button">
          <Link to="/donate" className="donate-link">
            Donate
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
