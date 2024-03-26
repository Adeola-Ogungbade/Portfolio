import React from 'react'

const Card = ({image, title, text, style}) => {
  return (
    <div style={style} className='  rounded-2xl shadow-xl w-full flex-col flex gap-5 text-center items-center sm:p-20 p-12 h-full' >
          <img className='sm:w-16 sm:pb-10 w-10 pb-3  ' src={image} />
          <h1 className='font-bold text-[18px]'>{title} </h1>
          <h5 className='pt-2'>{text}</h5>
    </div>
  )
}

export default Card
