import React, { useEffect, useState } from 'react';
import "../stylesheets/ContactMe.css";
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';



const ContactMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const [typedText, setTypedText] = useState('');
    const fullText = "Get in contact with me through LinkedIn or Email using the icons below. Check out my Github and Gitlab using the icons below to see some of my recent projects. I'm always open to new opportunities and collaborations. I look forward to hearing from you!!";

    useEffect(() => {
    let i = 0;
    const typeWriterInterval = setInterval(() => {
    setTypedText(fullText.substring(0, i++));
    if (i === fullText.length) {
    clearInterval(typeWriterInterval);
    }
    }, 30); // Adjust delay for typing speed
    }, []);
    return (
        <div className="contact-container">
            <Navbar />
            <h1>Contact Me</h1>
            <p style={{ padding: 30, fontSize: 'large', textEmphasis: 'bold' }}>{typedText}</p>
            <div className='wrapper'>
                <h2>Professional Socials</h2>
                <SocialLinks animationType="pulse" />
            </div>

        </div>
    );
};

export default ContactMe;