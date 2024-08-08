import React from 'react';
import "../stylesheets/ContactMe.css";
import Navbar from '../components/Navbar';

const ContactMe = () => {
    return (
        <div className="contact-container">
            <Navbar />
            <h1>Contact Me</h1>
            <h2>Socials</h2>
            <div className="social-links">
                        <a href="https://www.linkedin.com/in/jacob-furtaw/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.github.com/JakeFurtaw" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://gitlab.com/JakeFurtaw" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-gitlab"></i>
                        </a>
                        <a href="mailto:jfurtaw97@gmail.com" className="social-icon">
                            <i className="fas fa-envelope"></i>
                        </a>
            </div>

        </div>
    );
};

export default ContactMe;