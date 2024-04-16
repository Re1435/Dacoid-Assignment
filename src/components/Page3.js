import React, { useState } from "react";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import Navbar from "./Navbar";
import "../App.css";

const Page3 = ({ navigateToPage }) => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    checked: false,
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = () => {
    setValue((prevValue) => ({
      ...prevValue,
      checked: !prevValue.checked,
    }));
  };

  const handleInput = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, checked } = value;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      checked === false
    ) {
      alert("User input is required");
    } else {
      const formData = { firstName, lastName, email, password, checked };
      localStorage.setItem(`userData`, JSON.stringify(formData));
      alert("User account created successfully!");
      navigateToPage("page4");
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-w-44 h-6 mt-3.5 ml-3'>
        <h2 className='text-black font-roboto font-semibold text-xl'>
          Create an account
        </h2>
      </div>

      <form className='mt-7'>
        <input
          type='text'
          className='w-[344px] h-14 rounded-xl mt-6 ml-4 bg-slate-100 p-4'
          placeholder='First Name'
          value={value.firstName}
          name='firstName'
          onChange={handleChange}
        />
        <input
          type='text'
          className='w-[344px] h-14 rounded-xl mt-6 ml-4 bg-slate-100 p-4'
          placeholder='Last Name'
          value={value.lastName}
          name='lastName'
          onChange={handleChange}
        />
        <input
          type='email'
          className='w-[344px] h-14 rounded-xl mt-6 ml-4 bg-slate-100 p-4'
          placeholder='Email'
          value={value.email}
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          className='w-[344px] h-14 rounded-xl mt-6 ml-4 bg-slate-100 p-4'
          placeholder='Password'
          value={value.password}
          name='password'
          onChange={handleChange}
        />
      </form>
      <div className='ml-4 mt-6 flex flex-row w-[350px]'>
        <input
          type='checkbox'
          checked={value.checked}
          onChange={handleCheckbox}
          className='border-2 w-6 h-6 mr-2'
        />
        <p className='font-Montserrat font-medium text-sm'>
          By proceeding, I agree to all
          <span className='text-indigo-400 underline'>T&C</span> and
          <span className='text-indigo-400 underline'> Privacy Policy</span>
        </p>
      </div>
      <div className='ml-4 mt-10'>
        <button
          type='submit'
          onClick={handleInput}
          className='w-[344px] h-12 rounded-xl pg3-btn font-montserrat font-semibold text-base text-white text-center'
        >
          Create an Account
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
        <p className='font-montserrat font-medium text-xs'>
          Already have an account?
          <span className='text-indigo-400 underline'> Login</span>
        </p>
      </div>
    </>
  );
};

export default Page3;
