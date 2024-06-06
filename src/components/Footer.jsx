import React from 'react'
import { FaBriefcase, FaBuilding, FaCode, FaComment, FaHandsAslInterpreting, FaPalette, FaPhoneFlip } from 'react-icons/fa6'
import { FcContacts, FcServices } from 'react-icons/fc'
import { FiFile } from 'react-icons/fi'
import { HiHome } from 'react-icons/hi2'
import { ImProfile } from 'react-icons/im'

const Footer = () => {
  return (
      <div className='px-[2em] lg:hidden  w-full fixed  bottom-2 left-0 z-50 justify-center align-middle'>
           <ul className='flex w-full gap-3 text-white px-10 py-6 bg-[#017BC5] bg-opacity-95 place-content-center justify-between align-middle text-xl text-center  rounded-full '>
                  <li> <a> <HiHome/></a> </li>
                  <li> <a> <ImProfile/></a> </li>
                  <li><a><FaCode/></a></li>
                  <li> <a> <FaBriefcase/></a></li>
                  <li><a><FaPhoneFlip/></a></li>
              </ul>
    </div>
  )
}

export default Footer