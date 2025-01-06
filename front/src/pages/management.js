import React from "react";
import Navbar from "../components/navbar";
import MiniNavbar from "../components/miniNavbar";
import VolunteersList from "../components/volunteersList";
function Management() {
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <div>
        Management
        <div>
          <VolunteersList />
        </div>
      </div>
    </>
  );
}

export default Management;
