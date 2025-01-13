import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "../src/pages/home";
import Donate from "../src/pages/donate";
import About from "./pages/about";
import Success from "./pages/success";
import Cancel from "./pages/cancel";
import Contact from "./pages/contact";
import Volunteer from "./pages/volunteer";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Cart from "./pages/cart";
import Logout from "./components/logout";
import VolunteerForm from "./pages/volunteerForm";
import Donations from "./pages/donations";
import Campaigns from "./pages/campaigns";
import Report from "./pages/reports";
import Management from "./pages/management";
import TransactionStatus from "./pages/transactionStatus";
import Redirector from "./components/redirector";
import ProtectedRoutes from "./components/protectedRoute";

export const UserContext = createContext(null);

//axios.defaults.baseURL = "http://localhost:3001/donate";
axios.defaults.baseURL = "https://donation-app-umber.vercel.app/donate";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState();
  const [isOnline, setIsOnline] = useState(false);
  const [orderTrackingId, setOrderTrackingId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("verify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.success) {
            setUser(res.data.user);
            setIsOnline(true);
          }
        })
        .catch((err) => {
          console.log("Error during user verification:", err);
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setIsOnline,
        isOnline,
        orderTrackingId,
        setOrderTrackingId,
      }}
    >
      <BrowserRouter>
        <Redirector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/volunteer-form" element={<VolunteerForm />} />
          <Route
            path="/donations"
            element={
              <ProtectedRoutes>
                <Donations />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/campaigns"
            element={
              <ProtectedRoutes>
                <Campaigns />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoutes>
                <Report />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/management"
            element={
              <ProtectedRoutes>
                <Management />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/transaction-status/:id"
            element={<TransactionStatus />}
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Toaster position="top-right" toastOption={{ duration: 2200 }} />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
