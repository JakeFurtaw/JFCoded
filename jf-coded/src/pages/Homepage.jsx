import {React, useState, useEffect, Fragment} from 'react';
import JFCoded from '../images/JFCoded.jpg';
import resumeFile from '../files/Jacob_Furtaw_Resume.pdf';
import '../stylesheets/Homepage.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';


const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const [typedText, setTypedText] = useState('');
    const fullText = "Welcome! I'm Jake, and this website serves as a comprehensive showcase of my professional journey, skills, and projects. Whether you're a potential employer, investor, or collaborator, you'll find a detailed portfolio that highlights what I bring to the table. Explore my resume, discover my latest projects, and get to know how my expertise can benefit your endeavors..";

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
        <>
            <div className="home-container">
                <Navbar />
                <h1>Welcome to JFCoded</h1>
                <img src={JFCoded} style={{ width: 300, height: 300}} alt="jfcoded pic" />
                <p style={{ padding: 30, fontSize: 'large', textEmphasis: 'bold' }}>{typedText}</p>
                <a className="button" href={resumeFile} download>Download My Resume</a>
                <SocialLinks animationType="fly-in-pulse" />
            </div>
        </>
    );
}

export default Homepage;