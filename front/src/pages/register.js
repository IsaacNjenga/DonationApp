import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/loader";
import "../assets/css/register.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const [serverErrors, setServerErrors] = useState([]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value || e.target.id });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("register", values, {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          setLoading(false);
          toast.success("Sign up successful");
          navigate("/login");
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.success("Sign up failed");
        if (err.response.data.errors) {
          setServerErrors(err.response.data.errors);
        } else {
          console.log("Error", err);
        }
      });
  };
  return (
    <>
      {loading && <Loader />}
      <div className="signup-container">
        <div className="navbar-element">
          <Navbar />
        </div>
        <div className="signup-content">
          <h1>Sign Up</h1>
          <hr />
          <br />
          <form onSubmit={handleSubmit} className="signup-form">
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={values.name}
                onChange={handleChange}
                className="signup-form-input"
              />
              <label>Email Address</label>{" "}
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="signup-form-input"
              />
              <label>Password</label>{" "}
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="signup-form-input"
              />{" "}
              {serverErrors.length > 0 &&
                serverErrors.map((error, index) => (
                  <p className="error" key={index}>
                    {error.msg}
                  </p>
                ))}
            </div>
            <button type="submit" className="signup-form-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
