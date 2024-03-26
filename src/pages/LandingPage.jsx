import React from 'react'
import Home from './Home';
import Nav from '../components/Nav';
import Services from './Services';
import About from './About';
import './Styles.css';
import Process from './Process';
import Portfolio from './Portfolio';
import Project from './Project';
import Footer from './Footer';

const LandingPage = () => {

    const scrollToSection = (id) => {
        const element = id;
        if (element) {
            element.scrollIntoView({behaviour: "smooth"})
        }
    }

  return (
    <div >
      <div className='homeBg'>
        <Nav/>
      <Home />
      </div>
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Project />
      <Footer/>
    </div>
  )
}

export default LandingPage
