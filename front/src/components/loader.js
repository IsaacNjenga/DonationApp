import React from "react";
import "../assets/css/loader.css";

function Loader() {
  return (
    <>
      <div className="loader-container">
        <div className="loader">
          <div className="leap-frog">
            <div className="leap-frog__dot"></div>
            <div className="leap-frog__dot"></div>
            <div className="leap-frog__dot"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
