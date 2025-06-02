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
                    <h2>Professional Summary</h2>
                    <p>I’m Jake Furtaw, a Machine Learning Researcher and Engineer specializing in Natural Language Processing and Retrieval-Augmented Generation (RAG). I design and deploy cutting-edge AI assistants, 
                        leveraging tools like PyTorch, LangChain, and Llama-Index to solve complex problems. Mentored by a Senior Data Scientist at NVIDIA, I’ve delivered high-impact projects, 
                        from scalable RAG pipelines to modular chatbots, driving innovation in cross-functional teams. I’m passionate about pushing AI boundaries and eager to contribute to 
                        your organization’s success.

                        <br/><br/><strong style={{fontSize:"1.8rem"}}>Get me on the phone today and lets talk about how I can help your organization thrive!</strong></p>
                </AnimatedSection>

                <AnimatedSection>
                <h2>Skills</h2>
                    <h3 style={{marginBottom:40}}><strong>Programming Languages</strong></h3>
                    <div className="skills-container">
                        <SkillBar name="Python" level={55} />
                        <SkillBar name="Javascript" level={40} />
                        <SkillBar name="C++" level={25} />
                        <SkillBar name="Java" level={25} />
                    </div>

                    <h3><strong>Machine Learning/Data Science</strong></h3> 
                    <p>Frameworks/Dependencies: PyTorch, TensorFlow, Scikit-Learn, Accelerate, Pandas, NumPy, Matplotlib, Transformers, Diffusers, PIL, HuggingFace, Langchain, Llama-Index, Llama Parse, Gradio, Ollama</p>
                    <p>Data Stores: Milvus, ChromaDB, Neo4j</p>
                    <p>Skills: Retrieval-Augmented Generation, Prompt Engineering, Data Engineering, Data Preprocessing, Synthetic Data Creation, Model Training and Finetuning</p>
                    
                    <h3><strong>Tools & Platforms</strong></h3>
                    <div className="skills-container">
                        <SkillBar name="Git" level={99} />
                        <SkillBar name="PyCharm" level={95} />
                        <SkillBar name="Jupyter" level={35} />
                        <SkillBar name="Docker" level={25} />
                        <SkillBar name="VS Code" level={70} />
                        <SkillBar name="Conda" level={90} />
                    </div>

                </AnimatedSection>

                <AnimatedSection>
                    <h2>Work Experience</h2>
                    <div>
                        <h3>Machine Learning Research Engineer</h3>
                        <p>SurgePoint Software | Hybrid | August 2023 - April 2025</p>
                        <ul>
                            <li>Developed an innovative AI Assistant (Chatbot) testing open-source LLMs like Qwen 2.5 7B, Mistral 7B, Mistral-NeMo 12B, and Llama 3.1 8B</li>
                            <li>Utilizing data engineering skills to reduce 200 million lines of unstructured data into a 13-million-line structured dataset, 
                                increasing semantic relevance scores by 50-75%</li>
                            <li>Designing and implementing a Retrieval-Augmented Generation (RAG) pipeline, integrating vector databases (Milvus, ChromaDB) 
                                to supply LLMs with custom datasets, optimizing accuracy and scalability for production use.</li>
                            <li>Collaborating with a 6-person cross-functional startup team in weekly standups and sprint reviews, delivering actionable insights, and 
                                aligning technical efforts with business goals</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3>Advanced Repair Agent</h3>
                        <p>Geek Squad | Mar 2022 - Present</p>
                        <ul>
                            <li>Consistently ranked in the top 3% of all Advanced Repair Agents across our marketplace, resolving hundreds of hardware 
                                and software repairs across diverse devices and operating systems </li>
                            <li>Designing operational improvements alongside new management that increased the team's productivity by over 50% and earned 
                                me a letter of recommendation from upper management </li>
                            <li>Executing tens of thousands of Software and Hardware fixes on desktops, laptops, tablets, and cell phones that are using a variety of 
                                operating systems.</li>
                            <li>Streamlining repair workflows with automation and creating documentation, reducing repair time by 20%-40%</li>

                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Projects</h2>
                                        <div>
                        <h3>Agent Qwen: Multimodal Geek Squad AI Agent</h3>
                        <ul>
                            <li>Developed a Gradio-based chatbot using Qwen2.5-Omni-7B, supporting text, image, audio, and video inputs for device troubleshooting.</li>
                            <li>Implemented custom prompt engineering and report generation to summarize user issues for technicians, enhancing support efficiency.</li>
                            <li>Integrated audio output to provide spoken responses, improving accessibility for a more diverse set of customers, including those preferring auditory feedback.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Chat RAG: Advanced AI Coding Assistant</h3>
                        <ul>
                            <li>Created a RAG-powered chatbot with a Gradio user interface, supporting local and API inference from any of the hundreds of Ollama and HuggingFace models, as well as any models from OpenAI, Anthropic, and NVIDIA NIMS </li>
                            <li>Designed flexible data ingestion from three diverse sources GitHub repositories, local files, and vector stores (Neo4j, Milvus, ChromaDB).</li>
                            <li>Engineered a modular Python architecture with 5+ utilities for model management featuring dynamic model switching, custom prompt integration, model parameter tuning, quantization options, and many more</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Using an ASTNN to Identify Equivalent and Non-Equivalent Code Mutants</h3>
                        <ul>
                            <li>Modernized ASTNN codebase with Python 3.10, Optimized data preprocessing by creating a custom Python parser, added new and tuned existing hyperparameters, and modernized and customized Python training scripts.</li>
                            <li>Investigated and implemented the use of a transformer-based model (CodeBERT) for binary classification</li>
                            <li>Increased the model's F1 and accuracy scores from an average of 79% to 92% using oversampling and undersampling to balance our Java and C mutant dataset</li>
                        </ul>
                    </div>
                    <div>
                        <h3>My Campus Hubs: AI Assistant</h3>
                        <ul>
                            <li>Utilizing data engineering skills to reduce 200 million lines of unstructured data into a 13-million-line structured dataset, increasing semantic relevance scores by 50-75%</li>
                            <li>Designing and implementing a Retrieval-Augmented Generation (RAG) pipeline, integrating vector databases (Milvus, ChromaDB) to supply LLMs with custom datasets, optimizing accuracy and scalability for production use.</li>
                            <li>Impact: Delivered up-to-date info to 15,000+ students with high accuracy.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>HealthG: Personalized Health AI Assistant</h3>
                        <ul>
                            <li>Developed a RAG-driven health chatbot using Mistral-Nemo and Gradio for tailored health advice.</li>
                            <li>Added persistent memory and user authentication for personalized chat histories.</li>
                            <li>Impact: Improved user engagement by 30% through context-aware responses.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Image Alter</h3>
                        <ul>
                            <li>Built a Gradio app for Stable Diffusion image generation with customizable text-to-image settings.</li>
                            <li>Optimized inference with PyTorch and Hugging Face Diffusers for GPU efficiency.</li>
                            <li>Impact: Doubled image output speed for seamless user experience.</li>
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
                        <p><strong>Coursework:</strong> Artificial Intelligence, Database Management Systems, Software Quality Testing & Assurance, 
                        Data Communications and Networking, Data Structures and Algorithms, Requirement Analysis and Modeling, 
                        Programming Languages: Design and Implementation, Operating Systems, Software Project Practicum,  
                        Software Engineering, Web Based Programming</p>
                    </div>
                    <div>
                    <img style={{width: 200, height: 200}}src={HCCLogo} alt="HCC Logo" />
                        <h3>Associate of Arts in Computer Science</h3>
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