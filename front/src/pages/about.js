import React from "react";
import Navbar from "../components/navbar";
import Counter from "../components/counter";
import Footer from "../components/footer";
import "../assets/css/about.css";
import peopleIcon from "../assets/icons/people.png";
import projectIcon from "../assets/icons/project.png";
import missionIcon from "../assets/icons/mission.png";
import donationIcon from "../assets/icons/donation.png";
import { Link, useNavigate } from "react-router-dom";
import team from "../assets/icons/strong-team.png";
import nonprofit from "../assets/icons/nonprofit.png";
function About() {
  const navigate = useNavigate();
  const topNumbers = [
    { id: 1, icon: peopleIcon, number: 580, name: "Volunteers" },
    { id: 2, icon: donationIcon, number: 980, name: "Donations" },
    { id: 3, icon: projectIcon, number: 987, name: "Projects" },
    { id: 4, icon: missionIcon, number: 320, name: "Missions" },
  ];

  const toVolunteer = () => {
    navigate("/volunteer");
  };

  return (
    <>
      <div className="about-container">
        <div className="navbar-element">
          <Navbar />
        </div>{" "}
        <h1 style={{ color: "white", marginTop: "118px" }}>About</h1>{" "}
        <h4 style={{ color: "white" }}>
          <Link to="/" className="home-link">
            HOME
          </Link>{" "}
          &gt; ABOUT
        </h4>
        <div className="about-content">
          {/* <img src={Aboutbg} alt="_" className="about-bg-image" /> */}
          <div className="about-background"></div>
          <div className="about-text">
            {" "}
            <h1 style={{ color: "black" }}>We Work Together</h1>
            <p>
              Collaboration is at the heart of everything we do. By joining
              hands with volunteers, donors, and communities, we create
              meaningful change in the lives of children, ensuring they have the
              support and opportunities they deserve.
            </p>
          </div>
          <div className="numbers-background">
            <div className="numbers-section">
              {topNumbers.map((number) => (
                <div key={number.id} className="numbers-container">
                  <img
                    src={number.icon}
                    alt="_"
                    style={{
                      width: "75px",
                      margin: "3px",
                      objectFit: "contain",
                      border: "1px solid #eeb00e",
                      borderRadius: "50%",
                    }}
                  />
                  <h1 className="h1-color">
                    {<Counter targetNumber={number.number} />}
                  </h1>
                  <h2 style={{ color: "black" }}>{number.name}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="about-div2">
            <div className="about-div2-image">
              <img
                src={nonprofit}
                alt="nonprofit.png"
                className="nonprofit-icon"
              />
            </div>
            <div className="about-div2-text">
              <h1>We Are A Non Profit Organization</h1>
              <p>
                We are dedicated to making a positive impact on the lives of
                children and communities. Our mission is fueled by compassion,
                collaboration, and the unwavering belief that every child
                deserves a chance to thrive.{" "}
              </p>
              <br />
              <p>
                {" "}
                With your support, we can provide essential resources like
                education, healthcare, and safe living conditions. Together, we
                create opportunities that pave the way for brighter futures.{" "}
              </p>
              <br />
              <p>
                Every step we take is guided by the commitment to uplift and
                empower, ensuring that no child is left behind. Join us as we
                work to transform lives and bring hope to those who need it
                most.
              </p>
            </div>
          </div>
          <div className="about-div3">
            <div className="about-div3-text">
              <h1>We Are A Strong Team</h1>
              <p>
                Our team is united by a shared passion for making a difference
                in the lives of children. Each member brings unique strengths
                and unwavering dedication to our mission, working tirelessly to
                create a brighter future for those in need.
              </p>
              <br />
              <p>
                Collaboration and determination drive us forward, ensuring every
                child we serve receives the care, support, and opportunities
                they deserve. Together, we face challenges head-on and transform
                them into meaningful progress.
              </p>
              <br />
              <p>
                Join us in our efforts to build a stronger, kinder world where
                every child has the chance to thrive. Together, we can achieve
                so much more!
              </p>
            </div>{" "}
            <div className="about-div3-image">
              <img src={team} alt="team.png" className="team-icon" />
            </div>
          </div>
          <div className="about-footer-bg">
            <div className="about-div4">
              <p className="call">
                Become a <u className="about-underline">volunteer</u>
              </p>
              <h1>
                Join us for a{" "}
                <span className="about-highlight">better life</span> and a{" "}
                <span className="about-highlight">beautiful future</span>
              </h1>
              <p className="div4-text">
                Be a part of our mission to create lasting change in the lives
                of children. Together, we can provide hope, opportunities, and a
                brighter future filled with possibilities. Your support can
                transform dreams into reality and make the world a better place
                for those who need it most.
              </p>
              <button onClick={toVolunteer}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
