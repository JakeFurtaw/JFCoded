import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import '../stylesheets/AboutMe.css';
import Education from '../components/Education';
import Projects from '../components/Projects';
import {useState, useEffect} from 'react';

function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [typedText, setTypedText] = useState('');
    const fullText = 'Hello, my name\'s Jacob Furtaw, I am a Towson University graduate. I earned myself a Bachelor of Science in Computer Science with a Focus on Software Engineering. I am currently looking for a Software Engineering job. My main interests are Machine Learning, Data Science, and Prompt Engineering. I have an unmatched work ethic and, an insane ability to learn new skills quickly, and I love to code. Get me on the phone and let\'s talk about how I can help your company today!!';
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
                <div className='intro'>
                    <h2 style={{textDecoration: 'none' }}>About Me</h2>
                    <p style={{padding: 30, fontSize: 'large', textEmphasis: 'bold'}}>{typedText}</p>
                </div>
                <div className='resume'>
                    <h1>My Resume</h1>
                    <Education/>
                    <Projects/>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}
export default AboutMe;
