import React from "react";
import SignalIcon from "../assets/signal.png";
import WifiIcon from "../assets/wifi.png";
import BatteryIcon from "../assets/battery.png";

const Navbar = () => {
  return (
    <nav className='w-95  h-11'>
      <div className='width-375px height-44px flex flex-row justify-between p-2.5'>
        <div>
          <p className='font-montserrat w-11 font-medium size-5'>9:41</p>
        </div>
        <div className='flex flex-row justify-around'>
          <img className='ml-3 size-5' src={SignalIcon} alt='signal-icon' />
          <img className='ml-3 size-5' src={WifiIcon} alt='wifi-icon' />
          <img className='ml-3 size-5' src={BatteryIcon} alt='battery-icon' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
