import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/volunteer.css";
import Footer from "../components/footer";
import { FloatButton } from "antd";
import { faqs, volunteersPage } from "../assets/data/data";
import Motion from "../components/motion";
function Volunteer() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const toVolunteer = () => {
    navigate("/volunteer-form");
  };
  return (
    <>
      <Motion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>
        <div className="volunteer-container">
          <div className="volunteer-bg-image">
            <div className="navbar-element">
              <Navbar />
            </div>

            <div className="volunteer-content">
              <div className="volunteer-header">
                {" "}
                <h1 style={{ color: "white", marginTop: "85px" }}>
                  Volunteer
                </h1>{" "}
                <h4 style={{ color: "white" }}>
                  <Link to="/" className="home-link">
                    HOME
                  </Link>{" "}
                  &gt; VOLUNTEER
                </h4>
              </div>
            </div>
          </div>

          <div className="volunteers-section">
            <p>Apply to become a volunteer now</p>
            <button onClick={toVolunteer} className="apply-volunteer-btn">
              Apply Now
            </button>
            <h1>Our Volunteers</h1>
            <p>Get to know our team</p>
            <div className="volunteer-grid">
              {volunteersPage.map((v) => (
                <div key={v.id} className="volunteer-page-card">
                  <div>
                    <img
                      src={v.image}
                      alt={v.name}
                      className="v-image"
                      loading="lazy"
                    />
                    <h3>{v.name}</h3>
                    <p>{v.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h1>Frequently Asked Questions</h1>
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                  <p>
                    {faq.question}{" "}
                    <span className="faq-toggle">
                      {openFaq === faq.id ? "-" : "+"}
                    </span>
                  </p>
                </div>
                {openFaq === faq.id && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </Motion>
    </>
  );
}

export default Volunteer;
// 'Yeseva One', Sans-Serif
