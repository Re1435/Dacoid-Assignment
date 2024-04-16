import React from "react";
import Navbar from "./Navbar";
import Image1 from "../assets/img-1.png";
import BtnImg from "../assets/right-arrow.svg";
const Page1 = ({ navigateToPage }) => {
  return (
    <>
      <Navbar />
      <div
        className='flex justify-end ml-11'
        onClick={() => navigateToPage("page3")}
      >
        <p className='w-9 h-5 m-11  font-medium text-base text-indigo-400 underline mr-5'>
          Skip
        </p>
      </div>
      <div className='mt-31 ml-12'>
        <img src={Image1} alt='running' className='w-72 h-72' />
      </div>
      <div className='mt-20 ml-5 mr-3'>
        <h2 className='font-montserrat font-semibold text-xl text-black'>
          Track Your Goal
        </h2>
        <p className='font-montserrat font-medium text-base text-gray-400 mt-8'>
          Don't worry if you have trouble determining your goals. We can help
          you determine your goals and track your goals
        </p>
      </div>
      <div className='flex justify-end mt-20 mr-5'>
        <button className='mt-2' onClick={() => navigateToPage("page2")}>
          <img src={BtnImg} alt='arrow-img' className='size-16' />
        </button>
      </div>
    </>
  );
};

export default Page1;
