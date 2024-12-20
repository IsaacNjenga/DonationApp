import React, { useContext, useState } from "react";
import Navbar from "../components/navbar";
import Loader from "../components/loader.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../assets/css/login.css";
import Footer from "../components/footer";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const [values, setValues] = useState({});
  const [serverErrors, setServerErrors] = useState([]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("login", values, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          setLoading(false);
          setUser(res.data.user);
          toast.success(
            `Welcome ${res.data.user.username.replace(
              /^./,
              res.data.user.username[0].toUpperCase()
            )}`
          );
          navigate("/dashboard");
        } else {
          toast.error("Incorrect login details");
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.data.errors) {
          setServerErrors(err.response.data.errors);
          toast.error("Incorrect login details");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="login-container">
        <div className="navbar-element">
          {" "}
          <Navbar />
        </div>

        <div className="login-content">
          <h1>Login</h1>
          <hr />
          <br />
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={values.name}
                onChange={handleChange}
                className="login-form-input"
              />
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="login-form-input"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="login-form-input"
              />
              {serverErrors.length > 0 &&
                serverErrors.map((error, index) => (
                  <p className="error" key={index}>
                    {error.msg}
                  </p>
                ))}
            </div>
            <button type="submit" className="login-form-button">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
