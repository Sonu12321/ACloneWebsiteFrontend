import React from "react";

const LocationSearchPannel = ({ setVehiclePannel,setPannelOpen }) => {
  const locations = [
    "Vapi, Gujarat",
    "Chanod, Gujarat",
    "Gunjan, Gujarat",
    "Haria Park, Gujarat",
    "Imran Nagar, Gujarat",
  ];

  return (
    <div className="p-3">
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            console.log("Location clicked:", location); // Debugging
            setVehiclePannel(true);
            setPannelOpen(false)

          }}
          className="flex gap-4 border-2 p-3 border-gray-300 items-center my-2 justify-start cursor-pointer"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            New Here
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPannel;
