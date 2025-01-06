import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/dashboard.css";
import FeedbackList from "../components/feedbackList";
import MiniNavbar from "../components/miniNavbar";

function Dashboard() {

  return (
    <>
      <div style={{ backgroundColor: "orange" }}>
        <Navbar /> <MiniNavbar />
        <div>
          <h1>Dashboard</h1>
          <div>
            <p>Total Donations</p>
            <p>Total Donors</p>
            <p>Active Campaigns</p>
            <p>Recent Donations</p>
          </div>
          <div>
            <p>Pie Chart 1</p> <p>Pie Chart 2</p> <p>Bar Chart 1</p>{" "}
          </div>

          <div className="feedback-container">
            <FeedbackList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
