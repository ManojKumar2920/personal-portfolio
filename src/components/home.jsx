import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import manoImage from '../assets/mano.png'
import cv from '../assets/cv.pdf'

const Home=()=>{
    useEffect(() => {
        // Initialize Typed.js for typing effect
        const typingEffect = new Typed('#typedText', {
          strings: ['Developer', 'Data enthusiast', 'Community Lead'],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 2000,
        });
    
        // Destroy Typed instance on component unmount to avoid memory leaks
        return () => {
          typingEffect.destroy();
        };
      }, []);
    
      useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
        });
    
        // Specific reveal configurations
        sr.reveal('.card', {});
        sr.reveal('.whoam', { delay: 100 });
        sr.reveal('.info', { delay: 200 });
        sr.reveal('.homebtns', { delay: 200 });
        sr.reveal('.image', { delay: 300 });
    
        // Clean up ScrollReveal instance on component unmount
        return () => {
          sr.destroy();
        };
      }, []);

      return(
        <div className="home">
        <div className="homeContainer">
          <div className="text">
            <div className="card">
              <span>Manoj Kumar</span>
            </div>
            <h2 className='whoam'>I'm <span id='typedText'></span></h2>
            <p className='info'>Passionate about creating seamless digital experiences. My expertise lies in building modern websites and extracting actionable insights from data to drive business growth.</p>
            <div className="homebtns">
              <a ><button>Learn More</button></a>
              <a href={cv} download={cv}><button>Download CV</button></a>
            </div>
          </div>
          <div className="image">
            <img src={manoImage} alt="" />
          </div>
        </div>
      </div>
      );

}

export default Home;