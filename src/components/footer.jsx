import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    return (
        <footer>
            <div className="top-footer">
                <p>Manoj Kumar</p>
            </div>
            <div className="middle-footer">
                <ul className="footer-menu">
                    <li className="footer_menu_list">
                        <a href="/">Home</a>
                    </li>
                    <li className="footer_menu_list">
                        <a href="#about">About</a>
                    </li>
                    <li className="footer_menu_list">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="footer_menu_list">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="footer-social-icons">
                <div className="icon"><a href=""><FaInstagram/></a></div>
                <div className="icon"><a href="https://www.linkedin.com/in/manojkumar20/"><FaLinkedinIn/></a></div>
                <div className="icon"><a href="https://github.com/ManojKumar2920"><FaGithub/></a></div>
            </div>
            <div className="bottom-footer">
                <p>Copyright © <a href="/" style={{ textDecoration: 'none', color:'#3490dc' }}>Manoj Kumar</a> - All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;