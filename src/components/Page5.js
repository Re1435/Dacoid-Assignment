import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";

const Page5 = ({ navigateToPage }) => {
  const [value, setValue] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
  });

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  const navigate = () => {
    const selectedGoals = Object.keys(value).filter((key) => value[key]);
    if (selectedGoals.length < 3) {
      alert("Select atleast 3 goals");
    } else {
      navigateToPage("page6");
    }
  };

  return (
    <>
      <Navbar />
      <div className='mt-[48px]'>
        <h2 className='font-montserrat font-semibold text-xl text-center'>
          What are your goals?
        </h2>
      </div>
      <div className='ml-4'>
        <div className='w-[343px] h-[50px] rounded-xl flex justify-between bg-slate-200 items-center px-4 mt-6'>
          <p className='font-montserrat font-semibold text-sm'>Weight Loss</p>
          <input
            type='checkbox'
            className='w-[22px] h-[22px]'
            name='box1'
            checked={value.box1}
            onChange={handleCheckbox}
          />
        </div>
        <div className='w-[343px] h-[50px] rounded-xl flex justify-between bg-slate-200 items-center px-4 mt-6'>
          <p className='font-montserrat font-semibold text-sm'>Muscle Gain</p>
          <input
            type='checkbox'
            className='w-[22px] h-[22px]'
            name='box2'
            checked={value.box2}
            onChange={handleCheckbox}
          />
        </div>
        <div className='w-[343px] h-[50px] rounded-xl flex justify-between bg-slate-200 items-center px-4 mt-6'>
          <p className='font-montserrat font-semibold text-sm'>
            Flexibility and Mobility
          </p>
          <input
            type='checkbox'
            className='w-[22px] h-[22px]'
            name='box3'
            checked={value.box3}
            onChange={handleCheckbox}
          />
        </div>
        <div className='w-[343px] h-[50px] rounded-xl flex justify-between bg-slate-200 items-center px-4 mt-6'>
          <p className='font-montserrat font-semibold text-sm'>
            General Fitness
          </p>
          <input
            type='checkbox'
            className='w-[22px] h-[22px]'
            name='box4'
            checked={value.box4}
            onChange={handleCheckbox}
          />
        </div>
        <div className='w-[343px] h-[50px] rounded-xl flex justify-between bg-slate-200 items-center px-4 mt-6'>
          <p className='font-montserrat font-semibold text-sm'>
            Event - specific training
          </p>
          <input
            type='checkbox'
            className='w-[22px] h-[22px]'
            name='box5'
            checked={value.box5}
            onChange={handleCheckbox}
          />
        </div>
        <div className='w-[343px] h-[50px] rounded-xl flex justify-between bg-slate-200 items-center px-4 mt-6'>
          <p className='font-montserrat font-semibold text-sm'>
            Mindfulness and Mental Health
          </p>
          <input
            type='checkbox'
            className='w-[22px] h-[22px]'
            name='box6'
            checked={value.box6}
            onChange={handleCheckbox}
          />
        </div>
      </div>
      <div className='ml-4 mt-[120px]'>
        <button
          onClick={navigate}
          className='w-[344px] h-12 rounded-xl pg3-btn font-montserrat font-semibold text-base text-white text-center'
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default Page5;
