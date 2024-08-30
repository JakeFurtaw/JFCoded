import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import "../stylesheets/Resume.css";

import Navbar from '../components/Navbar';
import TULogo from '../images/tulogo.png';
import HCCLogo from '../images/hcc.jpg';
import SocialLinks from '../components/SocialLinks';

import resumeFile from '../files/Jacob_Furtaw_Resume.pdf';

const AnimatedSection = ({ children, threshold = 0.1 }) => {
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
                    <p>I am an innovative Machine Learning Engineer/Researcher specializing in Natural Language Processing (NLP), seeking opportunities to advance AI technology. Experienced in developing cutting-edge AI Assistants and implementing advanced NLP techniques including RAG. Skilled in leveraging large language models for versatile, high-impact solutions. Expertise spans data preprocessing, model fine-tuning, and deploying scalable ML solutions. I am passionate about solving complex problems and pushing AI boundaries, with a focus on NLP but open to exploring new machine learning frontiers.</p>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Skills</h2>
                    <ul>
                        <li><strong>Machine Learning/Data Science:</strong> PyTorch, TensorFlow, Scikit-Learn, Transformers, HuggingFace, Langchain, Llama-Index, Gradio, Pandas, NumPy, Data Preprocessing, Synthetic Data Creation, Retrieval-Augmented Generation</li>
                        <li><strong>Programming Languages:</strong> Python, JavaScript (Node.js), CSS, C++, Java</li>
                        <li><strong>Tools & Platforms:</strong> Git, Docker, Linux, Windows, Jupyter, PyCharm, VS Code, Nvidia AI Workbench</li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Work Experience</h2>
                    <div>
                        <h3>Machine Learning Engineer/Researcher</h3>
                        <p>SurgePoint Software | Aug 2023 - Present</p>
                        <ul>
                            <li>Developing an innovative AI Assistant using open-source LLMs like Mistral 7B, NeMo 12B, and Llama 3.1 8B</li>
                            <li>Utilizing self-taught data engineering and data preprocessing skills to craft a 13-million-line dataset of web-scraped data</li>
                            <li>Implementing Retrieval-Augmented Generation to increase semantic relevance scores and combat model hallucinations</li>
                            <li>Leveraging self-taught prompt engineering skills to ensure the model has a well-structured prompt and enough context to answer any query a user might input</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Advanced Repair Agent</h3>
                        <p>Geek Squad | Mar 2022 - Present</p>
                        <ul>
                            <li>Earned a Letter of Recommendation from Upper Management for designing and helping to implement a plan to revamp our locations day to day operations, increasing overall productivity by 57% and customer satisfaction</li>
                            <li>Executing tens of thousands of Software and Hardware fixes on desktops, laptops, tablets, and cell phones</li>
                            <li>Receiving an award for Top Performing ARA at our location every quarter and was in the top 3% in our District and Region</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Projects</h2>
                    <div>
                        <h3>Chat RAG</h3>
                        <ul>
                            <li>Developing an advanced, chat-based coding assistant using Retrieval-Augmented Generation technology, integrating multiple language model providers(HuggingFace, Ollama, NVIDIA NIMS, Anthropic, and OpenAI), and implementing a user-friendly Gradio UI.</li>
                            <li>Engineering a flexible system with dynamic model switching, custom embedding integration, and efficient memory management, showcasing proficiency in PyTorch, Llama Index, and state-of-the-art language models.</li>
                            <li>Implementing key features including context-aware document retrieval, streamed responses for real-time interaction, and quantization options, demonstrating strong skills in ML engineering and AI application design.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Automatic Identification of Equivalent Mutants</h3>
                        <p>Towson University, Towson, MD</p>
                        <ul>
                            <li>Excelled as a member of a Scrum Team, engaged in sprint planning, daily standups, and sprint reviews</li>
                            <li>Investigated and implemented the use of a transformer-based model for the task of binary classification</li>
                            <li>Optimized data preprocessing, added and tuned hyperparameters, and increased overall performance</li>
                            <li>Condensed research and outcome into a comprehensive formal report my team presented at a campus research fair</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Education</h2>
                    <div>
                        <h3>Bachelor of Science in Computer Science, Software Engineering Concentration</h3>
                        <p>Towson University, Towson, MD | Jan 2022 - Dec 2023</p>
                        <p><strong>Related Coursework:</strong> Artificial Intelligence, Database Management Systems, Software Quality Testing & Assurance, Data Structures and Algorithms, Requirement Analysis and Modeling</p>
                    </div>
                    <div>
                        <h3>Associate of Science in Computer Science</h3>
                        <p>Howard Community College, Columbia, MD | Aug 2019 - Dec 2021</p>
                    </div>
                </AnimatedSection>
                <SocialLinks />
            </div>
        </Fragment>
    );
};

export default Resume;