import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import '../stylesheets/Projects.css';

import OceansImg1 from '../images/projectImages/Oceans/Oceans-Create-Account-Page.png';
import OceansImg2 from '../images/projectImages/Oceans/Oceans-Homepage.png';
import OceansImg3 from '../images/projectImages/Oceans/Oceans-Profile-Page.png';
import OceansImg4 from '../images/projectImages/Oceans/Oceans-Landing-Page.png';
import OceansImg5 from '../images/projectImages/Oceans/Oceans-WebDev-Ocean-Page.png';

import JFCodedImg1 from '../images/projectImages/JFCoded/Homepage.png';
import JFCodedImg2 from '../images/projectImages/JFCoded/Resume-Page.png';
import JFCodedImg3 from '../images/projectImages/JFCoded/Contact-Page.png';

import ImgAlt1 from '../images/projectImages/ImageAlter/img_alt_ss.png'
import ImgAlt2 from '../images/projectImages/ImageAlter/advanced_options.png'
import ImgAlt3 from '../images/projectImages/ImageAlter/gen_imgs.png'
import ImgAlt4 from '../images/projectImages/ImageAlter/out_img_gal.png'
import ImgAlt5 from '../images/projectImages/ImageAlter/i2i_ss.png'

import ChatRAGImg1 from '../images/projectImages/Chat-RAG/start_state.png';
import ChatRAGImg2 from '../images/projectImages/Chat-RAG/model_dropdown.png';
import ChatRAGImg3 from '../images/projectImages/Chat-RAG/query.png';
import ChatRAGImg4 from '../images/projectImages/Chat-RAG/RAG_Query.png';

import HealthGImg1 from '../images/projectImages/HealthG-Demo/ChatWindow.png';
import HealthGImg2 from '../images/projectImages/HealthG-Demo/WIthQuestionsAsked.png';
import HealthGImg3 from '../images/projectImages/HealthG-Demo/ChatbotWMemory.png';

import AEMIImg1 from '../images/projectImages/AEMI/ASTNN_Flow_Chart.png'
import AEMIImg2 from '../images/projectImages/AEMI/ASTNN_Flow_Chart_2.png'
import AEMIImg3 from '../images/projectImages/AEMI/code2vec_pipeline.png'
import AEMIImg4 from '../images/projectImages/AEMI/codeBERT_pipeline.png'
import AEMIImg5 from '../images/projectImages/AEMI/modded_astnn_pipeline.png'

import CS1 from '../images/projectImages/Cap&SonsWebsite/capandsonshero.png'
import CS2 from '../images/projectImages/Cap&SonsWebsite/contactUsC&S.png'
import CS3 from '../images/projectImages/Cap&SonsWebsite/recentprojectsC&S.png'
import CS4 from '../images/projectImages/Cap&SonsWebsite/services_section_c&s.png'


const Project = ({ name, description, images, githubLink, language, packages, sector, skills }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const galleryRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const gallery = galleryRef.current;
        let scrollAmount = 0;
        let scrollInterval;

        const scrollGallery = () => {
            const scrollMax = gallery.scrollWidth - gallery.clientWidth;
            gallery.scrollLeft = scrollAmount;
            scrollAmount += 1.8; // Adjust for speed
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
            ref={ref}
            className={`project-container ${inView ? 'fade-in' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <h2>{name}</h2>
            <p>{description}</p>

            <a href={githubLink} target='_blank' rel='noopener noreferrer' className='button'>View on GitHub</a>
            <div className='image-gallery' ref={galleryRef}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${name} screenshot ${index + 1}`} />
                ))}
            </div>

            <div className="technical-info-container">
                <h2>Technical Details</h2>
                <h4>Sector:</h4>
                <div className="tech-tag-container">
                    <span className="tech-tag sector-tag">{sector}</span>
                </div>
                <h4>Programming Language(s):</h4>
                <div className="tech-tag-container">
                    {language.map((lang, index) => (
                        <span key={index} className="tech-tag language-tag">{lang}</span>
                    ))}
                </div>
                <h4>Frameworks/Packages/Dependencies:</h4>
                <div className="tech-tag-container">
                    {packages.map((pkg, index) => (
                        <span key={index} className="tech-tag package-tag">{pkg}</span>
                    ))}
                </div>

                <h4>Skills:</h4>
                <div className="tech-tag-container">
                    {skills.map((skill, index) => (
                        <span key={index} className="tech-tag skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {

    const highlightedProjects = [
        {
            name: 'Chat RAG',
            description: 'Chat RAG is an advanced interactive coding assistant that leverages Retrieval-Augmented Generation (RAG) to provide informed responses to coding queries. Built with a user-friendly Gradio interface, it allows users to interact with various language models, customize model parameters, and upload context files from local directories or GitHub repositories for more accurate assistance.',
            images: [ChatRAGImg1, ChatRAGImg2, ChatRAGImg3, ChatRAGImg4],
            githubLink: 'https://github.com/JakeFurtaw/Chat-RAG',
            language: ['Python'],
            packages:['Gradio', 'Llama-Index', 'HuggingFace Hub', 'PyTorch', 'Transformers', 'Accelerate', 'Llama Parse', 'Dotenv', 'ChromaDB','OS', 'GC', 'glob', 'shutil', 'JSON'],
            sector: 'Natural Language Processing',
            skills: ['Retrieval-Augmented Generation', 'Prompt Engineering', 'Graph RAG', 'Conda', 'PyCharm', 'Chatbot Development' , 'Custom RAG Pipeline Design and Engineering']
        }
        // Add more highlighted projects here
    ];

    const mlProjects = [
        {
            name: 'Image Alter',
            description: 'Image Alter is a cutting-edge Gradio-based web application that empowers users to create and edit images using advanced Stable Diffusion models. Leveraging state-of-the-art AI technology, including the Flux model by Black Forest Labs and Stable Diffusion XL Refiner 1.0 by Stability AI, the app offers two primary functionalities: Text-to-Image generation and Image-to-Image transformation. With its intuitive interface, Image Alter allows users to transform text prompts into stunning visuals and enhance existing images with AI-driven alterations. Whether you\'re a professional designer, a digital artist, or an enthusiast exploring AI-generated imagery, Image Alter provides a powerful platform to bring your creative visions to life, pushing the boundaries of digital image manipulation.',
            images: [ImgAlt1, ImgAlt2, ImgAlt3, ImgAlt4, ImgAlt5],
            githubLink: 'https://github.com/JakeFurtaw/ImageAlter',
            language:['Python'],
            packages:['Gradio', 'Transformers', "Diffusers", 'PIL', 'NumPy', 'random'],
            sector:'Computer Vision',
            skills: ['Stable Diffusion', 'Prompt Engineering', 'Custom Pipeline Design and Engineering', 'Image Processing', 'PyCharm', 'Conda']
        },
        {
            name: 'Automatic Equivalent Mutant Identifier',
            description: 'This project was a research endeavor I conducted during my college studies for the Software Project Practicum class. We leveraged an existing Abstract Syntax Tree Neural Network, training and fine-tuning the model to identify equivalent mutants within a large dataset of Java and C mutants. The dataset comprised a variety of labeled equivalent and non-equivalent Java and C mutants. Our task involved updating the pipeline, data preprocessing method, embedding technique, and training script. For more detailed information about this project, please refer to the repository linked below.',
            images: [AEMIImg1, AEMIImg2, AEMIImg3, AEMIImg4, AEMIImg5],
            githubLink: 'https://gitlab.com/JakeFurtaw/ASTNN-COSC490',
            language: ['Python'],
            packages:['Pandas', 'Gensim', 'PyTorch', 'Scikit-Learn', 'Matplotlib', 'Accelerate', 'Tensorflow', 'Transformers', 'NumPy', 'rdflib', 'Pycparser', 'Javalang', 'Notebook'],
            sector:'Natural Language Processing',
            skills: ['Hyperparameter Tuning', 'Model Training and Finetuning', 'Binary Classification', 'Parser Development', 'Undersampling and Oversampling' ]
        },
        {
            name: 'Health Bot',
            description: 'Health Bot is an intelligent health chatbot that provides personalized health-related information through natural language interactions. It uses advanced language models to deliver responsive and context-aware answers, while a user-friendly interface allows easy communication. The system manages chat histories efficiently, ensuring continuity in conversations and preserving interactions for future reference.',
            images: [HealthGImg1, HealthGImg2, HealthGImg3],
            githubLink: 'https://github.com/JakeFurtaw/HealthReelDemo',
            language: ['Python'],
            packages:['Llama-Index', 'Gradio', 'PyTorch', 'OS'],
            sector:'Natural Language Processing',
            skills: ['Chatbot Development', 'Prompt Engineering', 'Custom RAG Pipeline Design and Engineering', 'PyCharm', 'Conda' ]

        },        
        {
            name: 'Chat RAG',
            description: 'Chat RAG is an advanced interactive coding assistant that leverages Retrieval-Augmented Generation (RAG) to provide informed responses to coding queries. Built with a user-friendly Gradio interface, it allows users to interact with various language models, customize model parameters, and upload context files from local directories or GitHub repositories for more accurate assistance.',
            images: [ChatRAGImg1, ChatRAGImg2, ChatRAGImg3, ChatRAGImg4],
            githubLink: 'https://github.com/JakeFurtaw/Chat-RAG',
            language: ['Python'],
            packages:['Gradio', 'Llama-Index', 'HuggingFace Hub', 'PyTorch', 'Transformers', 'Accelerate', 'Llama Parse', 'Dotenv', 'ChromaDB','OS', 'GC', 'glob', 'shutil', 'JSON'],
            sector: 'Natural Language Processing',
            skills: ['Retrieval-Augmented Generation', 'Prompt Engineering', 'Graph RAG', 'Conda', 'PyCharm', 'Chatbot Development' , 'Custom RAG Pipeline Design and Engineering']
        },
        {
            name: 'Repo Ripper',
            description: 'Repo Ripper is an innovative tool designed to revolutionize the way developers interact with and understand GitHub repositories, especially when dealing with unfamiliar codebases or languages. This efficient, locally-run application allows users to have intelligent conversations about any GitHub repository\'s contents using Large Language Models. I built this tool in about 3-4 hours over 2 days.',
            images:[],
            githubLink: 'https://github.com/JakeFurtaw/RepoRipper',
            language: ['Python'],
            packages:['PyTorch', 'Llama-Index'],
            sector:'Natural Language Processing',
            skills: ['Retrieval-Augmented Generation', 'Custom RAG Pipeline Design and Engineering', 'PyCharm', 'Conda']
        }

        // Add more ML projects here
    ];

    const webProjects = [
        {
            name: 'Oceans',
            description: 'Oceans is a fully functional social media website that I helped create. It has features like posting, commenting, liking, and following users. It was developed, for a college course group project, in one semester using the MERN stack and deployed using Vercel.',
            images: [OceansImg4, OceansImg1, OceansImg2, OceansImg3, OceansImg5],
            githubLink: 'https://github.com/JakeFurtaw/Oceans',
            language: ['Javascript'],
            packages:['React', 'MongoDB', 'Express', 'Node Mailer'],
            sector:'Web Development',
            skills: ['React', 'CSS', 'Responsive Design', 'Express']
        },
        {
            name: 'Cap & Sons Excavation Corp. Website',
            description: 'I recently built a simple single page website for a local swimming pool excavation company. ',
            images: [CS1, CS4, CS3, CS2],
            githubLink: 'https://github.com/JakeFurtaw/capandsons',
            language: ['Javascript'],
            packages:['React', 'Lucide-React'],
            sector:'Web Development',
            skills: ['React', 'CSS', 'Responsive Design']
        },
        {
            name: 'JFCoded',
            description: 'This Website!',
            images: [JFCodedImg1, JFCodedImg3, JFCodedImg2],
            githubLink: 'https://github.com/JakeFurtaw/JFCoded',
            language: ['Javascript'],
            packages:['React', 'Web Vitals'],
            sector:'Web Development',
            skills: ['React', 'CSS', 'Responsive Design']
        }
    ];

    return (
        <div className='projects-container'>
            <Navbar />
            <h1 className="parallax-header">Projects</h1>
            <div className='highlighted-projects'>
                <h2 className="section-header">Highlighted Project</h2>
                {highlightedProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className='ML-projects'>
                <h2 className="section-header">Machine Learning Projects</h2>
                {mlProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className='web-projects'>
                <h2 className="section-header">Web Development Projects</h2>
                {webProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <h4>Last Updated 3/7/25 check my GitHub for my latest project updates. More projects coming soon!</h4>
            <h4>Link Below!</h4>
            <SocialLinks animationType="pulse" />
        </div>
    );
};

export default Projects;
