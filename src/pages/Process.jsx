import React from 'react'
import Card from '../components/Card';
import bulb from '../assets/bulb.png';
import blueIcon from '../assets/blueIcon.png';
import newIcon from '../assets/newIcon.png';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Process = () => {
     const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      image: bulb,
      title: 'Business Planning',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#EEF0F1',
    },
    {
      image: newIcon,
      title: 'Business Planning',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#002B6A',
      color: 'white',
    },
    {
      image: blueIcon,
      title: 'Business Planning',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#EEF0F1',
    },
  ];

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className='text-center space-y-10 pt-16 px-10 lg:px-[100px] pb-20'>
          <>
              <h5 className='font-[800] text-[#002B6A]'> PROCESS </h5>
          </>
          <>
              <h1 className='sm:text-[30px] text-[20px] font-bold'> My Working Process</h1>
          </>
         <div className='md:hidden relative overflow-hidden pt-12 sm:pt-28'>
        <div className="flex transition-transform duration-500">
          {cards.map((card, index) => (
            <div key={index} className={`w-full ${index === currentCardIndex ? '' : 'hidden'}`}>
              <Card
                style={card.backgroundColor ? { backgroundColor: card.backgroundColor, color: card.color || 'initial' } : null}
                image={card.image}
                title={card.title}
                text={card.text}
              />
            </div>
          ))}
        </div>
        <div className=" absolute bottom-1/2 left-0 transform -translate-y-1/2">
          <button className='bg-white p-2 rounded-full shadow-md' onClick={prevCard}>
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute bottom-1/2 right-0 transform -translate-y-1/2">
          <button className='p-2 rounded-full shadow-md' onClick={nextCard}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className='w-full lg:flex hidden md:grid md:grid-cols-2 pt-12 sm:pt-28 gap-10'>
        {cards.map((card, index) => (
          <div key={index} className={`w-full `}>
            <Card
              style={card.backgroundColor? { backgroundColor: card.backgroundColor, color: card.color || 'initial' } : null}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          </div>
        ))}
      </div>
          
    </div>
  )
}

export default Process
