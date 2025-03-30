import React from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import car from "../../stocks/car.png"; // Car image

const vehicleImages = {
  car: car,
  auto: "https://t3.ftcdn.net/jpg/02/01/81/38/360_F_201813821_1x634XwrL5BjE0MUrhf59b5jPuUilPPc.jpg",
  moto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRJ7uaW6HoD-zn-_I8oexElvQBeueWA_02g&s",
};

const ConfirmedRide = ({
  setconfirmedRidePannel,
  setVehiclePannel,
  setVehicleFoundPannel,
  pickup,
  destination,
  fare,
  vehicleType,
}) => {
  return (
    <div className="p-4">
      {/* Close Button */}
      <h5
        className="cursor-pointer text-xl mb-4 text-gray-600 hover:text-black transition"
        onClick={() => {
          setconfirmedRidePannel(false);
          setVehiclePannel(false);
        }}
      >
        <RxDoubleArrowDown />
      </h5>

      {/* Heading */}
      <h3 className="text-2xl font-semibold text-center">Confirm Your Ride</h3>

      {/* Vehicle Image */}
      <div className="flex items-center justify-center my-4">
        <img
          className="h-24"
          src={vehicleImages[vehicleType] || car} // Dynamic vehicle image
          alt={vehicleType || "Selected Vehicle"}
        />
      </div>

      {/* Pickup Location */}
      <div className="flex items-center gap-5 p-3 border-b-2">
        <CiLocationOn className="text-2xl text-blue-500" />
        <div>
          <h2 className="font-bold text-lg text-gray-800">Pickup Location</h2>
          <h5 className="text-gray-600">{pickup || "Not selected"}</h5>
        </div>
      </div>

      {/* Destination Location */}
      <div className="flex items-center gap-5 p-3 border-b-2">
        <CiLocationOn className="text-2xl text-red-500" />
        <div>
          <h2 className="font-bold text-lg text-gray-800">Destination</h2>
          <h5 className="text-gray-600">{destination || "Not selected"}</h5>
        </div>
      </div>

      {/* Payment Details */}
      <div className="flex items-center gap-5 p-3">
        <MdOutlinePayment className="text-2xl text-green-500" />
        <div>
          <h2 className="font-bold text-lg text-gray-800">Payment</h2>
          <p className="text-gray-700 font-semibold">
            ₹{fare[vehicleType] || "Calculating..."}
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            setVehicleFoundPannel(true);
            setconfirmedRidePannel(false);
          }}
          className="bg-fuchsia-500 text-white text-lg font-semibold w-full py-3 mt-6 rounded-2xl hover:bg-fuchsia-600 transition"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
//8:48