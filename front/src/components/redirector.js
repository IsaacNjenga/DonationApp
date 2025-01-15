import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirector = () => {
  const navigate = useNavigate();
  const hostname = window.location.hostname;
  const location = useLocation();

  useEffect(() => {
    const excludeRoutes = ["/success", "/cancel"];

    if (excludeRoutes.includes(location.pathname)) {
      return;
    }

    if (
      hostname === "admin.upliftingkindnessfoundation.com" ||
      hostname === "admin.localhost"
    ) {
      navigate("/dashboard"); // Redirect admin to dashboard
    } else if (
      hostname === "www.upliftingkindnessfoundation.com" ||
      hostname === "localhost"
    ) {
      navigate("/"); // Redirect regular users to homepage
    }
  }, [location.pathname]);

  return null;
};

export default Redirector;
/*{replace:true} - Ensures the redirect does not leave a record in the browser's history stack, preventing users from
navigating back to the redirected page.*/
