import React from 'react';
import '../stylesheets/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='project-container'>
            <h3>Projects</h3>
            <div className='projects'>

                <div className='project'>
                    <h3>Oceans</h3>
                    <Link style={{color:'#7da7f5'}} to='https://oceans-prod-v1.vercel.app/'>Link to Oceans</Link>
                    <h5>Project Description</h5>
                    <p>Description: Oceans was built in using the MERN stack. Over the course of a semester we built and deployed a full stack web application.
                        Oceans is a social media platform that allows users to limit their exposure to information to whatever they want to see, not what they're forced to see. Users can create an account, post content, and interact with other users.
                    </p>

                </div>

                <div className='project'>
                    <h3>Using an ASTNN to Equivalently Sort Mutants</h3>
                    <Link style={{color:'#7da7f5'}} to='https://gitlab.com/JakeFurtaw/ASTNN-COSC490'>Gitlab Link</Link>
                    <h5>Project Description</h5>
                    <p>Description: For my Software Project Practicum class at Towson we were given an outdated Abstract Syntax Tree Neural Network that was built to automatically identify equivalent mutants.
                        We were tasked with updating the ASTNN to run on python 3.10, implimenting Code2Vec, adding a learning rate hyperparameter, and getting the model to produce decent results.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Projects;
