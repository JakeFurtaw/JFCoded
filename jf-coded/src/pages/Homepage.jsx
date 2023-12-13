import {Fragment, React, useState} from 'react';
import '../stylesheets/Homepage.css';
import JFCoded from '../images/JFCoded.jpg';
const Homepage = () => {
    return (
        <Fragment>
            <div className='homepage-container'>
                <h1>Welcome to JFCoded</h1>
                <img className='jfcoded-img' style={{width: 300, height: 300}} src={JFCoded} alt="Loading SVG" />
                <p>This website serves as a resume and project depot for any future employers and investors. Click the 
                    button that applies to you to get started.</p>
                <div >
                    <h1>Are you an...</h1>
                    <a href='./Employer.jsx' className='link-options'>Employeer</a>
                    <a className='link-options'>Investor</a>
                    <a className='link-options'>Just Curious</a>
                </div>
            </div>
        </Fragment>
    );
};

export default Homepage;
