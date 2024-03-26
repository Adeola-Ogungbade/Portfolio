import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='pt-20 lg:px-[100px] px-10 lg:flex lg:space-x-10'>
     <div className='first-column  flex space-x-16 items-center text-center justify-center align-middle'>
          <div>
             <img className='  w-52' src={logo} alt="logo" />
        </div> 
        <div className=' space-y-6' >
          <h1 className='text-xl font-bold'> Navigation</h1>
          <ul className=' list-none space-y-3 text-lg'>
            <li> <a> Home</a></li>
            <li> <a> About</a></li>
            <li> <a> Portfolio</a></li>
            <li> <a> Services</a></li>
          </ul>
        </div>
        <div>

        </div>

      </div>
    </div>
  )
}

export default Footer
