import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

const About=()=>{

    useEffect(() => {
        const sr = ScrollReveal({
          interval: 200,
        });
    
        sr.reveal('.aboutHeader', {});

        return () => {
          sr.destroy();
        };
      }, []);

      useEffect(() => {
        const srLeft = ScrollReveal({
          origin: 'left',
          distance: '80px',
          duration: 2000,
        });
    
        srLeft.reveal('.col1', { delay: 100 });
        srLeft.reveal('.col2', { delay: 100 });

        return () => {
          srLeft.destroy();
        };
      }, []);

      

    return(
        <div id='about'>
            <div className="aboutHeader">
                <h2>About Me</h2>
            </div>
            <div className="box">
                <div className="col1">
                    <h2>Who am I?</h2>
                    <p>I'm a passionate Developer, Data Enthusiast With a fervor for turning concepts into code, I bring expertise in web development, front-end design, and a knack for extracting insights from data. As the Google DSC Community Lead,  I'm on a mission to connect people who love technology and want to learn and grow together. I'm all about making technology accessible and fun. </p>
                </div>
                <div className="col2">
                    <div className="skillset">
                        <h3>Data</h3>
                        <div className="skillcol">
                            <span>Python</span>
                            <span>Streamlit</span>
                            <span>Flask</span>
                            <span>Scikit Learn</span>
                            <span>Data Analysis</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                    <div className="skillset">
                        <h3>Web</h3>
                        <div className="skillcol">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React & Vite</span>
                            <span>TailwindCSS</span>
                        </div>
                    </div>
                    <div className="skillset">
                        <h3>Other</h3>
                        <div className="skillcol">
                            <span>Git & Github</span>
                            <span>GCloud</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
