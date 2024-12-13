import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <Navbar />{" "}
      <div>
        <h1>Success</h1>
        <p>
          Donation Successful. Thank you for your contribution. Proceed to{" "}
          <Link to="/">home</Link> page
        </p>
      </div>
    </>
  );
}

export default Success;
