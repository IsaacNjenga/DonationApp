import React, { useState } from "react";
import Navbar from "../components/navbar";
import image from "../assets/images/eunice.jpg";
import image2 from "../assets/images/michael.jpg";
import image3 from "../assets/images/man2.jpg";
import image4 from "../assets/images/man1.jpg";
import image5 from "../assets/images/jane.jpg";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/volunteer.css";
import Footer from "../components/footer";
function Volunteer() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();
  const volunteers = [
    { id: 1, image: image4, name: "Nick Paterson", task: "Support Staff" },
    { id: 2, image: image5, name: "Stacy Henderson", task: "Support Staff" },
    { id: 3, image: image2, name: "Michael Clark", task: "Support Staff" },
    { id: 4, image: image, name: "Alicia Anderson", task: "Support Staff" },
    { id: 5, image: image, name: "Annabel Flow", task: "Support Staff" },
    { id: 6, image: image5, name: "Sintra Casper", task: "Support Staff" },
    { id: 7, image: image3, name: "Peter Amborson", task: "Support Staff" },
    { id: 8, image: image2, name: "Dean Solist", task: "Support Staff" },
    { id: 9, image: image3, name: "Orman Starski", task: "Support Staff" },
    { id: 10, image: image4, name: "Alen Craig", task: "Support Staff" },
    {
      id: 11,
      image: image5,
      name: "Patricia Olmart",
      task: "Support Staff",
    },
    { id: 12, image: image3, name: "Sean Nickson", task: "Support Staff" },
  ];

  const faqs = [
    {
      id: 1,
      question: "How to be a volunteer?",
      answer: (
        <>
          To become a volunteer, you can start by filling out our online{" "}
          <Link to="/volunteer-form">application form</Link>. After that, you
          will be contacted for an interview to discuss your interests and
          availability.
        </>
      ),
    },
    {
      id: 2,
      question: "What you should know before you apply",
      answer:
        "Before applying, it's important to understand the commitment required, the types of roles available, and the impact your volunteering can have on the community.",
    },
    {
      id: 3,
      question: "Information about application process",
      answer:
        "The application process involves submitting an online form, followed by an interview and a background check. We will guide you through each step to ensure a smooth experience.",
    },
    {
      id: 4,
      question: "Spread awareness about volunteering",
      answer:
        "You can help spread awareness by sharing your experiences on social media, inviting friends to join, and participating in community events that promote volunteer opportunities.",
    },
    {
      id: 5,
      question: "How you could become an external partner",
      answer:
        "To become an external partner, please reach out to us via our contact page. We are always looking for organizations and businesses to collaborate with on various projects.",
    },
    {
      id: 6,
      question: "How to be a volunteer",
      answer:
        "To volunteer, start by visiting our website to learn about available opportunities. You can then apply online and attend an orientation session to get started.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const toVolunteer = () => {
    navigate("/volunteer-form");
  };
  return (
    <>
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
            {volunteers.map((v) => (
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
              {openFaq === faq.id && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Volunteer;
// 'Yeseva One', Sans-Serif
