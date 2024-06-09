import React from 'react'
import { FaBriefcase, FaCode, FaPhoneFlip } from 'react-icons/fa6'
import { HiHome } from 'react-icons/hi2'
import { ImProfile } from 'react-icons/im'

const Footer = () => {
  return (
      <div className='px-[2em] lg:hidden  w-full fixed  bottom-2 left-0 z-50 justify-center align-middle'>
           <ul className='flex w-full gap-3 text-white px-10 py-6 bg-[#017BC5] bg-opacity-95 place-content-center justify-between align-middle text-xl text-center  rounded-full '>
                  <li> <a href='/home'> <HiHome/></a> </li>
                  <li> <a href='/home'> <ImProfile/></a> </li>
                  <li><a href='/home'><FaCode/></a></li>
                  <li> <a href='/home'> <FaBriefcase/></a></li>
                  <li><a href='/home'><FaPhoneFlip/></a></li>
              </ul>
    </div>
  )
}

export default Footer