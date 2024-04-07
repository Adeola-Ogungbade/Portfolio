import React from 'react';
import ellipses from '../assets/ellipses.png'
import Buttons from '../components/Buttons';
import watch from '../assets/watch.png';
import ovals from '../assets/ovals.png';
import computerimage from '../assets/computerimage.png';
import './Styles.css';
import adeolaimage1 from '../assets/adeolaimage1.jpeg';
import armsfolded from '../assets/armsfolded.png';
import CountUp from 'react-countup';
import TypingAnimation from './AnimatedCharacters';
import { useState } from 'react';
import AnimatingDivs from '../components/AnimatingDivs';
import { motion } from 'framer-motion';
import newAdeolaImage from '../assets/newAdeolaImage.png';
import { HiOutline, HiOutlineArchive } from 'react-icons/hi';
import { FaRegHandPaper } from 'react-icons/fa';



const Home = () => {
    const [replay, setReplay] = useState(true);
      const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
    };
      const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };
  return (
      <div className='relative text-white flex px-[20px] py-2 sm:px-16 lg:py-1 lg:px-[80px] xl:px-[100px] pb-10 lg:pb-0 '>
          <>
            <img className='hidden lg:flex absolute left-12 ' src={ellipses} alt="ellipses" />
      </> 
          <div className=' lg:mt-20 md:mt-5 lg:flex relative'>
              <div className='flex items-center align-middle justify-center lg:hidden  sm:px-32'>
                  <img className='rounded-[50%] md:w-[25em] md:h-[25em]' src={adeolaimage1} alt='image' />
                  <button className=' right-5 top-64 bg-white absolute rounded-lg flex px-5 py-2 gap-4 text-black'>
                      <div className=' text-[35px] font-extrabold'>     <CountUp start={0} end={2} duration={15} decimals={0} />+</div>
                      <div className='text-start'>
                         
                          <h1 className='font-bold text-black'> Years</h1>
                          <h1 className='text-[#797979]'> Experience</h1>
                      </div>
                  </button>
              </div>
        <div className='  w-full h-[70vh] lg:w-1/2 flex-col flex gap-4 sm:pb-0 pb-10'>
                <div className='lg:text-[40px] 2xl:text-[50px] text-[27px] sm:text-[48px] font-extrabold flex space-x-2'>
                  <h1>"Hello</h1>
                  <span className='waving mt-1'> <FaRegHandPaper  /> </span>
                </div>
                  <h1 className='lg:text-[40px] 2xl:text-[50px] text-[27px] sm:text-[48px] font-extrabold '> I’m Adeola Ogungbade, A Front-End <TypingAnimation text='Software Engineer "' />|</h1>  
                  <h5 className='font-bold text-[14px] sm:text-[17px] lg:text-base'>I specialize in utilizing Angular, React, and Next.js to develop innovative digital solutions. With two years of practical experience, I am dedicated to creating elegant solutions that deliver tangible results. I am excited about the prospect of collaborating with you to create something exceptional. Let us embark on this journey together.</h5>
                  <div className='sm:flex sm:flex-row flex-col space-y-5 sm:space-y-0 w-full gap-5 mt-6 lg:mt-10 sm:mt-14 mb-24'>
                      <Buttons
                          text={'Get Started'}
                          style={{width:'100%'}}
                      />
                      <Buttons
                          text={'Watch Intro'}
                          image={watch}
                          style={{ backgroundColor: 'inherit', display: 'flex', gap: '10px', textAlign: 'center', width:'100%', alignItems: 'center', justifyContent: 'center'}}
                      />
                  </div>
              </div>
              <div className='relative lg:flex hidden lg:visible'>
                  <img className='w-full h-full' src={ovals} alt='ovals' />
                  <img className='absolute right-9 bottom-0  w-[60%] h-[80vh]' src={armsfolded} alt='image' />
                  <img className='hidden lg:flex absolute right-[-40px]  top-64 t' src={ellipses} alt="ellipses" />
                  <button className=' right-10  top-64 bg-white absolute rounded-lg flex px-4 p-3 gap-4'>
                      <h1 className='text-[#002855] text-[35px] font-extrabold'> 2+</h1>
                      <div className='text-start'>
                          <h1 className='font-bold text-black'> Years</h1>
                          <h1 className='text-[#797979]'> Experience</h1>
                      </div>
                  </button>
              </div>
         </div>
    </div>
  )
}

export default Home
