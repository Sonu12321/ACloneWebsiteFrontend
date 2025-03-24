import React from 'react'
import car from "../../stocks/car.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";

const WaitingForRide = () => {
  return (
    <div>
          <h5
            onClick={() => {
                // setconfirmedRidePannel(false);
                // setVehiclePannel(false)
            }}
          >
            <RxDoubleArrowDown />
          </h5>
          <h3 className="text-2xl font-semibold mt-2">Confirm Your Ride</h3>
          <div className="flex items-center justify-center">
            <img className="flex items-center justify-center h-24" src={car} />
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <CiLocationOn />
            <div>
              <h2 className="font-bold text-2xl">current location mt-2</h2>
              <h5>current location</h5>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <CiLocationOn />
            <div>
              <h2 className="font-bold text-2xl">current location mt-2</h2>
              <h5>current location</h5>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <MdOutlinePayment />
            <div>
              <h2 className="font-bold text-2xl">Payments</h2>
              <p>1656</p>
            </div>
          </div>
          <div className="flex justify-center items-baseline">
            <button className="bg-fuchsia-500 h-10 w-full mt-10 rounded-2xl font-semibold">
              Submit
            </button>
          </div>
        </div>
  )
}

export default WaitingForRide