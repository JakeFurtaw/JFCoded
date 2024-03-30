import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import '../stylesheets/Employer.css';
import Education from '../components/Education';
import Projects from '../components/Projects';
import {useState, useEffect} from 'react';
import resumeFile from '../files/Jacob_Furtaw_Resume.pdf';

function Employer() {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Hello, my name\'s Jacob Furtaw, I am a Towson University graduate. I earned myself a Bachelors of Science in Computer Science with a Focus on Software Engineering. I am currently looking for a Software Engineering job. My main intrests are Machine Learning, Data Science, and Prompt Engineering. I have an unmatched work ethic, insane ability to learn new skills quickly, and I love to code. Get me on the phone and lets talk about how I can help your company today!!';
    useEffect(() => {
    let i = 0;
    const typeWriterInterval = setInterval(() => {
    setTypedText(fullText.substring(0, i++));
    if (i === fullText.length) {
    clearInterval(typeWriterInterval);
    }
    }, 20); // Adjust delay for typing speed
    }, []);
    return (
        <Fragment>
            <div>
                <h1>Welcome Employers</h1>
                <div className='intro'>
                    <h2>About Me</h2>
                    <p style={{padding: 30, fontSize: 'large', textEmphasis: 'bold'}}>{typedText}</p>
                </div>
                <div className='resume'>
                    <h2>My Resume</h2>
                    <a style={{textAlign: 'center', textDecoration: 'underline'}} href={resumeFile} download>Click Here to Download My Resume</a>
                    <Education/>
                    <Projects/>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}
export default Employer;
