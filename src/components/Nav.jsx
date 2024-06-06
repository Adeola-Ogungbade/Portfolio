import React from 'react';
import logo from '../assets/logo.png';
import Buttons from '../components/Buttons';
import '../pages/Styles.css';
import { useState } from 'react';
import Modal from './Modal';
import { HiHome } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import { FaBriefcase, FaCode, FaPhoneFlip } from 'react-icons/fa6';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);

  const CloseModal = () => {
    setOpenModal(false)
  };


  const handleClick = () => {
    setIsOpen(!isOpen)
    setOpenModal(true)
  };



  return (
    <div className=' p-6 py-8 fixed align-middle justify-center bottom-4 lg:top-[1rem]  lg:bottom-auto  h-10  w-fit  bg-[#002B6A] border border-slate-500  rounded-3xl  mt-5  self-center  md:block   z-40 '>
              <Modal
              open={OpenModal}
              onClose={CloseModal}
              Customstyle={{ backgroundColor: "#FEB12F", width: "", opacity: "75" }}
          
        />
    <div className=' text-white lg:text-[10px] sm:text-[14px] w-full h-full justify-center   align-middle font-bold flex '>
            <ul className=' text-xl   md:text-[15px] w-full justify-center gap-12  sm:gap-6 flex list-none  items-center row   '>
                  <li> <a> <span className='hidden lg:flex'> Home</span> <HiHome className=' block lg:hidden'/> </a> </li>
                  <li> <a> <span className='hidden lg:flex'> About</span> <ImProfile className=' block lg:hidden'/> </a> </li>
                  <li> <a> <span className='hidden lg:flex'> Services</span> <FaCode className=' block lg:hidden'/> </a> </li>
                  <li> <a> <span className='hidden lg:flex'> Portfolio</span> <FaBriefcase className=' block lg:hidden'/> </a> </li>
                  <li> <a> <span className='hidden lg:flex'> Contact</span> <FaPhoneFlip className=' block lg:hidden'/> </a> </li>

              </ul>
          </div>
    </div>
  )
}

export default Nav
