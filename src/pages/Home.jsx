import React from 'react';
import ellipses from '../assets/ellipses.png'
import Buttons from '../components/Buttons';
import ovals from '../assets/ovals.png';
import './Styles.css';
import adeolaimage1 from '../assets/adeolaimage1.jpeg';
import armsfolded from '../assets/armsfolded.png';
import CountUp from 'react-countup';
import TypingAnimation from './AnimatedCharacters';
import { useState } from 'react';
import { FaGithub, FaRegHandPaper } from 'react-icons/fa';
import {  FaPaperPlane } from 'react-icons/fa6';



const Home = () => {

    // const [replay, setReplay] = useState(true);
  //     const container = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.025
  //     }
  //   }
  //   };
  //     const handleReplay = () => {
  //   setReplay(!replay);
  //   setTimeout(() => {
  //     setReplay(true);
  //   }, 600);
  // };
  return (
      <div className='relative pt-12 min-h-[100vh]  h-full w-full justify-center align-middle xl:pt-24    text-white flex px-[20px]  sm:px-10  lg:px-[50px] xl:px-[100px] '>
           <>
              <img className='hidden xl:flex absolute left-12 ' src={ellipses} alt="ellipses" />
          </> 
          <div className=' lg:mt-20 md:mt-5 lg:flex relative s'>
               <div className='flex items-center align-middle justify-center lg:hidden  sm:px-32'>
                  <img className='rounded-[50%] md:w-[30em] md:h-[31em]' src={adeolaimage1} alt='pic' />
                  <button className=' right-5 top-64 bg-white absolute rounded-lg flex px-5 py-2 gap-4 text-black'>
                      <div className=' text-[35px] font-extrabold'>     <CountUp start={0} end={2} duration={15} decimals={0} />+</div>
                      <div className='text-start'>
                         
                          <h1 className='font-bold text-black'> Years</h1>
                          <h1 className='text-[#797979]'> Experience</h1>
                      </div>
                  </button>
        </div> 
        <div className='lg:w-[50%] w-full h-full lg:min-h-[85vh] pb-12   flex-col flex gap-4  lg:pb-[15vh]'>
                <div className='lg:text-[40px] 2xl:text-[50px] text-[27px] sm:text-[48px] font-extrabold flex space-x-2'>
                  <h1>"Hello</h1>
                  <span className='waving mt-1'> <FaRegHandPaper  /> </span>
                </div>
                  <h1 className='lg:text-[38px] 2xl:text-[50px] text-[29px] sm:text-[45px] font-extrabold '> I am Adeola Ogungbade, <br/> A Frontend  <TypingAnimation text='Software Engineer "' /></h1>  
                  <h5 className='font-bold text-[14px] sm:text-[17px] lg:text-base'>I specialize in utilizing Angular, React, and Next.js to develop innovative digital solutions. With two years of practical experience, I am dedicated to creating elegant solutions that deliver tangible results. I am excited about the prospect of collaborating with you to create something exceptional. Let us embark on this journey together.</h5>
                  <div className='sm:flex sm:flex-row  space-y-2 sm:space-y-0 w-full gap-5 mt-6 md:mb-12 xl:mb-0 sm:mb-12 flex flex-col   '>
                     <a href= "https://github.com/Adeola-Ogungbade" target='_blank' rel='noopener noreferrer'>
                      <Buttons
                          text={<div className='flex space-x-4 text-center m-auto '> <FaGithub className='mt-1'/> <h1> Github</h1></div>}
                          style={{ display: 'flex', gap: '10px', textAlign: 'center', width:'100%', alignItems: 'center', justifyContent: 'center'}}
                      />
                     </a>
                      <a href='mailto:adeoladeborah19@gmail.com'> 
                        <Buttons
                          text={<div className='flex space-x-4 text-center m-auto '> <FaPaperPlane className='mt-1 text-[#FEB12F]'/> <h1> Let's Talk</h1></div>}
                          style={{ backgroundColor: 'inherit', display: 'flex', gap: '10px', textAlign: 'center', width:'100%', alignItems: 'center', justifyContent: 'center'}}
                      />
                      </a>
                  </div>
        </div>
        
               <div className='relative w-[50%]  lg:flex hidden lg:visible'>
                  <img className='w-full h-full' src={ovals} alt='ovals' />
          <img className='absolute right-9 bottom-0  w-[60%] h-full md:w-[72%] lg:w-[100%] xl:w-[100%%]' style={{ objectFit: 'contain'}} src={armsfolded} alt='pic' />
                  <img className='hidden xl:flex absolute right-[-40px]  top-64 t' src={ellipses} alt="ellipses" />
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
