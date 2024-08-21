import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
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
import ChatRAGImg3 from '../images/projectImages/Chat-RAG/RAGQuestion.png';
import ChatRAGImg4 from '../images/projectImages/Chat-RAG/Llama_Query.png';

import HealthGImg1 from '../images/projectImages/HealthG-Demo/ChatWindow.png';
import HealthGImg2 from '../images/projectImages/HealthG-Demo/WIthQuestionsAsked.png';
import HealthGImg3 from '../images/projectImages/HealthG-Demo/ChatbotWMemory.png';


const Project = ({ name, description, images, githubLink }) => {
    const galleryRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const gallery = galleryRef.current;
        let scrollAmount = 0;
        let scrollInterval;

        const scrollGallery = () => {
            const scrollMax = gallery.scrollWidth - gallery.clientWidth;
            gallery.scrollLeft = scrollAmount;
            scrollAmount += 1.5; // Adjust for speed
            if (scrollAmount >= scrollMax) {
                scrollAmount = 0;
            }
        };

        if (isHovering) {
            scrollInterval = setInterval(scrollGallery, 20); // Adjust interval for speed
        }

        return () => {
            if (scrollInterval) clearInterval(scrollInterval);
        };
    }, [isHovering]);

    return (
        <div 
            className='project-container'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={githubLink} target='_blank' rel='noopener noreferrer' className='button'>View on GitHub</a>
            <div className='image-gallery' ref={galleryRef}>
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
            name: 'Chat-RAG',
            description: 'Chat-RAG is an AI-powered chatbot that facilitates conversational interactions, leveraging different machine learning models. It supports Retrieval-Augmented Generation (RAG), allowing the chatbot to enhance its responses by retrieving relevant information from a set of documents. Users can switch between models depending on the context, and a user-friendly interface ensures smooth communication. The system efficiently manages input and output in real-time, making it suitable for various information retrieval and conversational tasks.',
            images: [ChatRAGImg1, ChatRAGImg2, ChatRAGImg4, ChatRAGImg3],
            githubLink: 'https://github.com/JakeFurtaw/Chat-RAG'
        },
        // Add more highlighted projects here
    ];

    const mlProjects = [
        {
            name: 'HealthG',
            description: 'HealthG is an intelligent health chatbot that provides personalized health-related information through natural language interactions. It uses advanced language models to deliver responsive and context-aware answers, while a user-friendly interface allows easy communication. The system manages chat histories efficiently, ensuring continuity in conversations and preserving interactions for future reference.',
            images: [HealthGImg1, HealthGImg2, HealthGImg3],
            githubLink: 'https://github.com/JakeFurtaw/HealthReelDemo'
        },
        {
            name: 'Chat-RAG',
            description: 'Chat-RAG is an AI-powered chatbot that facilitates conversational interactions, leveraging different machine learning models. It supports Retrieval-Augmented Generation (RAG), allowing the chatbot to enhance its responses by retrieving relevant information from a set of documents. Users can switch between models depending on the context, and a user-friendly interface ensures smooth communication. The system efficiently manages input and output in real-time, making it suitable for various information retrieval and conversational tasks.',
            images: [ChatRAGImg1, ChatRAGImg2, ChatRAGImg4, ChatRAGImg3],
            githubLink: 'https://github.com/JakeFurtaw/Chat-RAG'
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
            description: 'This Website!',
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
            <h4>Last Updated 8/17/24 check my GitHub for my latest project updates. More projects coming soon!</h4>
            <h4>Link Below!</h4>
            <SocialLinks />
        </div>
    );
};

export default Projects;
