import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

export const UserContext = createContext(null);

//axios.defaults.baseURL = "http://localhost:3001/donate";
axios.defaults.baseURL = "https://donation-app-umber.vercel.app/donate";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/about", element: <About /> },
  { path: "/donate", element: <Donate /> },
  { path: "/cancel", element: <Cancel /> },
  { path: "/success", element: <Success /> },
  { path: "/contact", element: <Contact /> },
  { path: "/volunteer", element: <Volunteer /> },
  { path: "/cart", element: <Cart /> },
  { path: "/volunteer-form", element: <VolunteerForm /> },
  { path: "/logout", element: <Logout /> },
]);
function App() {
  const [user, setUser] = useState();
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    axios
      .get("verify", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser, setIsOnline, isOnline }}>
        <RouterProvider router={router} />
        <Toaster position="top-right" toastOption={{ duration: 2200 }} />
      </UserContext.Provider>
    </>
  );
}

export default App;
