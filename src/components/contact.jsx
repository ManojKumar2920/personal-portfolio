import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaLinkedin } from "react-icons/fa";
import ContactImg from '../assets/contact.png'


const Contact = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            interval: 200,
        });

        sr.reveal('.contactHeader', {});

        return () => {
            sr.destroy();
        };
    }, []);

    useEffect(() => {
        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,s
        });

        srLeft.reveal('.contactbox', { });

        return () => {
            srLeft.destroy();
        };
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        // Check if all required fields are filled
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            // Show a popup or alert indicating that required fields are empty
            alert('Please fill in all the required details.');
            return;
        }

        // Construct the mailto URL
        const mailtoUrl = `mailto:manojkumararumainathan@gmai.com?subject=${encodeURIComponent(
            'New Contact Form Submission'
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

        // Open the user's default email client
        window.location.href = mailtoUrl;

        // Reset form fields after redirecting
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id="conatct">
            <div className="contactHeader">
                <h2>Get in touch!</h2>
            </div>
            <div className="contactbox">
                <div className="col1">
                    <img src={ContactImg} width='200px' alt="contact" />
                    <h2>Connect with me</h2>
                    <p>manojkumararumainathan@gmail.com</p>
                    <p>+91 95970 28220</p>
                    <a href="https://linkedin.com/in/manojkumar20"><button>LinkedIn <FaLinkedin/></button></a>
                </div>
                <div className="col">
                    <div className="form-control">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-inputs">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleNameChange}
                                    onBlur={() => handleBlur('Name')}
                                />
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={() => handleBlur('Email')}
                                />
                            </div>
                            <div className="text-area">
                                <textarea
                                    placeholder="Message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    onBlur={() => handleBlur('Message')}
                                ></textarea>
                            </div>
                            <div className="form-button">
                                <button type="button" className="btn" onClick={handleSubmit}>
                                    Send <i className="uil uil-message"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;