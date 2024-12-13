import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Cancel</h1>
        <p>
          It seems like your donation did not go through. Click{" "}
          <Link to="/donate">here</Link> to try again{" "}
        </p>
      </div>
    </>
  );
}

export default Cancel;
