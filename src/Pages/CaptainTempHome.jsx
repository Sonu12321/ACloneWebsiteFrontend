import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../stocks/Logo.png";
import car from "../../stocks/car.png";
import { MdOutlinePayment } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const CaptainTempHome = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/CaptainLogin"); // Redirect to Captain Login page
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Header Section with Logout */}
      <div className="flex justify-between items-center p-4 absolute top-0 w-full">
        <Link to="/Home">
          <img src={image} alt="Logo" className="w-16" />
        </Link>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Map Section */}
      <img
        className="h-1/2 w-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Map"
      />

      {/* Content Section */}
      <div className="h-1/2 p-4 w-screen">
        {/* User Info */}
        <div className="flex bg-[#eee] w-full items-center justify-between p-3 rounded-lg">
          <img className="h-14" src={car} alt="Car" />
          <h3 className="font-semibold">Sonu Snlsdfn</h3>
          <div className="flex items-center">
            <p className="flex gap-2 items-center">
              <MdOutlinePayment /> 5454
            </p>
          </div>
        </div>

        {/* Location Details */}
        <div className="flex items-center gap-5 p-3 border-b-2 mt-4">
          <CiLocationOn />
          <div>
            <h2 className="font-bold text-2xl">Current Location</h2>
            <h5>Current location details...</h5>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-b-2 mt-4">
          <CiLocationOn />
          <div>
            <h2 className="font-bold text-2xl">Destination</h2>
            <h5>Destination details...</h5>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4 mt-20">
          <button className="bg-gray-400 h-12 w-1/2 rounded-2xl font-semibold text-white">
            Ignore
          </button>
          <button className="bg-fuchsia-500 h-12 w-1/2 rounded-2xl font-semibold text-white">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};



export default CaptainTempHome