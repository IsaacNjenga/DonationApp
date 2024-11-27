import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          backgroundColor: "#007BFF",
          color: "#fff",
        }}
      >
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem" }}
        >
          Home
        </Link>
        <Link
          to="/donate"
          style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem" }}
        >
          Donate
        </Link>
      </div>
    </>
  );
}

export default Navbar;
