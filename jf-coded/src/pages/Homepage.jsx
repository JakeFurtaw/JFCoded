import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <h1>Welcome to JFCoded</h1>
            <p>This website serves as a resume and project depot for any employers or investors.</p>
            <div>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Homepage;
