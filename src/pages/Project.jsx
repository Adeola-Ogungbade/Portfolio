import React from 'react';
import Buttons from '../components/Buttons';
import female from '../assets/female.png';
import './Styles.css';
import callme from '../assets/callme.jpg';
import sitting from '../assets/sitting.jpeg';
import calling from '../assets/calling.jpg';

const Project = () => {
  return (
    <div className='bg-[#002B6A]  md:flex    text-white align-middle justify-center items-center md:pr-[100px] '>
         <div className=' w-full md:h-[80vh] h-[40vh]  projectBg'>
        {/* <div className='  '>
          <img
          className=' rounded-md  md:h-[40vh] h-[30vh]'
          src={calling}
          alt='callme'
        />
        </div> */}
          </div>
    <div className=' space-y-6 mt-6  p-10 md:px-0 w-full  md:w-[40%]'>
              <h1 className='font-bold md:mtext-[55px] text-3xl text-white'> Got A Project! Let’s Talk</h1>  
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
