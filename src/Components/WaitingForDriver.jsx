import React from "react";
import car from "../../stocks/car.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";

const WaitingForDriver = ({setwaitingforDriver}) => {
  return (
    <div>
      <h5
        onClick={() => {
          // setconfirmedRidePannel(false);
          // setVehiclePannel(false)
          setwaitingforDriver(false)
        }}
      >
        <RxDoubleArrowDown />
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-14 " src={car} alt="Car" />
        <div>
          <h5 className="text-xl font-semibold">Sonu</h5>
          <h4 className="text-2xl font-extrabold flex justify-end">
            KL-03-#hhhh
          </h4>
          <h4>Lamborghini Urus</h4>
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
    
    </div>
  );
};

export default WaitingForDriver;
