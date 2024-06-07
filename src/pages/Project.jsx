import React from 'react';
import Buttons from '../components/Buttons';
import female from '../assets/female.png';
import './Styles.css';
import callme from '../assets/callme.jpg';
import calling from '../assets/calling.jpg';
import { FaPhone } from 'react-icons/fa6';

const Project = () => {
  return (
    <div className='bg-[#002B6A]  lg:flex    text-white align-middle justify-center items-center lg:pr-[100px] '>
         <div className=' w-full lg:h-[80vh] h-[40vh]  projectBg'>
          </div>
    <div className=' space-y-6 mt-6  p-10 lg:px-0 w-full md:py-10 md:px-26  lg:w-[40%]'>
        <span className='font-bold md:mtext-[55px] text-3xl text-white flex space-x-4' >
          <FaPhone className='animate-shake' />
          <h3> Got A Project! Let’s Talk</h3>
        </span>  
              <h5> I have over 5 years professional experience working across different sectors which includes, the financial sector, oil and gas, and Agricultural sectors </h5>
        <Buttons
          style={{width: '20em'}}
              text={'Contact Me'}
              />
      </div>

    </div>
  )
}

export default Project
