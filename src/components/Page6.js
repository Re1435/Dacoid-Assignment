import React from "react";
import ArrowIcon from "../assets/left.png";
import WarningIcon from "../assets/danger-icon.png";
import Image3 from "../assets/img-3.png";
import Image4 from "../assets/img-4.png";
import Image5 from "../assets/img-5.png";
import ToggleBtn from "../assets/toggle-btn.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

const Page6 = ({ navigateToPage }) => {
  return (
    <div className='tracker-page'>
      <Navbar />
      <div className='mt-6 ml-4 flex'>
        <div
          className='w-6 h-6 rounded bg-slate-200'
          onClick={() => navigateToPage("page5")}
        >
          <img src={ArrowIcon} alt='arrow-icon' className='w-5 h-5 pt-1' />
        </div>
        <div className='ml-10 flex justify-center items-center'>
          <h3 className='font-semibold text-xl ml-10'>Workout Tracker</h3>
        </div>
      </div>
      <div className='flex justify-center items-end mb-4 w-[343px] h-[90px] ml-11 mt-11'>
        <div>
          <p className='text-[10px] font-normal mr-6'>Good job</p>
          <div className='bar h-[60px] bg-indigo-500 w-[2.8px] mr-2'></div>
        </div>

        <div className='bar h-[30px] bg-indigo-500 w-[2.7px] mr-2'></div>
        <div className='bar h-[9.2px] bg-indigo-500 w-[2.7px] mr-5'></div>
        <div className='bar h-[17px] bg-indigo-500 w-[2.7px] mr-2'></div>
        <div className='bar h-[34px] bg-indigo-500 w-[2.7px] mr-2'></div>
        <div className='bar h-[10px] bg-indigo-500 w-[2.7px] mr-2'></div>
        <div className='bar h-[9px] bg-indigo-500 w-[2.7px] mr-5'></div>
        <div className='bar h-[7px] bg-indigo-500 w-[2.7px] mr-5'></div>
        <div className='bar h-[7px] bg-indigo-500 w-[2.7px] mr-5'></div>
        <div className='bar h-[25.5px] bg-indigo-500 w-[2.8px] mr-2'></div>
        <div className='bar h-[9px] bg-indigo-500 w-[2.8px] mr-2'></div>
        <div className='bar bar-2 h-[23px] bg-indigo-500 w-[2.8px] mr-2'></div>
        <div className='m-0'>
          <p className='text-[9px] font-normal mr-6'>less then 320cal</p>
          <div className='bar bar-2 h-[71px] bg-indigo-500 w-[2.8px] mr-2'></div>
        </div>

        <div className='bar bar-2 h-[48px] bg-indigo-500 w-[2.8px] mr-2'></div>
        <div className='bar bar-2 h-[42px] bg-indigo-500 w-[2.8px] mr-5'></div>
        <div className='bar h-[9px] bg-indigo-500 w-[2.8px] mr-2'></div>
      </div>
      <hr />
      <div className='flex justify-between text-[10px] mr-5 ml-5'>
        <p>12.00</p>
        <p>6.00</p>
        <p>12.00</p>
        <p>6.00</p>
      </div>
      <div className='flex warning-box w-[350px] h-[50px] rounded-xl border-[1px] mt-6 mb-2 ml-4 p-3'>
        <img
          src={WarningIcon}
          alt='warning-icon'
          className='w-[20px] h-[20px]'
        />
        <p className='font-medium text-[12px] ml-3 w-[281px]'>
          You've burned fewer calories than yestarday. Time to get moving!
        </p>
      </div>
      <div className='flex justify-between ml-4 mt-6 mr-4'>
        <h4 className='font-semibold text-base'>Upcoming Workout</h4>
        <p className='font-medium text-xs text-gray-400'>See more</p>
      </div>
      <div className='flex justify-around items-center rounded-xl w-[344px] h-[75px] mx-4 box-shadow mt-6'>
        <div>
          <img
            src={Image3}
            alt='body-workout-img'
            className='w-[50px] h-[50px]'
          />
        </div>
        <div className='flex flex-col'>
          <h5 className='font-medium text-xs'>Full Body Workout</h5>
          <p className='font-medium text-[10px] text-gray-400'>Today 3pm</p>
        </div>
        <div>
          <button>
            <img
              src={ToggleBtn}
              alt='toggle-btn'
              className='w-[40px] h-[40px]'
            />
          </button>
        </div>
      </div>
      <div className='flex justify-around items-center rounded-xl w-[344px] h-[75px] mx-4 box-shadow mt-8'>
        <div>
          <img
            src={Image4}
            alt='body-workout-img'
            className='w-[50px] h-[50px]'
          />
        </div>
        <div className='flex flex-col'>
          <h5 className='font-medium text-xs'>Upper Body Workout</h5>
          <p className='font-medium text-[10px] text-gray-400'>
            4 Feb, 3:30 pm
          </p>
        </div>
        <div>
          <button>
            <img
              src={ToggleBtn}
              alt='toggle-btn'
              className='w-[40px] h-[40px]'
            />
          </button>
        </div>
      </div>
      <h3 className='font-semibold text-base ml-4 mt-6'>
        What Do You Want to Train
      </h3>
      <div className='box-shadow flex justify-between items-center px-4 bg-indigo-300 w-[343px] h-[124px] my-5 ml-4 rounded-xl'>
        <div className='flex flex-col font-medium text-xs'>
          <p>Full Body Workout</p>
          <p>Arms</p>
          <p>Chest</p>
        </div>
        <div className='w-[100px] h-[100px] rounded-full bg-indigo-100'>
          <img src={Image5} alt='workout-img' className='w-[100px] h-[100px]' />
        </div>
      </div>
      <Footer navigateToPage={navigateToPage} />
    </div>
  );
};

export default Page6;
