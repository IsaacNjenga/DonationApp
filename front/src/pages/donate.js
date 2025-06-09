import React, { useState } from "react";
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
import Loader from "../components/loader";
import {
  faCcAmex,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import mpesa from "../assets/icons/mpesa.png";
import airtel from "../assets/icons/airtel.png";
import Swal from "sweetalert2";
import Currency from "../components/currency";
import { Card, Divider, Flex, Input, Typography } from "antd";
import Motion from "../components/motion";

const { Title } = Typography;
const coopLogo =
  "data:image/png;base64,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";

function Donate() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.amount > 10) {
      Swal.fire({
        icon: "error",
        title: "Transaction Limit Exceeded",
        text: "Sorry, we currently only accept donations up to $10. Please adjust the amount and try again.",
        confirmButtonText: "OK",
      });
      return; // Prevent further execution
    }

    setDisabled(true);
    setLoading(true);
    await axios
      .post("initiate-payment", {
        email: formData.email,
        amount: formData.amount,
      })
      .then((res) => {
        setDisabled(false);
        setLoading(false);

        const { redirectUrl } = res.data;
        //toast.success("Request Successful!");
        Swal.fire({ icon: "success", title: "Request Successfull!" });
        window.location.href = redirectUrl;
      })
      .catch((err) => {
        setDisabled(false);
        setLoading(false);
        console.log(err);

        Swal.fire({
          icon: "error",
          title: "Donation failed",
          text: "Kindly refresh and try again. Contact us if the issue persists",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <>
      <Motion>
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

          <div style={{ padding: 12 }}>
            {/* <div>
            <p>
              <i>
                Thank you for supporting our cause - you can now use our
                converter to make it easier.
              </i>
            </p>
            <Currency />
          </div> */}

            <h1 style={{ fontSize: "2rem", color: "#333" }}>Donate here</h1>
            {/* <form
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
              Proceed <FontAwesomeIcon icon={faHandHoldingHeart} />
            </button>
          </form> */}

            {/* <div className="payment-container">
            <p>Accepted methods for donation</p>
            <div className="payment-div">
              <img src={mpesa} alt="mpesa_" className="payment-icon mpesa" />{" "}
              <img src={airtel} alt="airtel" className="payment-icon mpesa" />
              <FontAwesomeIcon
                icon={faCcAmex}
                className="payment-icon"
                style={{ color: "#006cc9" }}
              />
              <FontAwesomeIcon
                icon={faCcVisa}
                className="payment-icon"
                style={{ color: "#181e6b" }}
              />
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="payment-icon"
                style={{ color: "#e5001a" }}
              />
              <img src={mpesa} alt="mpesa_" className="payment-icon mpesa" />{" "}
              <img src={airtel} alt="airtel" className="payment-icon mpesa" />
              <FontAwesomeIcon
                icon={faCcAmex}
                className="payment-icon"
                style={{ color: "#006cc9" }}
              />
              <FontAwesomeIcon
                icon={faCcVisa}
                className="payment-icon"
                style={{ color: "#181e6b" }}
              />
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="payment-icon"
                style={{ color: "#e5001a" }}
              />
            </div>
          </div> */}

            <Divider
              variant="solid"
              style={{ borderColor: "#ffcc07" }}
              className="home-divider"
            >
              <h2 style={{ textAlign: "center" }}>
                You can donate via Co-operative Bank of Kenya
              </h2>
            </Divider>
            <Card
              style={{
                margin: "10px 0px",
                background: "#0a5745",
              }}
              title={
                <img src={coopLogo} alt="co-op" className="payment-icon coop" />
              }
            >
              <Flex gap="middle" align="flex-start" vertical>
                <Title
                  level={3}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Account Name
                </Title>
                <Input
                  value="UPLIFTING AND KINDNESS CBO"
                  style={{
                    width: "90%",
                    fontSize: "25px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                />
                <Title
                  level={3}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Account Number
                </Title>
                <Input
                  length={14}
                  value="01101947546001"
                  style={{
                    width: "90%",
                    fontSize: "25px",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                  }}
                />
              </Flex>
            </Card>
            <br />
            <Divider
              variant="solid"
              style={{ borderColor: "#ffcc07" }}
              className="home-divider"
            >
              <h2 style={{ textAlign: "center" }}>
                You can also donate via our M-pesa Pay Bill
              </h2>
            </Divider>
            <Card
              style={{
                margin: "10px 0px",
                background: "#0a5745",
              }}
              title={
                <img src={mpesa} alt="mpesa" className="payment-icon coop" />
              }
            >
              <Flex gap="middle" align="flex-start" vertical>
                <Title
                  level={3}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Business Number
                </Title>
                <Input.OTP length={6} value="400200" />
                <Title
                  level={3}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Account Number
                </Title>
                <Input.OTP length={7} value="1050059" />
              </Flex>
            </Card>
          </div>

          <Footer />
        </div>
      </Motion>
    </>
  );
}

export default Donate;
