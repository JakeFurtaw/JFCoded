import React, { Fragment, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import "../stylesheets/Resume.css";

import Navbar from '../components/Navbar';
import TULogo from '../images/tulogo.png';
import HCCLogo from '../images/hcc.jpg';
import SocialLinks from '../components/SocialLinks';

import resumeFile from '../files/Jacob_Furtaw_Resume.pdf';

const AnimatedSection = ({ children, threshold = 0.3 }) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true
    });

    return (
        <section ref={ref} className={`animated-section ${inView ? 'fade-in' : ''}`}>
            {children}
        </section>
    );
};

const SkillBar = ({ name, level }) => {
    const skillRef = useRef(null);
    const [ref, inView] = useInView({
        threshold: .5,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView && skillRef.current) {

            setTimeout(() => {
                skillRef.current.style.width = `${level}%`;
            }, 100);
        }
    }, [inView, level]);

    return (
        <div className="skill-item" ref={ref}>
            <span className="skill-name">{name}</span>
            <div className="skill-bar">
                <div ref={skillRef} className="skill-level" style={{ width: '0%' }}></div>
            </div>
        </div>
    );
};

const Resume = () => {
    return (
        <Fragment>

        <div className="resume-container">
        <Navbar />
            <header>
                <h1>Jacob Furtaw</h1>
            <a className="button" href={resumeFile} download>Download My Resume</a>
            </header>
            <AnimatedSection>
                    <h2>Intro</h2>
                    <p>Hello my name is Jake and I am an innovative Machine Learning Engineer/Researcher specializing in Natural Language Processing (NLP), seeking
                        opportunities to advance AI technology. I excel in designing, developing, and testing cutting-edge AI Assistants and implementing advanced 
                        NLP techniques like Retrieval-Augmented Generation(RAG) and agentic RAG to deliver versatile, high-impact solutions. 
                        I excel in both independent and collaborative settings, driving projects from ideationto deployment.
                        
                        <br/><br/>My expertise spans data preprocessing, synthetic data creation, model training and finetuning,
                        custom AI assistant development, RAG pipeline creation, and deploying scalable Machine Learning solutions. I thrive in cross-functional 
                        teams, fostering collaboration to deliver exceptional results. I am passionate about solving complex problems and
                        pushing AI boundaries. 
                        
                        <br/><br/> Proficient in Python, PyTorch, and TensorFlow, I am adept at using a large scope of Machine Learning and Data Sceince 
                        libraries such as HuggingFace, Langchain, Llama-Index, Transformers, and Diffusers to name a few. My technical skills extend to big 
                        data technologies, version control, and containerization, enabling me to develop robust, efficient AI systems. 
                        
                        <br/><br/>While my primary expertise lies in Natural Language Processing and Stable Diffusion, I am eager to explore new machine 
                        learning frontiers, including multimodal learning and the application of AI in emerging fields such as healthcare and climate science. 
                        Driven by the potential of AI to transform industries and improve lives, I am committed to contributing to groundbreaking research 
                        and developing innovative solutions that redefine the possibilities in artificial intelligence.
                        
                        <br/><br/><strong style={{fontSize:"1.8rem"}}>Get me on the phone today and lets talk about how I can help your organization thrive!</strong></p>
                </AnimatedSection>

                <AnimatedSection>
                <h2>Skills</h2>
                    <h3 style={{marginBottom:40}}><strong>Programming Languages</strong></h3>
                    <div className="skills-container">
                        <SkillBar name="Python" level={90} />
                        <SkillBar name="Javascript" level={75} />
                        <SkillBar name="C++" level={50} />
                        <SkillBar name="Java" level={25} />
                        <SkillBar name="CSS" level={65} />
                    </div>

                    <h3><strong>Machine Learning/Data Science</strong></h3> 
                    <p>Frameworks/Libraries/Dependencies: PyTorch, TensorFlow, Scikit-Learn, Transformers, Diffusers, PIL, HuggingFace, Langchain, Llama-Index, Llama Parse, Gradio, Pandas, NumPy, Ollama</p>
                    <p>Data Stores: Milvus, ChromaDB, Neo4j</p>
                    <p>Skills: Retrieval-Augmented Generation, Agentic RAG, Prompt Engineering, Data Preprocessing, Synthetic Data Creation, Feature Engineering</p>
                    
                    <h3><strong>Tools & Platforms</strong></h3>
                    <div className="skills-container">
                        <SkillBar name="Git" level={99} />
                        <SkillBar name="PyCharm" level={95} />
                        <SkillBar name="VS Code" level={70} />
                        <SkillBar name="Conda" level={90} />
                        <SkillBar name="Jupyter" level={35} />
                        <SkillBar name="Docker" level={25} />
                        <SkillBar name="NVIDIAs AI Workbench" level={25} />
                    </div>
            
                    <h3><strong>Operating Systems</strong></h3>
                    <div className="skills-container">
                        <SkillBar name="Linux" level={85} />
                        <SkillBar name="Windows 11" level={95} />
                        <SkillBar name="Windows 10" level={95} />
                        <SkillBar name="MacOS" level={55} />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Work Experience</h2>
                    <div>
                        <h3>Machine Learning Engineer/Researcher</h3>
                        <p>SurgePoint Software | Aug 2023 - Present</p>
                        <ul>
                            <li>Developing an innovative AI Assistant using open-source LLMs like Codestral 22B, Mistral 7B, Mistral-NeMo 12B, and Llama 3.1 8B</li>
                            <li>Utilizing self-taught data engineering and data preprocessing skills to craft a 13-million-line dataset of web-scraped data</li>
                            <li>Implementing Retrieval-Augmented Generation to increase semantic relevance scores and combat model hallucinations</li>
                            <li>Leveraging self-taught prompt engineering skills to ensure the model has a well-structured prompt and enough context to answer any query a user might input</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Advanced Repair Agent</h3>
                        <p>Geek Squad | Mar 2022 - Present</p>
                        <ul>
                            <li>Earned a Letter of Recommendation from Upper Management for designing and helping to implement a plan to revamp our locations day to day operations, increasing overall productivity and customer satisfaction by 157% </li>
                            <li>Executing tens of thousands of Software and Hardware fixes on desktops, laptops, tablets, and cell phones</li>
                            <li>Receiving an award for Top Performing ARA at our location every quarter and was in the top 3% in our District and Region</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Projects</h2>
                    <div>
                        <h3>Chat RAG: Advanced Coding Assistant</h3>
                        <ul>
                        <li>Designed an intuitive UI with provider-specific controls, allowing users to fine-tune model parameters such as temperature, max tokens, and context window size, facilitating easy switching between different AI providers.</li>
                            <li>Developed a sophisticated, chat-based coding assistant leveraging Retrieval-Augmented Generation (RAG) technology, integrating multiple language model providers (Ollama, HuggingFace, NVIDIA NIMs, OpenAI, and Anthropic) with a user-friendly Gradio interface.</li>
                            <li>Engineered a flexible system featuring dynamic model switching, custom embedding integration (using Hugging Face embeddings), and efficient memory management, demonstrating proficiency in PyTorch, Llama Index, and state-of-the-art language models.</li>
                            <li>Integrated advanced NLP techniques such as custom prompts, chat memory management, and context-aware responses to improve the quality and relevance of the assistant's outputs.</li>
                            <li>Implemented advanced features including local document parsing, GitHub repository integration, and support for multiple vector stores (Neo4j, ChromaDB, Milvus) to enhance the assistant's knowledge base and contextual understanding.</li>
                            <li>Developed a modular architecture with separate utility classes for model management, parameter updates, and chat functionality, enhancing code maintainability and scalability.</li>
                            <li>Incorporated GPU memory optimization techniques, including dynamic CUDA cache clearing and garbage collection, to improve performance and resource utilization across different model providers.</li>
                            <li>Implemented robust error handling, informative user notifications, and dynamic UI updates to enhance the application's reliability and user experience.</li>
                            <li>Demonstrated strong skills in ML engineering, AI application design, and the integration of multiple AI services and data sources into a cohesive, user-centric application.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>ASTNN: Automatic Equivalent Mutant Identifier</h3>
                        <ul>
                            <li>Excelled as a member of a Scrum Team, engaged in sprint planning, daily standups, and sprint reviews</li>
                            <li>Developed an Abstract Syntax Tree Neural Network (ASTNN) for automatic identification of equivalent mutants in software testing, demonstrating expertise in advanced machine learning techniques for code analysis.</li>
                            <li>Implemented and integrated a comprehensive mutant dataset from MutantBench, showcasing skills in data preparation and management for machine learning tasks.</li>
                            <li>Created a custom parser to insert mutations into original programs, returning mutated methods/files, highlighting proficiency in code manipulation and static analysis.</li>
                            <li>Updated and refactored the ASTNN codebase to Python 3.10 and recent library versions, demonstrating ability to modernize and maintain complex ML projects.</li>
                            <li>Enhanced the pipeline to support parsing of Java mutants using javalang, expanding the tool's language coverage and utility.</li>
                            <li>Implemented model persistence and inference capabilities, allowing for trained model reuse and practical application in software testing workflows.</li>
                            <li>Created a novel approach to equivalent mutant identification using Code2Vec's code vectors with a neural network, showcasing innovation in combining code representation techniques with deep learning.</li>
                            <li>Implemented various data handling techniques including undersampling and oversampling to address class imbalance, demonstrating understanding of machine learning best practices.</li>
                            <li>Integrated learning rate as a hyperparameter in the ASTNN estimator, showing attention to model optimization techniques.</li>
                            <li>Produced comprehensive documentation including README, diagrams, and Jupyter notebooks, facilitating project understanding and reproducibility.</li>
                            <li>Demonstrated proficiency in a wide range of technologies and libraries including PyTorch, Scikit-Learn, TensorFlow, and various NLP tools, showcasing a broad skill set in AI and machine learning.</li>
                            <li>Implemented multiple advanced models for equivalent mutant classification, including:
                                <ul>
                                    <li>A sequential model based on Code2Vec method embeddings</li>
                                    <li>A transformer model utilizing Code2Vec method embeddings</li>
                                    <li>A CodeBERT model leveraging natural language processing techniques</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>My Campus Hubs: AI Assistant</h3>
                        <ul>
                            <li>Developed a sophisticated, chat-based campus assistant leveraging Retrieval-Augmented Generation (RAG) technology to retrieve the most recent information about the university</li>
                            <li>Engineered a 13 million line structured dataset from over 40 million lines of webscrapped unstructured html data from a universities website</li>
                            <li>Tested 10+ open-source Large Langauge models with the custom dataset to determine which model would give the ultimate user experience</li>
                            <li>Crafted and tested a custom prompt to ensure the model had the best intructions to provide over 15,000 students with the correct and up-to-date information</li>
                            <li>Designed a custom pipeline that pieces together this ultra-complex AI Assistant</li>
                        </ul>
                    </div>
                    <div>
                        <h3>HealthG: Advanced Fitness Assistant</h3>
                        <ul>
                            <li>Developed a sophisticated, chat-based health assistant leveraging Retrieval-Augmented Generation (RAG) technology, integrating Ollama language models with a user-friendly Gradio interface for personalized health and fitness advice.</li>
                            <li>Engineered a flexible system featuring custom embedding integration (using Hugging Face embeddings) and efficient memory management, demonstrating proficiency in PyTorch, Llama Index, and state-of-the-art language models.</li>
                            <li>Implemented advanced features including persistent chat storage, long-term memory, and user-specific chat history to enhance the assistant's contextual understanding and provide personalized responses.</li>
                            <li>Designed an intuitive UI with user authentication, allowing for personalized chat experiences and easy access to past conversations.</li>
                            <li>Developed a modular architecture with separate utility classes for Gradio integration, model loading, and chat engine setup, enhancing code maintainability and scalability.</li>
                            <li>Incorporated GPU optimization techniques, including device-specific model loading, to improve performance and resource utilization.</li>
                            <li>Implemented robust chat functionality with streaming responses, new chat creation, and example queries to enhance the application's usability and user experience.</li>
                            <li>Integrated advanced NLP techniques such as custom system prompts, chat memory management, and context-aware responses to improve the quality and relevance of the assistant's health-related outputs.</li>
                            <li>Demonstrated strong skills in ML engineering, AI application design, and the integration of RAG technology to create a focused, health-centric conversational AI application.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Image Alter</h3>
                        <ul>
                            <li>Developed a Gradio-based web application for image generation and editing using state-of-the-art Stable Diffusion models</li>
                            <li>Implemented both text-to-image and image-to-image functionalities, allowing users to create and modify images with natural language prompts</li>
                            <li>Integrated advanced Stable Diffusion models including Flux Schnell, Flux Dev, and a custom fine-tuned model</li>
                            <li>Designed an intuitive user interface with customizable parameters such as image dimensions, number of inference steps, guidance scale, and seed selection</li>
                            <li>Incorporated features for generating multiple images simultaneously and maintaining an output gallery for user convenience</li>
                            <li>Optimized model loading and inference using PyTorch and CUDA for efficient GPU utilization</li>
                            <li>Implemented responsive design elements and custom CSS styling for an enhanced user experience</li>
                            <li>Utilized the Hugging Face Diffusers library to leverage pre-trained models and pipelines effectively</li>
                            <li>Created a modular codebase with separate utility functions for text-to-image and image-to-image processes, promoting code reusability and maintainability</li>
                        </ul>
                    </div>
                    <h2>Check out my projects page to see pictures and to find GitHub links for these projects.</h2>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Education</h2>
                    <div>
                    <img style={{width: 200, height: 200}} src={TULogo} alt="Towson Logo" />
                        <h3>Bachelor of Science in Computer Science, Software Engineering Concentration</h3>
                        <p>Towson University, Towson, MD | Jan 2022 - Dec 2023</p>
                        <p><strong>Coursework:</strong> Artificial Intelligence, Database Management Systems, Software Quality Testing & Assurance, Data Communications and Networking, Data Structures and Algorithms, Requirement Analysis and Modeling, Programming Languages: Design and Implementation, Operating Systems, Software Project Practicum,  Software Engineering, Web Based Programming</p>
                    </div>
                    <div>
                    <img style={{width: 200, height: 200}}src={HCCLogo} alt="HCC Logo" />
                        <h3>Associate of Science in Computer Science</h3>
                        <p>Howard Community College, Columbia, MD | Aug 2019 - Dec 2021</p>
                        <p><strong>Coursework:</strong> Computer Science I: Intro to C++, Computer Sceince II: Advanced C++ , Intro to Python</p>
                    </div>
                </AnimatedSection>
                <SocialLinks animationType="pulse" />
            </div>
        </Fragment>
    );
};

export default Resume;