import React from 'react';
import '../stylesheets/Education.css';
import TowsonIMG from '../images/tu logo.png';
import HCCIMG from '../images/hcc.jpg';

const Education = () => {
    return (
        <div className='education-container'>
            <h3>Education</h3>
            <div className='education-sections'>
                <div id='tu' className='education'>
                    <h3>Towson University</h3>
                    <img style={{width: 70, height: 90}} src={TowsonIMG} alt="" />
                    <p>Graduated: December 2023</p>
                    <p>Bachelors of Science in Computer Science</p>
                </div>

                <div id='hcc' className='education'>
                    <h3>Howard Community College</h3>
                    <img style={{width: 70, height: 90}} src={HCCIMG} alt="" />
                    <p>Graduated: December 2021</p>
                    <p>Assocaites of Science in Computer Science</p>
                </div>
            </div>

        </div>
    );
};

export default Education;
