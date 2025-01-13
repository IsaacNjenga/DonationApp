import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirector = () => {
  const navigate = useNavigate();
  const hostname = window.location.hostname;

  useEffect(() => {
    if (hostname === "admin.upliftingkindnessfoundation.com") {
      navigate("/dashboard", { replace: true }); // Redirect admin to dashboard
    } else if (
      hostname === "www.upliftingkindnessfoundation.com" ||
      hostname === "localhost"
    ) {
      navigate("/", { replace: true }); // Redirect regular users to homepage
    }
  }, []);

  return null;
};

export default Redirector;
/*{replace:true} - Ensures the redirect does not leave a record in the browser's history stack, preventing users from
navigating back to the redirected page.*/
