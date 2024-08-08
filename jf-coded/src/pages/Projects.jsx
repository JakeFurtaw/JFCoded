import React from 'react';
import Navbar from '../components/Navbar';
import '../stylesheets/Projects.css';

const Project = ({ name, description, images, githubLink }) => {
    return (
        <div className='project-container'>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='image-gallery'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${name} screenshot ${index + 1}`} />
                ))}
            </div>
            <a href={githubLink} target='_blank' rel='noopener noreferrer'>View on GitHub</a>
        </div>
    );
};

const Projects = () => {

    const highlightedProjects = [
        {
            name: 'Highlighted Project 1',
            description: 'Description for highlighted project 1.',
            images: ['image1.png', 'image2.png'],
            githubLink: 'https://github.com/username/repo1'
        },
        // Add more highlighted projects here
    ];

    const mlProjects = [
        {
            name: 'ML Project 1',
            description: 'Description for ML project 1.',
            images: ['ml_image1.png', 'ml_image2.png'],
            githubLink: 'https://github.com/username/repo2'
        },
        {
            name: 'ML Project 2',
            description: 'Description for ML project 2.',
            images: ['ml_image1.png', 'ml_image2.png'],
            githubLink: 'https://github.com/username/repo2'
        }
        // Add more ML projects here
    ];

    const webProjects = [
        {
            name: 'Web Project 1',
            description: 'Description for web project 1.',
            images: ['web_image1.png', 'web_image2.png'],
            githubLink: 'https://github.com/username/repo3'
        },
        {
            name: 'Web Project 2',
            description: 'Description for web project 2.',
            images: ['web_image1.png', 'web_image2.png'],
            githubLink: 'https://github.com/username/repo3'
        }
    ];

    return (
        <div className='projects-container'>
            <Navbar />
            <h1>Projects</h1>
            <div className='highlighted-projects'>
                <h2>Highlited Projects</h2>
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
                <h2>Web Projects</h2>
                {webProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
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
