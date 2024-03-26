import React from 'react';
import adeolaImage from '../assets/adeolaImage.png';
import './Styles.css';
import plus from '../assets/plus.png';
import Buttons from '../components/Buttons'
import { FaArrowLeft } from 'react-icons/fa';

const About = () => {
  return (
    <div className=' bg1 px-10 sm:px-[100px]  bg text-center py-12'>
      <h1 className='text-[#002B6A] font-[900]'> ABOUT ME</h1>
      <div className='md:flex  pt-6 sm:pt-3'>
        <img
          className='w-full'
        src={adeolaImage}
        alt='image'
        />
        <div className='flex-col flex sm:gap-9 gap-5 pt-10'>
          <h1 className='font-bold text-[25px] sm:text-[30px]'>Developing Solutions, Not Just Visuals!</h1>
          <h5 className='text-start'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            printer took a galley of type and scrambled it to make a type specimen book. </h5>
          <div className='bg-[#FDEDDD] rounded-xl flex p-5 sm:p-10 sm:gap-8 gap-4 text-start'>
            <img className='sm:w-7 sm:h-7 h-5 w-5 ' src={plus} alt='icon' />
            <div className='sm:space-y-4 text-sm space-y-1'>
              <h3 className='font-bold text-sm  sm:text-[20px]'> 20 Complete Projects</h3>
              <h5> Lorem Ipsum is simply dummy text of the printing and typesetting i printer took a galley of type and scrambled it to make a book. </h5>
            </div>
          </div>
          <div className='bg-[#CDE2F9] rounded-xl flex p-5 sm:p-10 sm:gap-8 gap-4 text-start'>
            <img className='sm:w-7 sm:h-7 w-5 h-5' src={plus} alt='icon' />
            <div className='sm:space-y-4 space-y-1 text-sm sm:text-base'>
              <h3 className='font-bold text-base sm:text-[20px]'> 2+ Years of Experience </h3> 
              <h5> Lorem Ipsum is simply dummy text of the printing and typesetting i printer took a galley of type and scrambled it to make a book. </h5>
            </div>
          </div>

          <Buttons
            text={'Download CV'}
            style={{width: '100%'}}
          />

        </div>
      </div>
    </div>
  )
}

export default About
