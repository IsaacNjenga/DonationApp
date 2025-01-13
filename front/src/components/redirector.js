import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirector = () => {
  const navigate = useNavigate();
  const hostname = window.location.hostname;

  useEffect(() => {
    if (hostname === "admin.upliftingkindnessfoundation.com") {
      navigate("/dashboard");
    } else if (
      hostname === "www.upliftingkindnessfoundation.com" ||
      hostname === "localhost"
    ) {
      navigate("/");
    }
  }, [hostname, navigate]);

  return null;
};

export default Redirector;
