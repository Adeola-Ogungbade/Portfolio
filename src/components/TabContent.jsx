import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const TabContent = ({title, text, image, link}) => {
  return (
    <div className='md:space-y-10 space-y-6 '>
          <div className='w-30 h-30 shadow-xl rounded-xl overflow-hidden'>
        <img
          style={{objectFit: 'cover'}}
              className='w-full lg:h-[48vh] h-[30vh]  transition-transform duration-500 transform hover:scale-125' 
              src={image} 
              alt='image' 
            />
          </div>
          <div className='flex justify-between '>
               <div className='w-[70%] text-start'>
               <h1 className='font-bold text-[16px]'> {title}</h1>
                <h5>{ text}</h5>
              </div>
              <div>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                      <button className='bg-blue-800 flex justify-center  items-center w-8 h-8 rounded-[50%] text-white text-[15px] lg:w-10 lg:h-10'>
                        <FaArrowRight/>
                      </button>
                  </a>
              </div>
          </div>
          
    </div>
  )
}

export default TabContent
