import React, { useState } from 'react'
import Tab from '../components/Tab'
import TabContent from '../components/TabContent';
import image3 from '../assets/image3.png';
import image2 from '../assets/image2.png';
import image1 from '../assets/image1.png';
import './Styles.css'

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [isActive, setIsActive] = useState(false)
    const handleTabClick = (tab) => { 
        setActiveTab(tab);
        setIsActive(!isActive);
    }
     const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      image: image1,
      title: 'Business Planning',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#F8F8F8',
    },
    {
      image: image2,
      title: 'Business Planning',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard",
      backgroundColor: '#002B6A',
      color: 'white',
    },
    {
      image: image3,
      title: 'Business Planning',
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
    <div className='px-10 md:px-[100px] pt-20 text-center space-y-8 pb-20 bg-[#F5F5F5]'>
          <>
              <h5 className='font-[800] text-[#002B6A]'>PORTFOLIO</h5>
          </>
          <>
              <h1 className='sm:text-[30px] text-[20px] font-bold'> Digital Product Showcases</h1>
          </>

          <div className='tab-container space-x-3  flex justify-center md:space-x-10'>
              <Tab
                  label={"All"}
                  onClick={() => handleTabClick('All')}
                  isActive={activeTab === 'All'}

              />
              <Tab
                  label={"Angular"}
                  onClick={() => handleTabClick('Angular')}
                  isActive={activeTab === 'Angular'}
              />
              <Tab
                  label={"React"}
                  onClick={() => handleTabClick('React')}
                  isActive={activeTab === 'React'}
              />
              <Tab
                  label={"Next"}
                  onClick={() => handleTabClick('Next')}
                  isActive={activeTab === 'Next'}
              />
              
          </div>
          <div className='pt-12'>
              {activeTab === 'All' && (
                  <div className='md:flex md:justify-between space-y-10 md:space-y-0 '>
                      <div className=''>
                           <TabContent 
                          image={image1}
                          title={'Admin Portal'}
                      text={'Admin Portal '} />
                      </div>
                      <div className=''>
                          
                       <TabContent
                          image={image3}
                          title={'Landing Page'}
                      text={'Furniture Company website '} />
                        </div>
                      <div className=''>
                          <TabContent
                          title={'Cosmetics Landing Page'}
                    image={image1}
                      text={'Cosmetics Landing page '} />
                      </div>

                  </div>
                  
                  

              )}
             
              {activeTab === 'Angular' && (
                  <div className='md:flex md:justify-between space-y-10 md:space-y-0'>
                       <TabContent
                      image={image3}
                  title={'react react'}
                      />
                       <TabContent
                      image={image3}
                  title={'react react'}
                      />
                       <TabContent
                      image={image3}
                  title={'react react'}
                      />
                      
                  </div>
                  

              )}
              {activeTab === 'React' && (
                  <div className='md:flex md:justify-between space-y-10 md:space-y-0'>
                       <TabContent
                      image={image3}
                  title={'Portfolio'}
                      />
                       <TabContent
                      image={image3}
                  title={'react react'}
                      />
                       <TabContent
                      image={image3}
                  title={'react react'}
                      />
                      
                  </div>
                  

              )}
              {activeTab === 'Next' && (
                  <div className='md:flex md:justify-between space-y-10 md:space-y-0'>
                      <TabContent
                      image={image1}
                          title={'SwiftFlow '}
                          text={'A banking website'}
                      />
                      <TabContent
                      image={image1}
                  title={'Next js'}
                      />
                      <TabContent
                      image={image1}
                  title={'Next js'}
                  />
                  </div>


              )}
          </div>


    </div>
  )
}

export default Portfolio
