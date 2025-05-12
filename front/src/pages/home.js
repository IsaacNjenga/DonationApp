import React from "react";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import "../assets/css/home.css";
import holdingChild from "../assets/images/holdingChild.jpg";
import childrenInClass from "../assets/images/pic.jpg";
import Counter from "../components/counter";
import { Carousel, FloatButton } from "antd";
import {
  changingLives,
  featuredCases,
  homeInformation,
  numbers,
  testimonials,
  volunteers,
} from "../assets/data/data";
import { motion } from "framer-motion";
import Motion from "../components/motion";
function Home() {
  const navigate = useNavigate();

  const toDonate = () => {
    navigate("/donate");
  };

  return (
    <>
      <Motion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>
        <div className="home-container">
          <div className="home-image">
            <div className="navbar-element">
              <Navbar />
            </div>

            <div className="home-content">
              <div className="home-header">
                <h1 className="hero-title">Bringing Hope, Changing Lives</h1>
              </div>
            </div>
          </div>

          <div className="home-section">
            <p className="hero-subtitle">
              Every child deserves love, care, and the chance to thrive.
              Together, we can provide the support they need—nourishing meals, a
              warm home, and the hope for a brighter future. Join us in bringing
              joy and comfort to these children, creating memories that will
              last a lifetime. Your contribution will make a world of difference
            </p>
            <div className="hero-buttons">
              <button className="cta-button" onClick={toDonate}>
                Donate Now
              </button>
              <button className="cta-button secondary">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </Link>
              </button>
            </div>
          </div>

          <div className="information-section">
            {homeInformation.map((information) => (
              <div key={information.id} className="info-card">
                <div>
                  <img
                    src={information.icon}
                    alt="_"
                    className="icon-picture"
                    loading="lazy"
                  />
                  <h2>{information.title}</h2>
                  <p>{information.body}</p>
                  <Link to="/donate" className="donation-link">
                    Make a donation
                  </Link>
                </div>{" "}
              </div>
            ))}
          </div>

          <div className="featured-section">
            <h1>Featured Causes</h1>
            <p className="section-subtitle">
              Support key initiatives that matter
            </p>
            <div className="grid-section">
              {featuredCases.map((cases) => (
                <div key={cases.id} className="featured-card">
                  <div className="carousel-slide">
                    <Carousel autoplay>
                      {cases.image.map((imgSrc, index) => (
                        <div key={index}>
                          <img
                            src={imgSrc}
                            alt={`Slide ${index + 1}`}
                            className="featured-image"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <h2>{cases.title}</h2>
                  <p>{cases.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="changing-section">
            <div className="changing-section-image">
              <img
                src={holdingChild}
                alt="_"
                className="holding-image"
                loading="lazy"
              />
            </div>
            <div className="changing-section-text">
              <h1>How you're changing children's lives</h1>
              <div>
                {changingLives.map((lives) => (
                  <div key={lives.id} className="lives">
                    <h2>{lives.title}</h2>
                    <p>{lives.body}</p>
                  </div>
                ))}
              </div>
              <div className="hero-buttons">
                <button className="cta-button" onClick={toDonate}>
                  Donate Now
                </button>
                <button className="cta-button secondary">
                  {" "}
                  <Link
                    to="/donate"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="volunteers-section">
            <h1 style={{ color: "black" }}>Our Volunteers</h1>
            <p style={{ color: "gray" }}>
              Our volunteers are the heart of our mission, dedicating their time
              and energy to bringing hope and joy to children’s lives. Together,
              we make a lasting impact.
            </p>
            <div className="volunteer-card-container">
              {volunteers.map((volunteer) => (
                <div key={volunteer.id} className="volunteer-card">
                  <img
                    src={volunteer.image}
                    alt="_"
                    className="volunteer-image"
                    loading="lazy"
                  />
                  <h3>{volunteer.name}</h3>
                  <p>{volunteer.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={childrenInClass}
              alt="_"
              className="pic2"
              loading="lazy"
            />
          </div>
          <div className="testimonial-section">
            <h1>Testimonials</h1>
            <p style={{ color: "gray" }}>
              Support key initiatives that matter.
            </p>
            <div className="testimonial-container">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <img
                    src={testimonial.image}
                    alt="_"
                    className="testimonial-profile-image"
                    loading="lazy"
                  />
                  <p>"{testimonial.body}"</p>

                  <h3>{testimonial.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="numbers-bg">
            <div className="overlay">
              <div className="numbers-section">
                {numbers.map((number) => (
                  <div key={number.id} className="home-numbers-container">
                    <div id="numbers">
                      {<Counter targetNumber={number.number} />}
                    </div>
                    <h2>{number.name}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
        <Footer />
      </Motion>
    </>
  );
}

export default Home;
