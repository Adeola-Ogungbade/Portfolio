import React from 'react';

const button = ({text, onClick, style, image}) => {
  return (
    <div className='flex font-bold  w-full lg:w-[14em]'>
      <button
        style={style}
        onClick={onClick}
        className=' text-lg border border-[#FEB12F] px-4 lg:px-8 btn bg-[#FEB12F] rounded-[25px] h-12 lg:h-12 text-white '>
        { image? <img className='w-5 h-5' src={image} alt='icon' />  : ''}
        <h1>{text}</h1>
      </button>
    </div>
  )
}

export default button
