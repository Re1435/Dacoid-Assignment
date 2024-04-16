import React, { useState } from "react";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import Navbar from "./Navbar";
import "../App.css";

const Page4 = ({ navigateToPage }) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleInput = (e) => {
    e.preventDefault();
    if (value.email === "" || value.password === "") {
      alert("User input is required");
    } else {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData === null) {
        alert("No user found");
        return;
      }
      if (
        value.email === userData.email &&
        value.password === userData.password
      ) {
        alert("Sign in successful");
        navigateToPage("page5");
      } else {
        alert("Invalid credentials. Please try again...");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-w-44 h-6 mt-3.5 ml-3'>
        <h2 className='text-black font-roboto font-semibold text-xl'>
          Welcome Back
        </h2>
      </div>

      <form className='mt-7'>
        <input
          type='email'
          className='w-[344px] h-14 rounded-xl mt-6 ml-4 bg-slate-100 p-4'
          placeholder='Email'
          name='email'
          value={value.email}
          onChange={handleChange}
        />
        <input
          type='text'
          className='w-[344px] h-14 rounded-xl mt-6 ml-4 bg-slate-100 p-4'
          placeholder='Password'
          name='password'
          value={value.password}
          onChange={handleChange}
        />
      </form>
      <div className='mt-6 ml-6'>
        <p className='font-montserrat text-gray-500 font-medium text-xs underline'>
          Forgot your password?
        </p>
      </div>
      <div className='ml-4 mt-[280px]'>
        <button
          type='submit'
          onClick={handleInput}
          className='w-[344px] h-12 rounded-xl pg3-btn font-montserrat font-semibold text-base text-white text-center'
        >
          Sign In
        </button>
      </div>
      <div className='flex flex-row ml-4 mt-8'>
        <hr className='w-[157px]' />
        <p className='font-montserrat font-medium ml-2 mr-2 text-[15px]'>Or</p>
        <hr className='w-[157px]' />
      </div>
      <div className='flex flex-row justify-center mt-6'>
        <div className='w-[44px] h-[44px] border-[1px] border-gray-500 rounded-xl mr-5 flex justify-center'>
          <img
            src={GoogleIcon}
            alt='google-icon'
            className='w-[18px] h-[18px] mx-4 mt-3'
          />
        </div>
        <div className='w-[44px] h-[44px] border-[1px] border-gray-500 rounded-xl mr-5 flex justify-center'>
          <img
            src={FacebookIcon}
            alt='google-icon'
            className='w-[18px] h-[18px] mx-4 mt-3'
          />
        </div>
      </div>
      <div className='text-center mt-7'>
        <p className='font-montserrat font-medium text-xs '>
          <span className='underline'>Don't have an account?</span>
          <span className='text-indigo-400 underline'> Create an account</span>
        </p>
      </div>
    </>
  );
};

export default Page4;
