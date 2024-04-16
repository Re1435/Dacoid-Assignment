import React from "react";
import HomeIcon from "../assets/home.png";
import Calender from "../assets/calendar.png";
import CameraIcon from "../assets/camera.png";
import UserIcon from "../assets/user.png";
import SearchIcon from "../assets/search-icon1.png";
import "../App.css";

const Footer = ({ navigateToPage }) => {
  return (
    <footer className='w-[375px] h-[76px] bg-white mt-5 mx-11'>
      <div className='flex w-[322px] h-[30px] justify-evenly items-center cursor-pointer'>
        <img
          src={HomeIcon}
          alt='home-icon'
          className='w-[34px] h-[34px] mr-5'
        />
        <img
          src={Calender}
          alt='calender-icon'
          className='w-[34px] h-[34px] mr-5'
          onClick={() => navigateToPage("page7")}
        />
        <div className='search-icon w-[63px] h-[63px] rounded-full flex justify-center items-center mx-5 mb-9'>
          <img
            src={SearchIcon}
            alt='search-icon'
            className='w-[32px] h-[32px] '
          />
        </div>
        <img
          src={CameraIcon}
          alt='camera-icon'
          className='w-[34px] h-[34px] mr-5'
        />
        <img
          src={UserIcon}
          alt='user-icon'
          className='w-[34px] h-[34px] mr-5'
        />
      </div>
    </footer>
  );
};

export default Footer;
