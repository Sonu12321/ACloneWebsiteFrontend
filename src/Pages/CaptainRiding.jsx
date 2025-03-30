import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../stocks/Logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import CaptainInfo from "../Components/CaptainInfo";
import RidePopUp from "../Components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";
import FinishRide from "../Components/FinishRide";


const CaptainRiding = () => {

      const [finishRidePannel, setfinishRidePannel] = useState(false);
       const finishRideRef = useRef(null);

       useGSAP(() => {
        if (finishRidePannel) {
          gsap.to(finishRideRef.current, {
            y: 0, // ✅ Fix: Correct GSAP animation
          });
        } else {
          gsap.to(finishRideRef.current, {
            y: "100%",
          });
        }
      }, [finishRidePannel]);
      

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
        className=" w-full h-4/5 object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Map"
        />
  
       

      {/* Content Section */}
      <div className="h-1/5 p-6  bg-teal-700" 
      onClick={()=>{
        setfinishRidePannel(true)
      }}
      >
            <h5 className="text-black font-medium text-sm">Finish Ride</h5>
            <h3 className="text-black font-bold font-serif text-xl">You have reached the Destination</h3>
            
            <div className="mt-4">
            <button className="bg-gray-600 w-full rounded-lg text-cyan-400 h-10 font-bold text-xl text-center ">Completed</button>
            </div>

      </div>
      <div
        ref={finishRideRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 px-6 bg-white"
      >
        <FinishRide setfinishRidePannel={setfinishRidePannel}
          
        />
      </div>
    </div>
  );
};
export default CaptainRiding