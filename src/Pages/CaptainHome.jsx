import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../stocks/Logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import CaptainInfo from "../Components/CaptainInfo";
import RidePopUp from "../Components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";


const CaptainHome = () => {
  const [RidePopUpPannel, setRidePopUpPannel] = useState(true);
  const [confirmRidePopUpPannel, setconfirmRidePopUpPannel] = useState(false);
    

    const RidePopUpRef = useRef(null);
  const ConfirmRidePopUpRef = useRef(null);

  useGSAP(() => {
    if (RidePopUpPannel) {
      gsap.to(RidePopUpRef.current, {
        y: 0, // ✅ Fix: Correct GSAP animation
      });
    } else {
      gsap.to(RidePopUpRef.current, {
        y: "100%",
      });
    }
  }, [RidePopUpPannel]);

  useGSAP(() => {
    if (confirmRidePopUpPannel) {
      gsap.to(ConfirmRidePopUpRef.current, {
        y: 0, // ✅ Fix: Correct GSAP animation
      });
    } else {
      gsap.to(ConfirmRidePopUpRef.current, {
        y: "100%",
      });
    }
  }, [confirmRidePopUpPannel]);
  

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
          className=" bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          <IoLogOutOutline />
        </button>
      </div>

      {/* Map Section */}
      <img
        className="h-3/5 w-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Map"
      />

      {/* Content Section */}
      <CaptainInfo />
      <button
        onClick={() => setRidePopUpPannel(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Show Ride PopUp
      </button>

      <div
        ref={RidePopUpRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 px-6 bg-white"
      >
        <RidePopUp
          setRidePopUpPannel={setRidePopUpPannel}
          setconfirmRidePopUpPannel={setconfirmRidePopUpPannel}
        />
      </div>
      <div
        ref={ConfirmRidePopUpRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 h-screen px-6 translate-y-full bg-white"
      >
        <ConfirmRidePopUp
          setconfirmRidePopUpPannel={setconfirmRidePopUpPannel}
          setRidePopUpPannel={setRidePopUpPannel}
         
        />
      </div>
     
    </div>
  );
};

export default CaptainHome;
