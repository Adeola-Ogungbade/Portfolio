import React from 'react'

const Card = ({image, title, text, style}) => {
  return (
    <div style={style} className='  rounded-2xl shadow-md w-full flex-col flex gap-5  text-center items-center sm:p-20 px-3 py-20 h-full xl:p-16 md:p-6  xl:h-full hover:bg-blue-200' >
          <img className='sm:w-16 sm:pb-10 w-10 pb-3  lg:pb-10 xl:pb-10 h-18' alt='image' src={image} />
          <h1 className='font-bold text-[18px]'>{title} </h1>
          <h5 className='pt-2 lg:text-sm xl:text-base text-base'>{text}</h5>
    </div>
  )
}

export default Card
