import React from "react";
import Image2 from "../assets/img-2.png";
import BtnImg from "../assets/right-arrow.svg";
import Navbar from "./Navbar";
const Page2 = ({ navigateToPage }) => {
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
      <div className='mt-31 ml-3'>
        <img src={Image2} alt='cycling' className='w-82 h-60' />
      </div>
      <div className='mt-20 ml-5 mr-3'>
        <h2 className='font-montserrat font-semibold text-xl text-black mt-10'>
          Get Burn
        </h2>
        <p className='font-montserrat font-medium text-base text-gray-400 mt-8'>
          Let's keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </p>
      </div>
      <div className='flex justify-end mt-20 mr-5'>
        <button className='mt-2' onClick={() => navigateToPage("page3")}>
          <img src={BtnImg} alt='arrow-img' className='size-16' />
        </button>
      </div>
    </>
  );
};

export default Page2;
