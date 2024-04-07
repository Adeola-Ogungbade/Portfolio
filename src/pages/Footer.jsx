import React from 'react';
import logo from '../assets/logo.png';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import newlogo from '../assets/newlogo.png'

const Footer = () => {
  return (
    <div className='py-24 lg:px-[250px] px-10 bg-[#F5F5F5] '>
     <div className=' lg:flex-row justify-between flex flex-col space-y-6 lg:space-y-0'>
   
        <div className=' space-y-4 text-[rgb(0,40,133)] w-full' >
          <h1 className='text-xl font-bold'> Navigation</h1>
          <ul className=' list-none space-y-1 text-lg font-semibold'>
            <li> <a> Home</a></li>
            <li> <a> About</a></li>
            <li> <a> Portfolio</a></li>
            <li> <a> Services</a></li>
          </ul>
        </div>

        <div className=' space-y-4  text-[rgb(0,40,133)] w-full' >
          <h1 className='text-xl font-bold'> Socials</h1>
             <ul className=' space-x-3 text-[10px] flex'>
            <li className=' text-white text-nowrap rounded-full p-3 bg-[#002855] cursor-pointer' > <a href='mailto:adeoladeborah19@gmail.com'><FaEnvelope /></a> </li>
            <li className=' text-white text-nowrap rounded-full p-3 bg-[#002855]' > <FaLinkedin /></li>
            <li className=' text-white text-nowrap rounded-full p-3 bg-[#002855]'><FaTwitter /></li>
            <li className=' text-white text-nowrap rounded-full p-3 bg-[#002855]'> <FaInstagram/></li>
        </ul>
        </div>

         <div className=' space-y-4 text-[#002855]  flex flex-col justify-end  w-[30%]' >
          <h1 className='text-xl font-bold'> Contact</h1>
          <ul className=' list-none space-y-1 font-semibold'>
            <li><a className='flex space-x-3'>
              <span className=' mt-1'><FaEnvelope/></span> 
              <h5>Adeoladeborah19@gmail.com</h5> 
            </a></li>
            <li><a className='flex space-x-3'>
              <span className=' mt-1'><FaPhone/></span> 
              <h5>+2349032615970</h5> 
            </a></li>
            <li><a className='flex space-x-3'>
              <span className=' mt-1'><FaPhone/></span> 
              <h5>+2347035694370</h5> 
            </a></li>
            <li><a className='flex space-x-3'>
              <span className=' mt-1'><FaWhatsapp/></span> 
              <h5>+2349032615970</h5> 
            </a></li>

          </ul>
        </div>
        <div>
        </div>

      </div>

    </div>
  )
}

export default Footer
