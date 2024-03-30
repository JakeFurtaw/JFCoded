import React from 'react';
import '../stylesheets/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        
        <div className='project-container'>
            <h2>Projects</h2>
            <div className='projects'>
                <div className='project'>
                    <h3>Using an ASTNN to Equivalently Sort Mutants</h3>
                    <Link style={{color:'#7da7f5'}} to='https://gitlab.com/JakeFurtaw/ASTNN-COSC490'>Gitlab Link</Link>
                    <h4>Project Description</h4>
                    <p><strong>Description:</strong> For my Software Project Practicum class at Towson we were given an outdated Abstract Syntax Tree Neural Network that was built to automatically identify equivalent mutants.
                        We were tasked with updating the ASTNN to run on python 3.10, implimenting Code2Vec, adding a learning rate hyperparameter, and getting the model to produce decent results.
                    </p>
                </div>


                <div className='project'>
                    <h2>Using Machine Learning to Automatically Sort Equivalent Mutants</h2>
                    <Link style={{color:'#7da7f5'}} to='https://gitlab.com/JakeFurtaw/ASTNN-COSC490'>Gitlab Link</Link>
                    <h4>Project Description</h4>
                    <p className="project-description">
                    <strong>Description:</strong> For the Software Project Practicum class at Towson University, our team was assigned to work on an outdated Abstract Syntax Tree Neural Network (ASTNN) project. The ASTNN was originally designed to automatically identify equivalent mutants, which are slight variations of a program that produce the same output as the original program.
                    </p>
                    <p className="project-description">
                        <strong>Our primary objectives were:</strong><br/>
                        <strong>Python 3.10 Compatibility:</strong> Upgrade the existing ASTNN codebase to ensure compatibility with Python 3.10, the latest version of Python at the time.<br/>
                        <strong>Code2Vec Integration:</strong> Implement Code2Vec, a neural machine translation model that represents code as continuous distributed vectors. This would enhance the ASTNN's ability to understand and process code samples more effectively.<br/>
                        <strong>Learning Rate Hyperparameter:</strong> Introduce a learning rate hyperparameter to the ASTNN's training process. The learning rate controls the step size at which the model's weights are updated during training, allowing for better optimization and convergence.<br/>
                        <strong>Improved Performance:</strong> Refine the ASTNN model and its training process to achieve decent results in accurately identifying equivalent mutants, ultimately improving the model's predictive capability and practical utility.<br/>
                    </p>
                    <p className="project-description">
                    Throughout the project, our team worked on resolving compatibility issues, integrating new techniques like Code2Vec, fine-tuning hyperparameters, and conducting extensive experiments to evaluate the ASTNN's performance. The goal was to deliver an updated and enhanced version of the ASTNN that could effectively tackle the challenge of equivalent mutant identification, while leveraging modern techniques and tools in the field of machine learning for code analysis.
                    </p>
                </div>

                <div className='project'>
                    <h2>Oceans</h2>
                    <Link style={{color:'#7da7f5'}} to='https://oceans-prod-v1.vercel.app/'>Link to Oceans</Link>
                    <h4>Project Description</h4>
                    <p className="project-description">
                    <strong>Description:</strong> Oceans is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, developed over the course of a semester-long project. The primary goal of Oceans is to provide a social media platform that empowers users to curate their online experience by limiting their exposure to information they choose to engage with, rather than being overwhelmed by a constant barrage of content they may not be interested in.<br/><br/>
                    </p>
                    <p><strong>Key Features:</strong><br/></p>
                    <p className="project-description">
                    <strong>User Authentication:</strong> Users can create secure accounts, ensuring their data and interactions remain private and protected.<br/>
                    <strong>Content Creation:</strong> Registered users can create and publish various types of content, such as text posts, images, videos, and more, allowing them to share their thoughts, experiences, and creations with the Oceans community.<br/>
                    <strong>Customizable Feed:</strong> Users have complete control over their news feed, enabling them to follow specific topics, interests, or other users they find valuable. This curated feed ensures that users only see content relevant to their preferences, reducing information overload and enhancing their overall experience.<br/>
                    <strong>Social Interactions:</strong> Oceans facilitates social interactions by allowing users to comment, like, and share posts from their feed. Users can also send direct messages to connect with others, fostering meaningful conversations and connections within the platform.<br/>
                    <strong>User Profiles:</strong> Each user has a personalized profile page where they can showcase their content, share information about themselves, and manage their account settings and preferences.<br/><br/>
                    </p>
                    <p className="project-description">
                    Throughout the development process, our team followed best practices in web development, focusing on creating a responsive and user-friendly interface, implementing secure authentication and authorization mechanisms, and optimizing the application for performance and scalability.<br/>
                    The application was successfully deployed and made available for public use, allowing users to experience the power of a social media platform that prioritizes their control over the content they consume.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Projects;
