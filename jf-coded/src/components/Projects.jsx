import React from 'react';
import '../stylesheets/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='project-container'>
            <h3>Projects</h3>
            <div className='projects'>

                <div className='project'>
                    <h3>Using an ASTNN to Equivalently Sort Mutants</h3>
                    <Link style={{color:'#7da7f5'}} to='https://gitlab.com/JakeFurtaw/ASTNN-COSC490'>Gitlab Link</Link>
                    <h5>Project Description</h5>
                    <p>Description: For my Software Project Practicum class at Towson we were given an outdated Abstract Syntax Tree Neural Network that was built to automatically identify equivalent mutants.
                        We were tasked with updating the ASTNN to run on python 3.10, implimenting Code2Vec, adding a learning rate hyperparameter, and getting the model to produce decent results.
                    </p>
                </div>


                <div className='project'>
                    <h3>Using Machine Learning to Automatically Sort Mutants</h3>
                    <Link style={{color:'#7da7f5'}} to='https://gitlab.com/JakeFurtaw/ASTNN-COSC490'>Gitlab Link</Link>
                    <h5>Project Description</h5>
                    <p>
                    <strong>Description:</strong> For the Software Project Practicum class at Towson University, our team was assigned to work on an outdated Abstract Syntax Tree Neural Network (ASTNN) project. The ASTNN was originally designed to automatically identify equivalent mutants, which are slight variations of a program that produce the same output as the original program.
                    </p>
                    <p>
                        <strong>Our primary objectives were:</strong><br/>
                        <strong>Python 3.10 Compatibility:</strong> Upgrade the existing ASTNN codebase to ensure compatibility with Python 3.10, the latest version of Python at the time.<br/>
                        <strong>Code2Vec Integration:</strong> Implement Code2Vec, a neural machine translation model that represents code as continuous distributed vectors. This would enhance the ASTNN's ability to understand and process code samples more effectively.<br/>
                        <strong>Learning Rate Hyperparameter:</strong> Introduce a learning rate hyperparameter to the ASTNN's training process. The learning rate controls the step size at which the model's weights are updated during training, allowing for better optimization and convergence.<br/>
                        <strong>Improved Performance:</strong> Refine the ASTNN model and its training process to achieve decent results in accurately identifying equivalent mutants, ultimately improving the model's predictive capability and practical utility.<br/>
                    </p>
                    <p>
                    Throughout the project, our team worked on resolving compatibility issues, integrating new techniques like Code2Vec, fine-tuning hyperparameters, and conducting extensive experiments to evaluate the ASTNN's performance. The goal was to deliver an updated and enhanced version of the ASTNN that could effectively tackle the challenge of equivalent mutant identification, while leveraging modern techniques and tools in the field of machine learning for code analysis.
                    </p>
                </div>

                <div className='project'>
                    <h3>Oceans</h3>
                    <Link style={{color:'#7da7f5'}} to='https://oceans-prod-v1.vercel.app/'>Link to Oceans</Link>
                    <h5>Project Description</h5>
                    <p>Description: Oceans was built in using the MERN stack. Over the course of a semester we built and deployed a full stack web application.
                        Oceans is a social media platform that allows users to limit their exposure to information to whatever they want to see, not what they're forced to see. Users can create an account, post content, and interact with other users.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Projects;
