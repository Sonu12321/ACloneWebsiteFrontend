import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../stocks/Logo.png";
import { captainDataContext } from "../Context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { captaininfo, setcaptaininfo } = useContext(captainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCaptain = {
      firstname,
      lastname,
      email,
      password,
      color,
      plate,
      capacity,
      vehicleType,
    };

    try {
      const response = await axios.post(
        "http://localhost:4569/captain/captainRegister",
        newCaptain
      );

      if (response.status === 201) {
        const data = response.data;
        setcaptaininfo(data.captaininfo);
        localStorage.setItem("token", data.token);

        console.log("Navigating to /new"); // Debugging
        navigate("/CaptainHome"); // <-- Check if this line is reached
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Registration failed");
      } else if (error.request) {
        setErrorMessage("No response from server. Please try again.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }

    // Reset form
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setColor("");
    setPlate("");
    setCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src={image} alt="Logo" className="w-12 h-8 mb-4" />
        {/* {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} */}
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-xl mb-2 mt-6">What is your name</h3>
          <div className="flex gap-3">
            <input
              type="text"
              required
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="text-black border bg-[#eeeeee] border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="text-black border bg-[#eeeeee] border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
            />
          </div>

          <h3 className="font-bold text-xl mb-2 mt-6">
            What is your email address
          </h3>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black border bg-[#eeeeee] border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
          />

          <h3 className="font-bold text-xl mt-3 mb-2">What is your Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="text-black bg-[#eeeeee] border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
          />

          <h3 className="font-bold text-xl mt-3 mb-2">Vehicle Information</h3>
          <div className="flex gap-3">
          <input
            type="text"
            required
            placeholder="Vehicle Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="text-black bg-[#eeeeee] border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg mb-2"
          />
          <input
            type="text"
            required
            placeholder="License Plate"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            className="text-black bg-[#eeeeee] border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg mb-2"
          />
          </div>
           <div className="flex gap-3">
          <input
            type="number"
            required
            placeholder="Capacity (number of passengers)"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="text-black bg-[#eeeeee] border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg mb-2"
          />
          <input
            type="text"
            required
            placeholder="Vehicle Type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="text-black bg-[#eeeeee] border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg mb-2"
          />
</div>
          <button className="w-full mt-5 py-2 flex items-center justify-center gap-2 bg-black text-white font-bold">
            Sign Up
          </button>
        </form>
        <p className="mt-2 font-semibold gap-2 flex justify-center">
          Already registered?{" "}
          <Link to="/CaptainLogin" className="text-blue-600 gap-2">
            Login here
          </Link>
        </p>
      </div>
      <Link
        to="/userLogin"
        className="w-full py-2 flex items-center justify-center gap-2 bg-black text-white font-bold"
      >
        Create a User Account
      </Link>
    </div>
  );
};

export default CaptainSignup;
