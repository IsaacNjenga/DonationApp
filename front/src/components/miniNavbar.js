import React, { useEffect, useState } from "react";
import "../assets/css/miniNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartLine,
  faCircleDollarToSlot,
  faEarthAfrica,
  faPeopleRoof,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function MiniNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
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

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button className="mini-navbar-toggle-btn" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
      </button>
      {/* <nav className={`mini-navbar ${scrolled ? "scrolled" : ""}`}> */}
      <nav className={`mini-navbar ${isVisible ? "visible" : "hidden"}`}>
        <div className="mini-links">
          <ul className="mini-navbar-links">
            <div className="mini-link">
              <FontAwesomeIcon
                icon={faCircleDollarToSlot}
                className="mini-navbar-icon"
              />
              <li className="mini-navbar-link">Donors</li>
            </div>
            <div className="mini-link">
              <FontAwesomeIcon
                icon={faEarthAfrica}
                className="mini-navbar-icon"
              />
              <li className="mini-navbar-link">Campaigns</li>
            </div>

            <div className="mini-link">
              <FontAwesomeIcon
                icon={faChartLine}
                className="mini-navbar-icon"
              />
              <li className="mini-navbar-link">Reports</li>
            </div>
            <div className="mini-link">
              <FontAwesomeIcon
                icon={faPeopleRoof}
                className="mini-navbar-icon"
              />
              <li className="mini-navbar-link">Management </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MiniNavbar;
