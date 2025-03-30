import React from "react";
import image from "../../stocks/Logo.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import car from "../../stocks/car.png";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen  overflow-hidden">
        <Link to='/Home'>
      <img src={image} alt="Logo" className="w-16 absolute left-5 top-4" />
        </Link>

      <img
        className="h-1/2 w-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Map"
      />
      <div className="h-1/2 p-4">
        

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
        <div className="flex items-center gap-5 p-3 ">
          <MdOutlinePayment />
          <div>
            <h2 className="font-bold text-2xl">Payments</h2>
            <p>1656</p>
          </div>
            </div>
            {/* <div className="flex justify-center items-baseline"> */}
            <button className="bg-fuchsia-500 h-10 w-full mt-28 rounded-2xl font-semibold ">Make a Payment</button>
            {/* </div> */}
      </div>
    </div>
  );
};

export default Riding;
