import React, { useRef, useState } from "react";
import image from "../../stocks/Logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RxDoubleArrowDown } from "react-icons/rx";
import LocationSearchPannel from "../Components/LocationSearchPannel";
import car from "../../stocks/car.png";
import VehicleDesc from "../Components/VehiclePannel";
import ConfirmedRide from "../Components/ConfirmedRide";
import FindingVehicle from "../Components/WaitingForRide";
import LookingForDriver from "../Components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelopen, setPannelOpen] = useState(false);
  const [VehiclePannel, setVehiclePannel] = useState(false);
  const [confirmedRidePannel, setconfirmedRidePannel] = useState(false)
  const [VehicleFoundPannel, setVehicleFoundPannel] = useState(false)

  const PannelRef = useRef(null);
  const VehiclePannelRef = useRef(null);
  const ConfirmVehicleRef = useRef(null);
  const VehicleFoundRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    gsap.to(PannelRef.current, {
      height: pannelopen ? "70%" : "0%",
      padding: pannelopen ? 20 : 0,
    });
  }, [pannelopen]);

  useGSAP(() => {
    if (VehiclePannel) {
      gsap.to(VehiclePannelRef.current, {
        y: 0, // ✅ Fix: Correct GSAP animation
      });
    } else {
      gsap.to(VehiclePannelRef.current, {
        y: "100%",
      });
    }
  }, [VehiclePannel]);
  
  
  useGSAP(() => {
    if (confirmedRidePannel) {
      gsap.to(ConfirmVehicleRef.current, {
        y: 0, // ✅ Fix: Correct GSAP animation
      });
    } else {
      gsap.to(ConfirmVehicleRef.current, {
        y: "100%",
      });
    }
  }, [confirmedRidePannel]);
 
 
  useGSAP(() => {
    if (VehicleFoundPannel) {
      gsap.to(VehicleFoundRef.current, {
        y: 0, // ✅ Fix: Correct GSAP animation
      });
    } else {
      gsap.to(VehicleFoundRef.current, {
        y: "100%",
      });
    }
  }, [VehicleFoundPannel]);

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
            onClick={() => {
              setPannelOpen(false);
            }}
          >
            <RxDoubleArrowDown />
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 rounded-sm bg-black top-[36%] left-[10%]"></div>
            <input
              onClick={() => {
                setPannelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-4 py-2 text-center rounded-lg mt-5 text-lg w-full"
              placeholder="Add your Location"
              type="text"
            />

            <input
              className="bg-[#eee] px-4 py-2 rounded-lg text-center text-lg mt-3 w-full"
              value={destination}
              onClick={() => {
                setPannelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your Destination"
              type="text"
            />
          </form>
        </div>
        <div ref={PannelRef} className="bg-white h-0 overflow-hidden">
          <LocationSearchPannel setVehiclePannel={setVehiclePannel} setPannelOpen={setPannelOpen} />
        </div>
      </div>


      <div
        ref={VehiclePannelRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 translate-y-full px-6 bg-white"
      >
        <VehicleDesc setconfirmedRidePannel={setconfirmedRidePannel} setVehiclePannel={setVehiclePannel}/>
      </div>


      <div
        ref={ConfirmVehicleRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 translate-y-full px-6 bg-white"
      >
        <ConfirmedRide setconfirmedRidePannel = {setconfirmedRidePannel } setVehiclePannel = {setVehiclePannel} setVehicleFoundPannel={setVehicleFoundPannel} />
      </div>

      
      <div
      ref={VehicleFoundRef}
        className="fixed w-full z-10 bottom-0 p-3 py-5 translate-y-full px-6 bg-white"
      >
        <LookingForDriver setVehicleFoundPannel = {setVehicleFoundPannel}/>
      </div>


    </div>
  );
};

export default Home;
