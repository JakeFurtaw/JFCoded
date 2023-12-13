import React from 'react';
import '../stylesheets/Education.css';

const Education = () => {
    return (
        <div className='education-container'>
            <h3>Education</h3>
            <div className='education-sections'>
                <div id='tu' className='education'>
                    <h4>Towson University</h4>
                    <p>Bachelors of Science in Computer Science <br/> Focus on Software Engineering</p>
                    <p>Graduated: December 2023</p>
                </div>

                <div id='hcc' className='education'>
                    <h4>Howard Community College</h4>
                    <p>Assocaites of Science in Computer Science</p>
                    <p>Graduated: December 2021</p>
                </div>
            </div>

        </div>
    );
};

export default Education;
