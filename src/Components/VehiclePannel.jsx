import React from 'react';
import { RxDoubleArrowDown } from "react-icons/rx";
import car from "../../stocks/car.png";

const VehicleDesc = ({ 
  setVehiclePannel, 
  setconfirmedRidePannel, 
  setVehicleType, 
  fare, 
  createRide 
}) => {

  // Function to handle vehicle selection
  const handleVehicleSelect = async (vehicle) => {
    setVehicleType(vehicle); // ✅ Store selected vehicle type
    try {
      await createRide(vehicle); // ✅ Ensure ride is created before closing panels
      setconfirmedRidePannel(true);
      setVehiclePannel(false);
    } catch (error) {
      console.error("Error creating ride:", error);
    }
  };

  return (
    <div className="p-2">
      <h5 
        className="cursor-pointer text-xl mb-4 text-gray-600 hover:text-black transition"
        onClick={() => setVehiclePannel(false)}
      >
        <RxDoubleArrowDown />
      </h5>

      {/* UberGO Car */}
      <div 
        onClick={() => handleVehicleSelect("car")}
        className="flex items-center w-full p-4 border-2 active:border-black bg-gray-100 rounded-xl mb-4 justify-between cursor-pointer hover:bg-gray-200 transition"
      >
        <img className="h-20 mr-4" src={car} alt="Car" />
        <div className="w-1/2">
          <h3 className="font-semibold text-lg text-gray-800">UberGO Car</h3>
          <h5 className="text-sm text-gray-600">🚗 2 mins away</h5>
          <p className="font-medium text-xs text-gray-500">Affordable compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">₹{fare.car || "Loading..."}</h2>
      </div> 

      {/* UberGO Rickshaw */}
      <div 
        onClick={() => handleVehicleSelect("auto")}
        className="flex items-center w-full p-4 border-2 active:border-black bg-gray-100 rounded-xl mb-4 justify-between cursor-pointer hover:bg-gray-200 transition"
      >
        <img className="h-20 mr-4" src="https://t3.ftcdn.net/jpg/02/01/81/38/360_F_201813821_1x634XwrL5BjE0MUrhf59b5jPuUilPPc.jpg" alt="Rickshaw" />
        <div className="w-1/2">
          <h3 className="font-semibold text-lg text-gray-800">UberGO Rickshaw</h3>
          <h5 className="text-sm text-gray-600">🛺 2 mins away</h5>
          <p className="font-medium text-xs text-gray-500">Affordable compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">₹{fare.auto || "Loading..."}</h2>
      </div> 

      {/* UberGO MotorCycle */}
      <div 
        onClick={() => handleVehicleSelect("moto")}
        className="flex items-center w-full p-4 border-2 active:border-black bg-gray-100 rounded-xl mb-4 justify-between cursor-pointer hover:bg-gray-200 transition"
      >
        <img className="h-20 mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRJ7uaW6HoD-zn-_I8oexElvQBeueWA_02g&s" alt="MotorCycle" />
        <div className="w-1/2">
          <h3 className="font-semibold text-lg text-gray-800">UberGO MotorCycle</h3>
          <h5 className="text-sm text-gray-600">🏍️ 2 mins away</h5>
          <p className="font-medium text-xs text-gray-500">Affordable compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">₹{fare.moto || "Loading..."}</h2>
      </div> 
    </div>
  );
}

export default VehicleDesc;
