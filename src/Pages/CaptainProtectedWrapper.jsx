import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.log("No token found! Redirecting to /CaptainLogin");
      navigate("/CaptainLogin"); // Fix: Redirect to login
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
