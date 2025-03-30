import React, { useState } from 'react'
import car from "../../stocks/car.png";
import { MdOutlinePayment } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

import { RxDoubleArrowDown } from "react-icons/rx";

const ConfirmRidePopUp = ({setRidePopUpPannel,setconfirmRidePopUpPannel}) => {
  const [otp, setotp] = useState('')
  const navigate = useNavigate()
  const SubmiteventHandler = (e) =>{
   e.preventDefault()
   
  }
  return (
    <div>
         <h5 onClick={()=>{
                setconfirmRidePopUpPannel(false)
              }}><RxDoubleArrowDown /></h5>
     
     <h3 className='text-2xl text-center font-semibold mt-2 from-stone-700 mb-4'>Press Confirm To Start The Ride</h3>
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
            <div 
            onSubmit={()=>{
              SubmiteventHandler(e)
            }}
            className="flex items-center justify-between align-baseline gap-4 ">
            <form >
              <input 
              value={otp}
              onChange={(e)=>{
                setotp(e.target.value)
              }}
              type='text'
              placeholder='enter your otp '
              className="bg-[#eee] px-4 py-2 rounded-lg text-center text-lg mt-3 w-full mb-10"
              />
            <button onClick={()=>{
                setconfirmRidePopUpPannel(false),
                 setRidePopUpPannel(false)
              }} className="bg-gray-400 h-12 w-full rounded-2xl font-semibold text-white mb-4">
                Cancel
              </button>
              <button onClick={()=>{
               
                navigate('/CaptainRiding')
                
              }} className="bg-fuchsia-500 h-12 w-full rounded-2xl font-semibold text-white">
                Accept
              </button>
            </form>
            </div>
          </div>
         
  )
}

export default ConfirmRidePopUp