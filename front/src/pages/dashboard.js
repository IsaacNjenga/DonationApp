import React, { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../App";
import Loader from "../components/loader";
import "../assets/css/dashboard.css";
import VolunteersList from "../components/volunteersList";
import FeedbackList from "../components/feedbackList";
import MiniNavbar from "../components/miniNavbar";

function Dashboard() {
  //const { user } = useContext(UserContext);

  return (
    <>
      <div style={{ backgroundColor: "orange" }}>
        <Navbar /> <MiniNavbar />
        <div>
          <h1>Dashboard</h1>
          <div>
            {" "}
            <p>Total Donations</p>
            <p>Total Donors</p>
            <p>Active Campaigns</p>
            <p>Recent Donations</p>
          </div>
          <div>
            <p>Pie Chart 1</p> <p>Pie Chart 2</p> <p>Bar Chart 1</p>{" "}
          </div>
          <div>
            <VolunteersList />
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
