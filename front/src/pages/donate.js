import React, { useContext, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import "../assets/css/donate.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHandHoldingHeart,
  faPersonShelter,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import Loader from "../components/loader";
import { UserContext } from "../App";

function Donate() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    phoneNumber: "",
  });
  const { setOrderTrackingId } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);
    await axios
      .post("initiate-payment", {
        email: formData.email,
        amount: formData.amount,
        phoneNumber: formData.phoneNumber,
      })
      .then((res) => {
        setDisabled(false);
        setLoading(false);

        const { redirectUrl, orderTrackingId } = res.data;

        toast.success("Successful");
        window.location.href = redirectUrl;
      })
      .catch((err) => {
        setDisabled(false);
        setLoading(false);
        console.log(err);
        toast.error("Donation failed, kindly refresh and try again");
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="donation-container">
        <div className="donation-bg-image">
          {" "}
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="donation-content">
            <div className="donation-header">
              <h1 style={{ color: "white", marginTop: "155px" }}>Donate</h1>
              <h4 style={{ color: "white" }}>
                <Link to="/" className="home-link">
                  HOME
                </Link>{" "}
                &gt; DONATE
              </h4>
            </div>
          </div>
        </div>
        <p className="donation-tagline" style={{ color: "grey" }}>
          <i>Your generosity can change lives!</i>
        </p>
        <div className="donation-impact">
          <h2>Where Your Donations Go</h2>
          <p>
            Every dollar you donate supports our mission to provide food,
            shelter, and education to those in need.
          </p>
          <div className="impact-icons">
            <div className="icon-card">
              <FontAwesomeIcon icon={faUtensils} className="donation-icon" />
              <p>Food Assistance</p>
            </div>
            <div className="icon-card">
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="donation-icon"
              />
              <p>Shelter Support</p>
            </div>
            <div className="icon-card">
              <FontAwesomeIcon icon={faBookOpen} className="donation-icon" />
              <p>Education Programs</p>
            </div>
          </div>
        </div>

        <div>
          <h1 style={{ fontSize: "2rem", color: "#333" }}>Donate here</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            className="donation-form"
          >
            <label>Email</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <label>Phone Number</label>
            <input
              type="tel"
              onChange={handleChange}
              name="phoneNumber"
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <label>Amount (in $)</label>
            <input
              type="number"
              onChange={handleChange}
              name="amount"
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              className="donation-submit-button"
              disabled={disabled}
            >
              Donate <FontAwesomeIcon icon={faHandHoldingHeart} />
            </button>
          </form>
          {/* <button
            onClick={() => transStatus("709d5aa2-f1c7-4a80-9f60-dc4e683bd648")}
          >
            transStatus
          </button> */}
        </div>
        {/* 
        <div className="testimonials">
          <h2>Donor Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-donate-card">
              <img src="path-to-story1.jpg" alt="Donor Story 1" />
              <p>
                "Thanks to your support, we were able to build a new school for
                the community!"
              </p>
            </div>
            <div className="testimonial-donate-card">
              <img src="path-to-story2.jpg" alt="Donor Story 2" />
              <p>
                "Your generosity provided hot meals to 500 families last month."
              </p>
            </div>
          </div>
        </div> */}

        <Footer />
      </div>
    </>
  );
}

export default Donate;
