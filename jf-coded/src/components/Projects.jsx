import React from 'react';
import '../stylesheets/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        
        <div className='project-container'>
            <h2>Projects</h2>
            <div className='projects'>
                <div className='project'>
                    <h3>Creating an AI Assistant using Llama 2 and RAG</h3>
                    <Link style={{color:'#7da7f5'}} to='https://github.com/JakeFurtaw/LangchainRAG-Chatbot'>Project's Github Link</Link>
                    <h4>Project Description</h4>
                    <p className="project-description"> I am developing a conversational AI assistant specifically for new and existing students at universities. This chatbot will be accessible via website and mobile app, allowing students to interact with it from anywhere to get the information they need. At its core is a custom dataset I've carefully curated with a wide range of relevant topics like course offerings, teacher information, enrollment procedures, campus resources, and more.<br/>
                    To power the chatbot, I'm implementing a Retrieval-Augmented Generation (RAG) pipline and using Meta's Llama2 7B model. This combines retrieving pertinent info from the custom dataset with Llama2's fluent text generation abilities. The RAG model allows the chatbot to efficiently locate relevant data and generate natural, contextual responses tailored to each student's query. By deploying it on website and app, I aim to provide an easily accessible resource to enhance the overall student experience, facilitating smoother transitions and navigation through academia. 
                    </p>
                </div>


                <div className='project'>
                    <h3>Using Machine Learning to Automatically Sort Equivalent Mutants</h3>
                    <Link style={{color:'#7da7f5'}} to='https://gitlab.com/JakeFurtaw/ASTNN-COSC490'>Project's Gitlab Link</Link>
                    <h4>Project Description</h4>
                    <p className="project-description">
                    For the Software Project Practicum class at Towson University, our team was assigned to work on an outdated Abstract Syntax Tree Neural Network (ASTNN) project. The ASTNN was originally designed to automatically identify equivalent mutants, which are slight variations of a program that produce the same output as the original program.
                    </p>
                    <p><strong>Our Primary Objectives:</strong><br/></p>
                    <p className="project-description">
                        <ul>
                            <li>
                                <strong>Python 3.10 Compatibility:</strong> Upgrade the existing ASTNN codebase to ensure compatibility with Python 3.10, the latest version of Python at the time.
                            </li>
                            <li>
                                <strong>Code2Vec Integration:</strong> Implement Code2Vec, a neural machine translation model that represents code as continuous distributed vectors. This would enhance the ASTNN's ability to understand and process code samples more effectively.
                            </li>
                            <li>
                                <strong>Learning Rate Hyperparameter:</strong> Introduce a learning rate hyperparameter to the ASTNN's training process. The learning rate controls the step size at which the model's weights are updated during training, allowing for better optimization and convergence.
                            </li>
                            <li>
                                <strong>Improved Performance:</strong> Refine the ASTNN model and its training process to achieve decent results in accurately identifying equivalent mutants, ultimately improving the model's predictive capability and practical utility.
                            </li>
                        </ul>
                    </p>
                    <p className="project-description">
                    Throughout the project, our team worked on resolving compatibility issues, integrating new techniques like Code2Vec, fine-tuning hyperparameters, and conducting extensive experiments to evaluate the ASTNN's performance. The goal was to deliver an updated and enhanced version of the ASTNN that could effectively tackle the challenge of equivalent mutant identification, while leveraging modern techniques and tools in the field of machine learning for code analysis.
                    </p>
                </div>

                <div className='project'>
                    <h3>Oceans</h3>
                    <Link style={{color:'#7da7f5'}} to='https://oceans-prod-v1.vercel.app/'>Link to Oceans Website</Link>
                    <h4>Project Description</h4>
                    <p className="project-description">
                    Oceans is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, developed over the course of a semester-long project. The primary goal of Oceans is to provide a social media platform that empowers users to curate their online experience by limiting their exposure to information they choose to engage with, rather than being overwhelmed by a constant barrage of content they may not be interested in.<br/><br/>
                    </p>
                    <p><strong>Key Features:</strong><br/></p>
                    <p className="project-description">
                    <ul>
                        <li>
                            <strong>User Authentication:</strong> Users can create secure accounts, ensuring their data and interactions remain private and protected.
                        </li>
                        <li>
                            <strong>Content Creation:</strong> Registered users can create and publish various types of content, such as text posts, images, videos, and more, allowing them to share their thoughts, experiences, and creations with the Oceans community.
                        </li>
                        <li>
                            <strong>Customizable Feed:</strong> Users have complete control over their news feed, enabling them to follow specific topics, interests, or other users they find valuable. This curated feed ensures that users only see content relevant to their preferences, reducing information overload and enhancing their overall experience.
                        </li>
                        <li>
                            <strong>Social Interactions:</strong> Oceans facilitates social interactions by allowing users to comment, like, and share posts from their feed. Users can also send direct messages to connect with others, fostering meaningful conversations and connections within the platform.
                        </li>
                        <li>
                            <strong>User Profiles:</strong> Each user has a personalized profile page where they can showcase their content, share information about themselves, and manage their account settings and preferences.
                        </li>
                    </ul></p>
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
