import React from "react";
import ArrowIcon from "../assets/left.png";
import RightArrow from "../assets/right.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

const Page7 = ({ navigateToPage }) => {
  return (
    <div className='shcedule-page'>
      <Navbar />
      <div className='mt-6 ml-4 flex'>
        <div
          className='w-6 h-6 rounded bg-slate-200'
          onClick={() => navigateToPage("page6")}
        >
          <img src={ArrowIcon} alt='arrow-icon' className='w-5 h-5 pt-1' />
        </div>
        <div className='ml-10 flex justify-center items-center'>
          <h3 className='font-semibold text-xl ml-10'>Workout Schedule</h3>
        </div>
      </div>
      <div className='flex justify-center items-center mt-6'>
        <img
          src={ArrowIcon}
          alt='arrow-icon'
          className='w-[15px] h-[18px] border-[1.5px] mr-3'
        />
        <p className='font-semibold text-xs'>Feb 2024</p>
        <img
          src={RightArrow}
          alt='arrow-icon'
          className='w-[18px] h-[18px] border-[1.5px] ml-3'
        />
      </div>
      <div className='flex justify-center items-center mx-4 my-5'>
        <div className='flex flex-col w-[63px] h-[74px]'>
          <p className='font-medium text-xs'>Sun</p>
          <h1 className='font-semibold text-2xl'>5</h1>
        </div>
        <div className='flex flex-col text-center w-[63px] h-[74px] pg3-btn rounded-lg text-white'>
          <p className='font-medium text-xs'>Mon</p>
          <h1 className='font-semibold text-2xl'>6</h1>
        </div>
        <div className='flex flex-col text-center w-[63px] h-[74px]'>
          <p className='font-medium text-xs'>Tue</p>
          <h1 className='font-semibold text-2xl'>7</h1>
        </div>
        <div className='flex flex-col text-center w-[63px] h-[74px]'>
          <p className='font-medium text-xs'>Wed</p>
          <h1 className='font-semibold text-2xl'>8</h1>
        </div>
        <div className='flex flex-col text-center w-[63px] h-[74px]'>
          <p className='font-medium text-xs'>Thu</p>
          <h1 className='font-semibold text-2xl'>9</h1>
        </div>
      </div>
      <div className='timeline'>
        <div>
          <p className='font-semibold text-xs ml-4 my-4'>06:00 AM</p>
        </div>

        <hr />
        <div className='flex'>
          <p className='font-semibold text-xs ml-4 my-4'>07:00 AM</p>
          <div className='shcedule-time rounded-[20px] w-[190px] h-[30px] ml-[110px]'>
            <p className='font-semibold text-xs text-white text-center mt-2'>
              Ab Workout, 7:30am
            </p>
          </div>
        </div>

        <hr />
        <div>
          <p className='font-semibold text-xs ml-4 my-4'>08:00 AM</p>
        </div>

        <hr />
        <div className='flex'>
          <p className='font-semibold text-xs ml-4 my-4'>09:00 AM</p>
          <div className='shcedule-time rounded-[20px] w-[190px] h-[30px] ml-[70px]'>
            <p className='font-semibold text-xs text-white text-center mt-2'>
              Upperbody Workout, 9am
            </p>
          </div>
        </div>

        <hr />
        <p className='font-semibold text-xs ml-4 my-4'>10:00 AM</p>
        <hr />
        <p className='font-semibold text-xs ml-4 my-4'>11:00 AM</p>
        <hr />
        <p className='font-semibold text-xs ml-4 my-4'>12:00 PM</p>
        <hr />
        <p className='font-semibold text-xs ml-4 my-4'>01:00 PM</p>
        <hr />
        <div className='flex'>
          <p className='font-semibold text-xs ml-4 my-4'>02:00 PM</p>
          <div className='bg-slate-200 rounded-[20px] w-[190px] h-[30px] ml-[60px]'>
            <p className='font-semibold text-xs text-black text-center mt-2'>
              Lowerbody Workout, 3pm
            </p>
          </div>
        </div>

        <hr />
        <p className='font-semibold text-xs ml-4 my-4'>03:00 PM</p>
        <hr />
        <p className='font-semibold text-xs ml-4 my-4'>04:00 PM</p>
        <hr />
        <p className='font-semibold text-xs ml-4 my-4'>05:00 PM</p>
        <hr />
      </div>
      <Footer />
    </div>
  );
};

export default Page7;
