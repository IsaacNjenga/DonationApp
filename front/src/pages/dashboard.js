import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Dashboard() {
  return (
    <>
      <div style={{ backgroundColor: "#eeb00e" }}>
        <Navbar />{" "}
        <div>
          <h1>Dashboard</h1>
          <h3>Dashboard page loading...</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
