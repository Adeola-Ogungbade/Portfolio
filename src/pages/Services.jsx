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
      backgroundColor: '#FAFAFA',
    },
    {
      image: circes,
      title: 'React Framework',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#002B6A',
      color: 'white',
    },
    {
      image: circleIcon,
      title: 'Next Framework',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#FAFAFA',
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
      <h5 className='pt-3 text-center sm:text-center lg:text-[18px]'> My frontend services leverage Angular, React, and Next.js to enhance your digital presence. Whether you need robust web applications with Angular, interactive user experiences with React, or optimized performance with Next.js, I am equipped to meet your frontend development needs effectively</h5>

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
      <div className='w-full lg:flex hidden pt-12 sm:pt-28 gap-10 h-full'>
        {cards.map((card, index) => (
          <div key={index} className={`w-full  `}>
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
