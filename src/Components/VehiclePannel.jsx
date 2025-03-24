import React from 'react'
import { RxDoubleArrowDown } from "react-icons/rx";
import car from "../../stocks/car.png";

const VehicleDesc = ({setVehiclePannel,setconfirmedRidePannel}) => {
  return (
    <div> 
         <h5 onClick={()=>{
        setVehiclePannel(false)
      }}><RxDoubleArrowDown /></h5>
      
      
      <div onClick={()=>{
        setconfirmedRidePannel(true)
      }}  className="flex items-center w-full p-3 border-2 active:border-black bg-gray-100 rounded-xl mb-3 mt-6 justify-between">
        <img className="h-20 mr-4" src={car} alt="" />
        <div className="w-1/2">
          <h3 className="font-medium text-sm">UberGO</h3>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs">Affordable compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">Rupees 190</h2>
      </div> 
      </div>
  )
}

export default VehicleDesc