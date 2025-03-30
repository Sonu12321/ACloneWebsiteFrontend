import React from "react";

const LocationSearchPannel = ({ setVehiclePannel, setPannelOpen, suggestions, setPickup, setDestination, isPickup }) => {
  return (
    <div className="p-1">
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <p
            key={index}
            onClick={() => {
              if (isPickup) {
                setPickup(suggestion.description);
              } else {
                setDestination(suggestion.description);
              }
              setPannelOpen(false);
            }}
            className="p-2 cursor-pointer hover:bg-gray-200 text-lg"
          >
            {suggestion.description}
          </p>
        ))
      ) : (
        <p className="text-gray-500">Start typing to see location suggestions...</p>
      )}

      {/* 🚀 Button to open the vehicle panel & close LocationSearchPannel */}
      
    </div>
  );
};

export default LocationSearchPannel;
