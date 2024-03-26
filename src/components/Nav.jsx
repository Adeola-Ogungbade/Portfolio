import React from 'react';
import logo from '../assets/logo.png';
import Buttons from '../components/Buttons';
import '../pages/Styles.css';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
<div className=' md:px-6 pt-3'>
    <div className=' text-white lg:text-[18px] sm:text-[14px]  justify-between  align-middle font-bold flex px-[20px] py-2 lg:py-1 lg:px-[80px]'>
        <>
            <img className=' sm:w-36 w-24 ' src={logo} alt="logo" />
              </>
              <div className='w-16 lg:hidden h-16 items-center flex justify-center bg-[#FEB12F] rounded-[50%]'>
                <div
                className="w-8 sm:w-16 lg:hidden  align-middle self-center h-4 sm:h-8 flex flex-col justify-between font cursor-pointer"
                onClick={handleClick}>
                <div
                    className={` h-0.5 bg-white transition-transform duration-300 transform ${
                    isOpen ? ' w-full rotate-45 translate-y-3.5 sm:translate-y-7' : 'w-[60%] '
                    }`}
                />
                <div
                    className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <div
                    className={`  self-end h-0.5 bg-white transition-transform duration-300 transform ${
                    isOpen ? 'w-full  -rotate-45 ' : 'w-[60%] '
                    }`}
                />
                </div>
              </div>
            <ul className='hidden lg:flex list-none  items-center row sm:gap-5 lg:gap-16'>
                  <li> <a> Home</a> </li>
                  <li> <a> About</a> </li>
                  <li><a>Services</a></li>
                  <li> <a> Portfolio</a></li>
                  <li><a>Contact</a></li>
              </ul>
              <div className='hidden lg:flex'>
                  <Buttons
                      text={'Download CV'}
                      style={{ placeSelf: 'center'}}
                  />
              </div>
          </div>
    </div>
  )
}

export default Nav
