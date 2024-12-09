import React from "react";
import Navbar from "../components/navbar";
import Counter from "../components/counter";
import Footer from "../components/footer";

function About() {
  const topNumbers = [
    { id: 1, number: 580, name: "Volunteers" },
    { id: 2, number: 980, name: "Donations" },
    { id: 3, number: 987, name: "Projects" },
    { id: 4, number: 320, name: "Missions" },
  ];
  return (
    <>
      <Navbar />
      <div>
        <div>
          {" "}
          <h1>We Work Together</h1>
          <p>
            Collaboration is at the heart of everything we do. By joining hands
            with volunteers, donors, and communities, we create meaningful
            change in the lives of children, ensuring they have the support and
            opportunities they deserve.
          </p>
        </div>
        <div>
          {topNumbers.map((number) => (
            <div key={number.id}>
              <h1>{<Counter targetNumber={number.number} />}</h1>
              <h2>{number.name}</h2>
            </div>
          ))}
        </div>

        <div>
          <h1>We Are A Non Profit Organization</h1>
          <p>
            We are dedicated to making a positive impact on the lives of
            children and communities. Our mission is fueled by compassion,
            collaboration, and the unwavering belief that every child deserves a
            chance to thrive. With your support, we can provide essential
            resources like education, healthcare, and safe living conditions.
            Together, we create opportunities that pave the way for brighter
            futures. Every step we take is guided by the commitment to uplift
            and empower, ensuring that no child is left behind. Join us as we
            work to transform lives and bring hope to those who need it most.
          </p>
        </div>
        <div>
          <h1>We Are A Strong Team</h1>
          <p>
            We are dedicated to making a positive impact on the lives of
            children and communities. Our mission is fueled by compassion,
            collaboration, and the unwavering belief that every child deserves a
            chance to thrive. With your support, we can provide essential
            resources like education, healthcare, and safe living conditions.
            Together, we create opportunities that pave the way for brighter
            futures. Every step we take is guided by the commitment to uplift
            and empower, ensuring that no child is left behind. Join us as we
            work to transform lives and bring hope to those who need it most.
          </p>
        </div>
        <div>
          <p>Become a volunteer</p>
          <h1>Join us for a better life and a beautiful future</h1>
          <p>
            Be a part of our mission to create lasting change in the lives of
            children. Together, we can provide hope, opportunities, and a
            brighter future filled with possibilities. Your support can
            transform dreams into reality and make the world a better place for
            those who need it most.
          </p>
          <button>Apply Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
