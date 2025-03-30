import React from 'react'
import car from "../../stocks/car.png";
import { MdOutlinePayment } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import CaptainDetails from "./CaptainInfo";


const CaptainInfo = () => {
    return (
      <div>
        <div className="h-2/5 p-4 w-screen">
          {/* User Info */}
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
  
          {/* Location Details */}
          <div className="flex justify-center gap-10 mt-4">
            <div className="text-center flex flex-col items-center">
              <MdOutlineAccessTimeFilled className="text-2xl" />
              <h5 className="text-xl">10.5 hrs</h5>
              <p className="text-sm">Hours online</p>
            </div>
  
            <div className="text-center flex flex-col items-center">
              <MdOutlineAccessTimeFilled className="text-2xl" />
              <h5 className="text-xl">10.5 hrs</h5>
              <p className="text-sm">Hours online</p>
            </div>
  
            <div className="text-center flex flex-col items-center">
              <MdOutlineAccessTimeFilled className="text-2xl" />
              <h5 className="text-xl">10.5 hrs</h5>
              <p className="text-sm">Hours online</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CaptainInfo;
  