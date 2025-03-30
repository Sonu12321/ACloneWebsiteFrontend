import React from "react";
import car from "../../stocks/car.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FinishRide = ({setfinishRidePannel}) => {
    const navigate  = useNavigate()
  return (
    <div>
          <h5
            onClick={() => {
                setfinishRidePannel(false)
            }}
          >
            <RxDoubleArrowDown />
          </h5>
          <h3 className="text-2xl font-semibold mt-2">Your Ride Is Been Finish</h3>
            <div className="flex bg-[#eee] w-full items-center justify-between p-3 rounded-lg">
                      <img className="h-14" src={car} alt="Car" />
                      <h3 className="font-semibold">Sonu Snlsdfn</h3>
                      <div className="">
                        <p className="flex gap-2 text-xl font-semibold items-center">
                          <MdOutlinePayment />  5454
                        </p>
                        <p className="bg-gray-600 text-black rounded-lg text-center">Earned</p>
                      </div>
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
            <button onClick={()=>{
              
                navigate('/CaptainHome')
            }} 
            
            className="bg-fuchsia-500 h-10 w-full mt-10 rounded-2xl font-semibold">
              Finish Ride
            </button>
          </div>
        </div>
  )
}

export default FinishRide