import React, { useState } from "react";
import image from "../../stocks/Logo.png";
import { Link } from "react-router-dom";
import UserContext, { userDataContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";


const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})
  const [errorMessage, setErrorMessage] = useState("");

  const [user ,setuser] = useContext(userDataContext)
  const Navigate = useNavigate()


  const handleSubmit =  async(e) =>{
    e.preventDefault()
    setuserData({
      email:email,
      password:password
    })

    const UserLogin = {
      email:email,
      password:password
    }
try {
  
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/Login`,UserLogin)
      const data = response.data
      setuser(data.user);
      localStorage.setItem('token',data.token)
      Navigate('/home')
      
  
} catch (error) {
  if (error.response) {
    // Server responded with a status code outside 2xx (e.g., 400)
    setErrorMessage(error.response.data.error || "Registration failed");
  } else if (error.request) {
    // No response received
    setErrorMessage("No response from server. Please try again.");
  } else {
    // Error setting up the request
    setErrorMessage("An unexpected error occurred.");
  }
}
setemail('')
setpassword('')

  }

  return (
    <div className="p-4 pl-4 h-screen flex flex-col justify-between">
      <div>
        <img src={image} alt="Logo" className=" w-12 h-8 mb-4" />
        <form onSubmit={(e)=>{
           handleSubmit(e)
        }}>
          <h3 className="font-bold text-xl mb-2 mt-6 ">
            What is your email address
          </h3>
          <input
            type="email"
            required
            placeholder="enter your email"
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            className="text-black border  border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg  "
          />
          <h3 className="font-bold text-xl mt-3 mb-2 ">
            What is your Password
          </h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value) 
            }}
            placeholder="enter your Password"
            className="text-black border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
          />
          <button className="w-full mt-5 py-2 flex items-center justify-center gap-2 bg-black text-white font-bold ">
            Login
          </button>
        </form>
        <p className="mt-2 font-semibold gap-2 flex justify-center">
          New Here ?{" "}
          <Link to="/UserSignup" className="text-blue-600 gap-2">
            Click over here
          </Link>
        </p>
      </div>
      <Link to='/CaptainLogin' className="w-full  py-2  flex items-center justify-center gap-2 bg-black text-white font-bold ">
        Create an Captain
      </Link>
    </div>
  );
};

export default UserLogin;
