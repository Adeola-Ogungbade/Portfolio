import React from 'react';
import Buttons from '../components/Buttons';
import female from '../assets/female.png';
import './Styles.css';
import callme from '../assets/callme.jpg';
import sitting from '../assets/sitting.jpeg'

const Project = () => {
  return (
    <div className='bg-[#002B6A] md:flex px-10 md:px-[100px] py-[100px]  text-white align-middle justify-center items-center gap-10'>
    <div className=' space-y-6 '>
              <h1 className='font-bold md:mtext-[55px] text-3xl text-white'> Got A Project! Let’s Talk</h1>  
              <h5> I have over 5 years professional experience working across different sectors which includes, the financial sector, oil and gas, and Agricultural sectors </h5>
        <Buttons
          style={{width: '20em'}}
              text={'Contact Me'}
              />
      </div>
      <div className='md:w-[55%] w-full relative px-2 py-10 '>
        <div className='ml-10 md:h-[55vh] h-[43vh]  border-white border-4  rounded-3xl'>
          <img
          className='absolute md:w-[30vw] w-[85%] rounded-3xl left-0 bottom-5 md:h-[50vh] h-[40vh]'
          src={sitting}
          alt='callme'
        />
        </div>
      
          </div>
    </div>
  )
}

export default Project
