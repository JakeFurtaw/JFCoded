import React from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/Projects.css';

import OceansImg1 from '../images/projectImages/Oceans/Oceans-Create-Account-Page.png';
import OceansImg2 from '../images/projectImages/Oceans/Oceans-Homepage.png';
import OceansImg3 from '../images/projectImages/Oceans/Oceans-Profile-Page.png';
import OceansImg4 from '../images/projectImages/Oceans/Oceans-Landing-Page.png';
import OceansImg5 from '../images/projectImages/Oceans/Oceans-WebDev-Ocean-Page.png';

import JFCodedImg1 from '../images/projectImages/JFCoded/Homepage.png';
import JFCodedImg2 from '../images/projectImages/JFCoded/Contact-Page.png';
import JFCodedImg3 from '../images/projectImages/JFCoded/Resume-Page.png';

import ChatRAGImg1 from '../images/projectImages/Chat-RAG/start_state.png';
import ChatRAGImg2 from '../images/projectImages/Chat-RAG/model_dropdown.png';
import ChatRAGImg3 from '../images/projectImages/Chat-RAG/gemma_question.png';

import HealthGImg1 from '../images/projectImages/HealthG-Demo/ChatWindow.png';
import HealthGImg2 from '../images/projectImages/HealthG-Demo/WIthQuestionsAsked.png';
import HealthGImg3 from '../images/projectImages/HealthG-Demo/ChatbotWMemory.png';


const Project = ({ name, description, images, githubLink }) => {
    return (
        <div className='project-container'>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={githubLink} target='_blank' rel='noopener noreferrer' className='button'>View on GitHub</a>
            <div className='image-gallery'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${name} screenshot ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

const Projects = () => {

    const highlightedProjects = [
        {
            name: 'Code-RAG',
            description: 'Code-RAG is a tool I am creating that works a lot like ChatSys but with a twist. It allows users to choose different local models in a dropdown menu and upload documents from their devices. Using Retrieval-Augmented Generation, the model ingests the documents, allowing the user to use the model to converse with/about the document(s). I use this a lot for coding, writing quick paragraphs for documents, and many other things.',
            images: [ChatRAGImg1, ChatRAGImg2, ChatRAGImg3],
            githubLink: 'https://github.com/username/repo1'
        },
        // Add more highlighted projects here
    ];

    const mlProjects = [
        {
            name: 'HealthG Demo',
            description: 'Description for ML project 1.',
            images: [HealthGImg1, HealthGImg2, HealthGImg3],
            githubLink: 'https://github.com/username/repo2'
        },
        {
            name: 'Code-RAG',
            description: 'Code-RAG is a tool I am creating that works a lot like ChatSys but with a twist. It allows users to choose different local models in a dropdown menu and upload documents from their devices. Using Retrieval-Augmented Generation, the model ingests the documents, allowing the user to use the model to converse with/about the document(s). I use this a lot for coding, writing quick paragraphs for documents, and many other things.',
            images: [ChatRAGImg1, ChatRAGImg2, ChatRAGImg3],
            githubLink: 'https://github.com/username/repo2'
        }
        // Add more ML projects here
    ];

    const webProjects = [
        {
            name: 'Oceans',
            description: 'Oceans is a fully functional social media website that I helped create. It has features like posting, commenting, liking, and following users. It was developed, for a college course group project, in one semester using the MERN stack and deployed using Vercel.',
            images: [OceansImg4, OceansImg1, OceansImg2, OceansImg3, OceansImg5],
            githubLink: 'https://github.com/JakeFurtaw/Oceans'
        },
        {
            name: 'JFCoded',
            description: 'This Website!.',
            images: [JFCodedImg1, JFCodedImg3, JFCodedImg2],
            githubLink: 'https://github.com/JakeFurtaw/JFCoded'
        }
    ];

    return (
        <div className='projects-container'>
            <Navbar />
            <h1>Projects</h1>
            <div className='highlighted-projects'>
                <h2>Highlighted Project</h2>
                {highlightedProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className='ML-projects'>
                <h2>Machine Learning Projects</h2>
                {mlProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className='web-projects'>
                <h2>Web Development Projects</h2>
                {webProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <h4>Last Updated 8/8/24 check my GitHub for latest project updates. More projects coming soon!</h4>
            <h4>Link Below!</h4>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/jacob-furtaw/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/JakeFurtaw" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://gitlab.com/JakeFurtaw" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-gitlab"></i>
                </a>
                <a href="mailto:jfurtaw97@gmail.com" className="social-icon">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    );
};

export default Projects;
