import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div>
          <h3 style={{ color: "#ffd700", fontSize: "1.5rem" }}>
            About The Hope Project
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            The Hope Project is dedicated to transforming the lives of
            vulnerable children by providing essential resources and
            opportunities. Through education, healthcare, and community support,
            we aim to create a brighter future for every child we serve.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <a href="#" style={{ color: "#ffd700", textDecoration: "none" }}>
              Facebook
            </a>
            <a href="#" style={{ color: "#ffd700", textDecoration: "none" }}>
              X
            </a>
            <a href="#" style={{ color: "#ffd700", textDecoration: "none" }}>
              Insta
            </a>
          </div>
        </div>

        <div>
          <h3 style={{ color: "#ffd700", fontSize: "1.5rem" }}>Contact Info</h3>
          <p style={{ marginBottom: "8px" }}>
            <strong>Address:</strong> 00100, Nairobi, Kenya
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Phone:</strong> +2547-4385-4495
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Mobile:</strong> +2547-2373-6651
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Email:</strong>{" "}
            <a href="#" style={{ color: "#ffd700", textDecoration: "none" }}>
              contact@email.com
            </a>
          </p>
        </div>
      </div>

      <hr style={{ borderColor: "#555", margin: "20px 0" }} />

      <p style={{ fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} - Uplifting Kindness Foundation. All
        Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
