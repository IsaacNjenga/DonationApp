import React from "react";
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

//axios.defaults.baseURL = "http://localhost:3001/donate";
axios.defaults.baseURL = "https://donation-app-umber.vercel.app/donate";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/donate", element: <Donate /> },
  { path: "/cancel", element: <Cancel /> },
  { path: "/success", element: <Success /> },
  { path: "/contact", element: <Contact /> },
  { path: "/volunteer", element: <Volunteer /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" toastOption={{ duration: 2200 }} />
    </>
  );
}

export default App;
