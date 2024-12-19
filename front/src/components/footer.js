import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faLocationDot,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/footer.css";
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div className="main-footer">
        {/* About Section */}
        <div className="about-footer">
          <h3 style={{ color: "#ffd700", fontSize: "1.5rem" }}>
            About The Hope Project
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            The Hope Project is dedicated to transforming the lives of
            vulnerable children by providing essential resources and
            opportunities. Through education, healthcare, and community support,
            we aim to create a brighter future for every child we serve.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <a href="#" style={{ color: "#ffd700", textDecoration: "none" }}>
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="#" style={{ color: "#ffd700", textDecoration: "none" }}>
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="social-icon"
              />
            </a>
            <a href="#" style={{ color: "#ffd700", textDecoration: "none" }}>
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div>
  <h3 style={{ color: "#ffd700", fontSize: "1.5rem" }}>Contact Info</h3>
  <div className="contact-info-footer">
    <div className="contact-item">
      <span className="icon-wrapper">
        <FontAwesomeIcon icon={faLocationDot} />
      </span>
      <p>00100, Nairobi, Kenya</p>
    </div>

    <div className="contact-item">
      <span className="icon-wrapper">
        <FontAwesomeIcon icon={faPhone} />
      </span>
      <p>+2547-4385-4495</p>
    </div>

    <div className="contact-item">
      <span className="icon-wrapper">
        <FontAwesomeIcon icon={faMobile} />
      </span>
      <p>+2547-2373-6651</p>
    </div>

    <div className="contact-item">
      <span className="icon-wrapper">
        <FontAwesomeIcon icon={faAt} />
      </span>
      <a
        href="mailto:janekimani630@gmail.com"
        style={{ color: "white", textDecoration: "none" }}
      >
        janekimani630@gmail.com
      </a>
    </div>
  </div>
</div>
      </div>

      <hr style={{ borderColor: "#555", margin: "20px 0" }} />

      <p style={{ fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} - Uplifting Kindness Foundation. All
        Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
