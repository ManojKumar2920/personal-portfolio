import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import CodersCave from '../assets/coderscave-project.png';
import GDSCIIE from '../assets/gdsc-project.png';
import Jarvis from '../assets/jarvis-project.png';
import NotesMaker from '../assets/notesmaker-project.png';
import PredictionModel from '../assets/predictionmodel-project.png';
import CaseStudy from '../assets/casestudy.png'
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Portfolio = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            interval: 200,
        });

        sr.reveal('.portfolioHeader', {});

        return () => {
            sr.destroy();
        };
    }, []);

    useEffect(() => {
        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
        });

        srRight.reveal('.portItem', { delay: 100 });
        srRight.reveal('.btn', { delay: 100 });

        return () => {
            srRight.destroy();
        };
    }, []);


    return (
        <div id="portfolio">
            <div class="portfolioHeader">
                <h2>Portfolio</h2>
            </div>
            <div class="portContainer">
                <div class="portItem">
                    <img src={CodersCave} alt="Project- CodersCave" />
                    <div class="portInfo">
                        <h3>Developed for CodersCave</h3>
                        <p>A platform for passionate developers to gain industry exp!</p>
                    </div>
                    <a href='https://www.coderscave.in'><button>Visit <FaHeartCircleCheck /></button></a>
                </div>
                <div class="portItem">
                    <img src={GDSCIIE} alt="Project- GDSC IIE" />
                    <div class="portInfo">
                        <h3>Developed for GDSC IIE</h3>
                        <p>Google Community. Where you can learn, connect, grow!</p>
                    </div>
                    <a href='http://gdsc.infoengg.com'><button>Visit <FaHeartCircleCheck /></button></a>
                </div>
                <div class="portItem">
                    <img src={Jarvis} alt="Project- Jarvis" />
                    <div class="portInfo">
                        <h3>Project Jarvis</h3>
                        <p>Virtual Assistant to perform limited computational operations!</p>
                    </div>
                    <a href='https://github.com/ManojKumar2920/Jarvis'><button>Contribute <FaGithub /></button></a>
                </div>
                <div class="portItem">
                    <img src={NotesMaker} alt="Project- notesmaker" />
                    <div class="portInfo">
                        <h3>Auto NotesMaker</h3>
                        <p>Automated notes maker from Audio Recordings</p>
                    </div>
                    <a href='https://notesmaker-ai.streamlit.app/'><button>Visit <FaHeartCircleCheck /></button></a>
                </div>
                <div class="portItem">
                    <img src={PredictionModel} alt="Project- Jarvis" />
                    <div class="portInfo">
                        <h3>Laptop Price Prediction Model</h3>
                        <p>The prediction model to predict lap prices!</p>
                    </div>
                    <a href='https://github.com/ManojKumar2920/Flipkart-laptop-prediction'><button>Visit <FaHeartCircleCheck /></button></a>
                </div>
                <div class="portItem">
                    <img src={CaseStudy} alt="case study" />
                    <div class="portInfo">
                        <h3>Case Study on Dominos</h3>
                        <p>Business Insights!</p>
                    </div>
                    <a href='https://github.com/ManojKumar2920/Innomatics-Research-Labs-Data-Science-Intern-2023/blob/main/Data%20Analysis%20Project/Dominos%20Case%20Study.ipynb'><button>Contribute <FaGithub /></button></a>
                </div>
                <a className="btn" href='https://github.com/ManojKumar2920'><button>Check More <FaGithub /></button></a>
            </div>
        </div>

    );
}

export default Portfolio;