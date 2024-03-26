import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const TabContent = ({title, text, image, link}) => {
  return (
    <div className='md:space-y-10 space-y-6'>
          <img className='w-30 h-30 shadow-xl rounded-xl' src={image} alt='image' />
          <div className='flex justify-between '>
               <div className='w-[70%] text-start'>
               <h1 className='font-bold text-[16px]'> {title}</h1>
                <h5>{ text}</h5>
              </div>
              <div>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                      <button className='bg-blue-800 flex justify-center  items-center w-12 h-12 rounded-[50%] text-white text-[25px] '>
                        <FaArrowRight/>
                      </button>
                  </a>
              </div>
          </div>
          
    </div>
  )
}

export default TabContent
