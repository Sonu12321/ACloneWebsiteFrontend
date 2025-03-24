import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../../stocks/Logo.png";
import { captainDataContext } from "../Context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setcaptaininfo } = useContext(captainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCaptainLogin = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:4569/captain/captainLogin",
        newCaptainLogin
      );

      console.log("Full API Response:", response);

      if (response.status === 200 && response.data.token) {  // ✅ Ensure token exists
        const { token, CaptainUser } = response.data;

        console.log("Token received:", token);  // ✅ Debugging

        setcaptaininfo(CaptainUser); // ✅ Ensure correct user data key
        localStorage.setItem("token", token);  // ✅ Store token in localStorage

        console.log("Stored token:", localStorage.getItem("token")); // ✅ Check if stored
        navigate("/CaptainHome");
      } else {
        console.error("No token in response!");
        setErrorMessage("No token received. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        console.log("Error Response Data:", error.response.data);
        setErrorMessage(error.response.data.error || "Login failed");
      } else if (error.request) {
        console.log("No response from server");
        setErrorMessage("No response from server. Please try again.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src={image} alt="Logo" className="w-12 h-8 mb-4" />
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-xl mb-2 mt-6">What is your email address?</h3>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
          />
          <h3 className="font-bold text-xl mt-3 mb-2">What is your Password?</h3>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
          />
          <button className="w-full mt-5 py-2 flex items-center justify-center gap-2 bg-black text-white font-bold">
            Login
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <p className="mt-2 font-semibold flex justify-center">
          New here?{" "}
          <Link to="/CaptainSignup" className="text-blue-600">
            Click here to become a Captain
          </Link>
        </p>
      </div>
      <Link
        to="/UserLogin"
        className="w-full py-2 flex items-center justify-center bg-black text-white font-bold"
      >
        Create an Account
      </Link>
    </div>
  );
};

export default CaptainLogin;
