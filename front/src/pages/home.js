import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../assets/css/home.css";
import foodIcon from "../assets/icons/food.png";
import educationIcon from "../assets/icons/education.png";
import medicalIcon from "../assets/icons/hospital.png";
import waterDropIcon from "../assets/icons/waterdrop.png";
import loveCareIcon from "../assets/icons/lovecare.png";
import foodImage from "../assets/images/food.jpg";
import educationImage from "../assets/images/education.jpg";
import waterImage from "../assets/images/water.jpg";
import holdingChild from "../assets/images/holdingChild.jpg";
import jane from "../assets/images/ceo.jpg";
import eunice from "../assets/images/manager.jpg";
import michael from "../assets/images/michael.jpg";
import stacy from "../assets/images/stacy.jpg";
import childrenInClass from "../assets/images/pic.jpg";
import man1 from "../assets/images/man1.jpg";
import man2 from "../assets/images/man2.jpg";
import woman1 from "../assets/images/woman1.jpg";
import Counter from "../components/counter";

function Home() {
  const homeInformation = [
    {
      id: 1,
      title: "Healthy Food",
      icon: foodIcon,
      body: "Every child deserves nutritious meals to grow strong and thrive. With your donation, you can help us provide healthy, nourishing food to children in our care, giving them the energy and hope they need for a brighter tomorrow.",
    },

    {
      id: 2,
      title: "Education",
      icon: educationIcon,
      body: "Education is the key to unlocking a brighter future. Your donation helps provide children with the tools, resources, and opportunities they need to learn, grow, and achieve their dreams.",
    },
    {
      id: 3,
      title: "Medical",
      icon: medicalIcon,
      body: "Every child deserves access to quality healthcare. Your support helps provide medical care, essential supplies, and a chance at a healthy, happy life for children in need.",
    },
    {
      id: 4,
      title: "Clean Water, Brighter Futures",
      icon: waterDropIcon,
      body: "Access to safe, pure water changes everything. Your support helps provide clean drinking water, promoting health and happiness for children in need.",
    },
    {
      id: 5,
      title: "Love & Care",
      icon: loveCareIcon,
      body: "Show your love and care by becoming a volunteer. Your time and dedication can make a lasting impact on the lives of children, bringing them hope, joy, and a brighter future.",
    },
  ];

  const featuredCases = [
    {
      id: 1,
      image: foodImage,
      title: "Feed the Children",
      body: "Join us in providing nourishing meals to children in need. Your support ensures they have the energy and health to learn, grow, and thrive. Together, we can make a difference, one meal at a time.",
    },
    {
      id: 2,
      title: "Education",
      image: educationImage,
      body: "Empower children with the gift of knowledge. Your support helps provide access to quality education, giving them the tools they need to build a brighter future. Together, we can create opportunities that transform lives and communities.",
    },
    {
      id: 3,
      title: "Clean Water",
      image: waterImage,
      body: "Access to clean water is a basic necessity and a foundation for healthy living. Your support helps us provide safe, clean water to children and their communities, reducing illness and creating a better quality of life. Together, we can ensure every child has the water they need to thrive.",
    },
  ];

  const changingLives = [
    {
      id: 1,
      title: "Health",
      body: "Your support ensures children have access to proper healthcare, giving them the strength to grow, learn, and thrive. Together, we can create a healthier, happier future for every child in need.",
    },
    {
      id: 2,
      title: "Education",
      body: "Your generosity gives children access to quality education, empowering them with the knowledge and skills they need to unlock their potential and build a brighter future. Together, we can break the cycle of poverty through learning.",
    },
  ];

  const volunteers = [
    { id: 1, name: "Jane N. Kimani", title: "Founder & CEO", image: jane },
    { id: 2, name: "Eunice W. Muthoni", title: "Manager", image: eunice },
    {
      id: 3,
      name: "Michael Odero",
      title: "Technical Support",
      image: michael,
    },
    { id: 4, name: "Stacy Henderson", title: "Support Staff", image: stacy },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      image: woman1,
      body: "Volunteering with this organization has been one of the most rewarding experiences of my life. Seeing the smiles on the children’s faces and knowing that our efforts are making a real difference fills my heart with joy. I’m proud to be part of a mission that truly changes lives.",
    },
    {
      id: 2,
      name: "George Flavius",
      image: man1,
      body: "Supporting this campaign has been a deeply fulfilling experience. Knowing that my contributions help provide children with education, healthcare, and a safe environment gives me a sense of purpose. Together, we are building a brighter future for these kids.",
    },
    {
      id: 3,
      name: "Peter Oliver",
      image: man2,
      body: "Working with this organization has shown me the power of compassion and collective effort. Every moment spent with the children is a reminder of how impactful our support can be. It’s a privilege to be part of this journey.",
    },
  ];

  const numbers = [
    { id: 1, number: 580, name: "Volunteers" },
    { id: 2, number: 980, name: "Donations" },
    { id: 3, number: 987, name: "Projects" },
    { id: 4, number: 320, name: "Missions" },
  ];

  return (
    <>
      {" "}
      <div className="hero-section">
        {" "}
        <Navbar />
        <div className="div-background">
          <h1 className="hero-title">Bringing Hope, Changing Lives</h1>
          <p className="hero-subtitle">
            Every child deserves love, care, and the chance to thrive. Together,
            we can provide the support they need—nourishing meals, a warm home,
            and the hope for a brighter future. Join us in bringing joy and
            comfort to these children, creating memories that will last a
            lifetime. Your contribution will make a world of difference
          </p>
          <div className="hero-buttons">
            <button className="cta-button">
              <Link
                to="/donate"
                style={{ textDecoration: "none", color: "black" }}
              >
                Donate Now
              </Link>
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
                <div>
                  <img
                    src={cases.image}
                    alt="_"
                    className="featured-image"
                    loading="lazy"
                  />
                  <h2>{cases.title}</h2>
                  <p>{cases.body}</p>
                </div>
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
              <button className="cta-button">
                <Link
                  to="/donate"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Donate Now
                </Link>
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
          <img src={childrenInClass} alt="_" className="pic2" loading="lazy" />
        </div>
        <div className="testimonial-section">
          <h1>Testimonials</h1>
          <p style={{ color: "gray" }}>Support key initiatives that matter.</p>
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
                  <h1 id="numbers">
                    {<Counter targetNumber={number.number} />}
                  </h1>
                  <h2>{number.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

export default Home;
