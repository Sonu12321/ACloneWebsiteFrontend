import React from "react";
import image from "../../stocks/Logo.png";
import bg from "../../stocks/darkness.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div
      className="h-screen w-full bg-cover flex flex-col justify-between py-8  bg-center"
      style={{ backgroundImage: `url(${bg})`,
    // height:'full',
    // width:"auto"
    }}
    >
      {/* Logo */}
      <img src={image} alt="Logo" className="ml-8 w-12 h-8" />

      {/* Content */}
      <div className="bg-white py-10 px-5 bg-opacity-80 rounded-lg shadow-lg mx-5">
        <h2 className="text-3xl font-bold">Get Started With Uber</h2>

        {/* Button */}
        <Link to='/UserLogin' className="w-full mt-5 py-2 flex items-center justify-center gap-2 bg-black text-white font-bold rounded-lg">
          Continue <FaArrowRightLong className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Start;

