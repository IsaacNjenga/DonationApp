import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#333" }}>Home</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Head to{" "}
          <Link
            to="/donate"
            style={{ color: "#007BFF", textDecoration: "underline" }}
          >
            donations
          </Link>{" "}
          to start giving...
        </p>
      </div>
    </>
  );
}

export default Home;
