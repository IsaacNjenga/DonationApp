import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../App";

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(UserContext);
  const hostname = window.location.hostname;

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toHome = () => {
    navigate("/");
  };
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Top Row: Logo and Hamburger */}
      <div className="top-row">
        <div className="navbar-logo" onClick={toHome}>
          <h1>
            THE <span className="highlight">HOPE</span> PROJECT
          </h1>
        </div>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          {user ? (
            <li>
              <Link to="/dashboard" className="navbar-link">
                Dashboard
              </Link>
            </li>
          ) : null}
          {!user ? (
            <li>
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>
          ) : null}

          {!user ? (
            <li>
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
          ) : null}

          {user ? (
            <li>
              <Link to="/volunteers" className="navbar-link">
                Volunteers
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/volunteer" className="navbar-link">
                Volunteer
              </Link>
            </li>
          )}

          {user ? (
            <li>
              <Link to="/logout" className="navbar-link">
                Logout
              </Link>
            </li>
          ) : (
            (hostname === "admin.upliftingkindnessfoundation.com" ||
              hostname === "admin.localhost") && (
              <li>
                <Link to="/login" className="navbar-link">
                  Login
                </Link>
              </li>
            )
          )}
        </ul>
        {hostname === "admin.upliftingkindnessfoundation.com" ||
        hostname === "admin.localhost" ? null : (
          <button className="donate-button">
            <Link to="/donate" className="donate-link">
              Donate
            </Link>
          </button>
        )}

        {/* Social Icons */}
        <div className="icons-div">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faSquareXTwitter} className="icon" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
