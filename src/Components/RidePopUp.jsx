import React from 'react'
import car from "../../stocks/car.png";
import { MdOutlinePayment } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { RxDoubleArrowDown } from "react-icons/rx";

const RidePopUp = ({setRidePopUpPannel,setconfirmRidePopUpPannel}) => {
  return (
    <div>
         <h5 onClick={()=>{
                setRidePopUpPannel(false)
              }}><RxDoubleArrowDown /></h5>
     <div className="h-1/2  ">
     <h3 className='text-2xl text-center font-semibold from-stone-700 mb-4'>A ride for you</h3>
            {/* User Info */}
            <div className="flex bg-[#eee] w-full items-center justify-between p-3 rounded-lg">
              <img className="h-14" src={car} alt="Car" />
              <h3 className="font-semibold">Sonu Snlsdfn</h3>
              <div className="flex items-center">
                <p className="flex gap-2 items-center">
                  <MdOutlinePayment /> 5454
                </p>
              </div>
            </div>
    
            {/* Location Details */}
            <div className="flex items-center gap-5 p-3 border-b-2 mt-4">
              <CiLocationOn />
              <div>
                <h2 className="font-bold text-2xl">Current Location</h2>
                <h5>Current location details...</h5>
              </div>
            </div>
    
            <div className="flex items-center gap-5 p-3 border-b-2 mt-4">
              <CiLocationOn />
              <div>
                <h2 className="font-bold text-2xl">Destination</h2>
                <h5>Destination details...</h5>
              </div>
            </div>
    
            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 mt-20">
              <button onClick={()=>{
                setRidePopUpPannel(false)
              }} className="bg-gray-400 h-12 w-1/2 rounded-2xl font-semibold text-white">
                Ignore
              </button>
              <button onClick={()=>{
                setconfirmRidePopUpPannel(true)
              }} className="bg-fuchsia-500 h-12 w-1/2 rounded-2xl font-semibold text-white">
                Accept
              </button>
            </div>
          </div>
          </div>
  )
}

export default RidePopUp