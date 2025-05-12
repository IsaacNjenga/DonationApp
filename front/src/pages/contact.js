import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/contact.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { toast } from "react-hot-toast";
import axios from "axios";
import Loader from "../components/loader";
import { FloatButton } from "antd";
import { contactInfo } from "../assets/data/data";
import Motion from "../components/motion";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("create-feedback", values).then((res) => {
        if (res.data.success) {
          setLoading(false);
          toast.success("Feedback submitted!", {
            position: "top-right",
            autoClose: 3000,
          });
          setValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error("Submission failed. Try refreshing the page", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log("Error", error);
    }
  };
  return (
    <>
      <Motion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>
        {loading && <Loader />}
        <div className="contact-container">
          <div className="contact-image">
            <div className="navbar-element">
              <Navbar />
            </div>
            <div className="contact-content">
              <div className="contact-header">
                <h1 style={{ color: "white", marginTop: "85px" }}>Contact</h1>
                <h4>
                  <Link to="/" className="home-link">
                    HOME
                  </Link>{" "}
                  &gt; CONTACT
                </h4>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <h3>Reach out to us!</h3>
            <div className="contact-cards">
              {contactInfo.map((contact) => (
                <div className="contact-card" key={contact.id}>
                  <div className="contact-icon-position">
                    <p className="contact-icon">{contact.icon}</p>
                  </div>
                  <div className="contact-details">
                    <h3>{contact.title}</h3>
                    <p>{contact.info}</p>
                    <p>{contact.info2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us your feedback</h2>
            <p>We'd love to hear from you</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={values.name}
                required
              />

              <label>
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                required
                value={values.email}
              />

              <label>
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="subject"
                value={values.subject}
                required
              />

              <label>
                Message <span className="required">*</span>
              </label>
              <textarea
                onChange={handleChange}
                name="message"
                value={values.message}
                required
              ></textarea>

              <button className="contact-button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </Motion>
    </>
  );
}

export default Contact;
