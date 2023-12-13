import {Fragment, React, useState, useEffect} from 'react';
import '../stylesheets/Homepage.css';
import JFCoded from '../images/JFCoded.jpg';
import EmployerImg from '../images/employerImg.jpg';
import InvestorImg from '../images/investor.jpg';
import CuriousImg from '../images/curious.jpg';

// **---------------------------------------------------------**
// **----------------------Homepage Code----------------------**
// **---------------------------------------------------------**
const Homepage = () => {


    const [typedText, setTypedText] = useState('');
    const fullText = 'This website sereves as a Resume and Project Repository for future employers and investors to checkout and see what I bring to the table..';

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
        <Fragment>
            <div className='homepage-container'>
                <h1>Welcome to JFCoded!</h1>
                <img className='jfcoded-img' style={{width: 300, height: 300}} src={JFCoded} alt="Loading SVG" />
                <p style={{padding: 30, fontSize: 'large', textEmphasis: 'bold'}}>{typedText}</p>
                <div className='homepage-selector-section'>
                <h1 className='link-title'>Are you an...</h1>
                    <div className='homepage-link-section'>
                        <div className='link-cell'>
                            <a href='./Employer.jsx' className='link-options'>Employer</a>
                            <img style={{width: 204, height: 306}} src={EmployerImg} alt="" />
                        </div>
                        <div className='link-cell'>
                        <a className='link-options'>Investor</a>
                            <img style={{width: 204, height: 306}} src={InvestorImg} alt="" />
                        </div>
                        <div className='link-cell'>
                        <a className='link-options'>Just Curious</a>
                            <img style={{width: 204, height: 306}} src={CuriousImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Homepage;
