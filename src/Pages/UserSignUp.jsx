import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../../stocks/Logo.png";
import { userDataContext } from "../Context/UserContext";

const UserSignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const [user, setuser] = useContext(userDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the user object in the format the backend expects
    const newuser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/register`,
        newuser
      );
      if (response.status === 201) {
        const data = response.data;
        setuser({
          _id: data._id,
          fullname: data.fullname,
          email: data.email,
          token: data.token,
        });
        localStorage.setItem('token',data.token)
        navigate("/home");
      }
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

    // Reset form fields
    setemail("");
    setfirstname("");
    setlastname("");
    setpassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src={image} alt="Logo" className="w-12 h-8 mb-4" />
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="font-bold text-xl mb-2 mt-6">What is your firstname</h3>
          <div className="flex gap-3">
            <input
              type="text"
              required
              placeholder="firstname"
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
              className="text-black border bg-[#eeeeee] border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
            />
            <input
              type="text"
              required
              placeholder="lastname"
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value);
              }}
              className="text-black border bg-[#eeeeee] border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
            />
          </div>
          <h3 className="font-bold text-xl mb-2 mt-6">
            What is your email address
          </h3>
          <input
            type="email"
            required
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="text-black border bg-[#eeeeee] border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
          />
          <h3 className="font-bold text-xl mt-4 mb-2">What is your Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="enter your Password"
            className="text-black bg-[#eeeeee] border border-black rounded px-4 py-2 w-full text-lg placeholder:text-lg"
          />
          <button className="w-full mt-5 py-2 flex items-center justify-center gap-2 bg-black text-white font-bold">
            Sign Up
          </button>
        </form>
        <p className="mt-2 font-semibold gap-2 flex justify-center">
          Already have an account?{" "}
          <Link to="/UserLogin" className="text-blue-600 gap-2">
            Log in here
          </Link>
        </p>
      </div>
      <Link
        to="/CaptainLogin"
        className="w-full py-2 flex items-center justify-center gap-2 bg-black text-white font-bold"
      >
        Create a Captain
      </Link>
    </div>
  );
};

export default UserSignUp;