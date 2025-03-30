import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import image from "../../stocks/Logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RxDoubleArrowDown } from "react-icons/rx";
import LocationSearchPannel from "../Components/LocationSearchPannel";
import VehicleDesc from "../Components/VehiclePannel";
import ConfirmedRide from "../Components/ConfirmedRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelopen, setPannelOpen] = useState(false);
  const [VehiclePannel, setVehiclePannel] = useState(false);
  const [confirmedRidePannel, setconfirmedRidePannel] = useState(false);
  const [VehicleFoundPannel, setVehicleFoundPannel] = useState(false);
  const [waitingforDriver, setwaitingforDriver] = useState(false);
  const [isSelectingPickup, setIsSelectingPickup] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [fare, setfare] = useState({});
  const [vehicleType, setVehicleType] = useState(null); // ✅ Add vehicleType state

  const PannelRef = useRef(null);
  const VehiclePannelRef = useRef(null);
  const ConfirmVehicleRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserToken(token);
    }
  }, []);

  const fetchSuggestions = async (value) => {
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/Maps/get-suggestion?input=${value}`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useGSAP(() => {
    gsap.to(PannelRef.current, {
      height: pannelopen ? "70%" : "0%",
      padding: pannelopen ? 20 : 0,
    });
  }, [pannelopen]);

  useGSAP(() => {
    gsap.to(VehiclePannelRef.current, {
      y: VehiclePannel ? 0 : "100%",
    });
  }, [VehiclePannel]);

  useGSAP(() => {
    gsap.to(ConfirmVehicleRef.current, {
      y: confirmedRidePannel ? 0 : "100%",
    });
  }, [confirmedRidePannel]);

  useGSAP(() => {
    gsap.to(VehicleFoundRef.current, {
      y: VehicleFoundPannel ? 0 : "100%",
    });
  }, [VehicleFoundPannel]);

  useGSAP(() => {
    gsap.to(WaitingForDriverRef.current, {
      y: waitingforDriver ? 0 : "100%",
    });
  }, [waitingforDriver]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const getfare = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/Rides/calculate-fare`,
        {
          params: { pickup, destination }, // ✅ Pass query parameters correctly
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      console.log(response.data);
      setfare(response.data.fare); // ✅ Store fare in state if needed
    } catch (error) {
      console.error(
        "Error fetching fare:",
        error.response?.data || error.message
      );
    }
  };

  const createRide = async (vehicleType) => {
    try {
      if (!pickup || !destination) {
        console.error("Pickup and destination are required!");
        return;
      }
      if (!vehicleType) {
        console.error("Vehicle type is required!");
        return;
      }

      const requestData = { pickup, destination, vehicleType };
      console.log("🚀 Sending Request Data:", requestData);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/Rides/createRide`,
        requestData,
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      console.log("🎉 Ride Created:", response.data);
    } catch (error) {
      console.error(
        "❌ Error creating ride:",
        error.response?.data || error.message
      );
      if (error.response?.data?.errors) {
        console.table(error.response.data.errors);
      }
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <img src={image} alt="Logo" className="w-16 absolute left-5 top-4" />

      <img
        className="h-full w-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Map"
      />

      <div className="flex flex-col justify-end h-screen absolute bottom-0">
        <div className="bg-white p-5 h-[30%] relative">
          <h5
            className="right-3 absolute top-3"
            onClick={() => setPannelOpen(false)}
          >
            <RxDoubleArrowDown />
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>

          {/* 🚀 Form is intact */}
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 rounded-sm bg-black top-[36%] left-[10%]"></div>

            {/* Pickup Location Input */}
            <input
              onClick={() => {
                setPannelOpen(true);
                setIsSelectingPickup(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                fetchSuggestions(e.target.value);
              }}
              className="bg-[#eee] px-4 py-2 text-center rounded-lg mt-5 text-lg w-full"
              placeholder="Add your Origin"
              type="text"
            />

            {/* Destination Input */}
            <input
              onClick={() => {
                setPannelOpen(true);
                setIsSelectingPickup(false);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                fetchSuggestions(e.target.value);
              }}
              className="bg-[#eee] px-4 py-2 rounded-lg text-center text-lg mt-3 w-full"
              placeholder="Enter your Destination"
              type="text"
            />
            <button
              onClick={() => {
                setVehiclePannel(true); // ✅ Open vehicle panel
                setPannelOpen(false);
                getfare(); // ✅ Close location search panel
              }}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              Confirm Location
            </button>
          </form>
        </div>

        {/* ✅ Location Search Panel - Fixed `suggestions` issue */}
        <div ref={PannelRef} className="bg-white h-0 overflow-hidden">
          <LocationSearchPannel
            setVehiclePannel={setVehiclePannel}
            setPannelOpen={setPannelOpen}
            suggestions={suggestions} // ✅ Using `suggestions` state
            setPickup={setPickup}
            setDestination={setDestination}
            isPickup={isSelectingPickup}
          />
        </div>
      </div>

      <div
        ref={VehiclePannelRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 translate-y-full px-6 bg-white"
      >
        <VehicleDesc
          setVehiclePannel={setVehiclePannel}
          setconfirmedRidePannel={setconfirmedRidePannel}
          setVehicleType={setVehicleType} // ✅ Pass vehicleType setter
          fare={fare}
          userToken={userToken}
          pickup={pickup}
          destination={destination}
          createRide={createRide}
        />
      </div>

      <div
        ref={ConfirmVehicleRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 translate-y-full px-6 bg-white"
      >
        <ConfirmedRide
          setconfirmedRidePannel={setconfirmedRidePannel}
          setVehiclePannel={setVehiclePannel}
          setVehicleFoundPannel={setVehicleFoundPannel}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType} // ✅ Pass selected vehicle type
        />
      </div>

      <div
        ref={VehicleFoundRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 translate-y-full px-6 bg-white"
      >
        <LookingForDriver setVehicleFoundPannel={setVehicleFoundPannel} />
      </div>
      <div
        ref={WaitingForDriverRef}
        className="fixed w-full z-10 bottom-0 p-3 translate-y-full py-5  px-6 bg-white"
      >
        <WaitingForDriver setwaitingforDriver={setwaitingforDriver} />
      </div>
    </div>
  );
};

export default Home;
