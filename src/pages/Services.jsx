import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from '../components/Card';
import pen from '../assets/pen.png';
import circleIcon from '../assets/circleIcon.png';
import circes from '../assets/circes.png';

const Services = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      image: pen,
      title: 'Angular Framework',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#F8F8F8',
    },
    {
      image: circes,
      title: 'Angular Framework',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#002B6A',
      color: 'white',
    },
    {
      image: circleIcon,
      title: 'Angular Framework',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#F8F8F8',
    },
  ];

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='lg:px-[100px] px-10 py-10 pb-28'>
      <h1 className='align-middle text-center font-extrabold text-[#002B6A]'> SERVICES </h1>
      <h1 className='pt-1 font-bold text-[20px] lg:text-[35px] text-center'>Expertise Service! Let’s check it out </h1>
      <h5 className='pt-3 text-start sm:text-center'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a type specimen book.</h5>

      <div className='lg:hidden relative overflow-hidden pt-12 sm:pt-28'>
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
          <button className='bg-white p-2 rounded-full shadow-md' onClick={nextCard}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className='w-full lg:flex hidden pt-12 sm:pt-28 gap-10'>
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
  );
};

export default Services;
