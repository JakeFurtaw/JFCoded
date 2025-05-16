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
                    <p>I’m Jake Furtaw, a Machine Learning Engineer specializing in Natural Language Processing and Retrieval-Augmented Generation (RAG). I design and deploy cutting-edge AI assistants, 
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
                        <p>SurgePoint Software | Hybrid | August 2023 - October 2024</p>
                        <ul>
                            <li>Designed, engineered, and tested an advanced Retrieval-Augmented Generation pipeline that feeds LLMs my
                                custom dataset, using Milvus or ChromaDB, created from the university website to reduce model hallucinations</li>
                            <li>Developed an innovative AI Assistant (Chatbot) using open-source LLMs like Qwen 2.5 7B, Mistral 7B, Mistral-NeMo 12B, and Llama 3.1 8B</li>
                            <li>Utilized self-taught data engineering and data preprocessing skills to craft a 13-million-line structured dataset from 200 million 
                                lines of unstructured web-scraped HTML and PDF data increasing semantic relevance scores by 50-75% depending on the query</li>
                            <li>Leveraged self-taught prompt engineering skills to ensure each tested model has a custom well-structured prompt and 
                                enough context to answer any query a user might input</li>
                            <li>Collaborated with a small, diverse startup team of engineers doing weekly standups and sprint reviews</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3>Advanced Repair Agent</h3>
                        <p>Geek Squad | Mar 2022 - Present</p>
                        <ul>
                            <li>Earned a Letter of Recommendation from Upper Management for designing and helping to implement a plan to revamp our 
                                locations day to day operations, increasing overall productivity by 50% resulting in improved customer satisfaction.</li>
                            <li>Executing tens of thousands of Software and Hardware fixes on desktops, laptops, tablets, and cell phones that are using a variety of 
                                operating systems.</li>
                            <li>Receiving an award for Top Performing Advanced Repair Agent at our location and consistently in the top 3% of all of the Advanced Repair Agents 
                                in our Micro Market and District.</li>
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
                            <li>Built a RAG-powered chatbot with Gradio UI, supporting models from Ollama, Hugging Face, OpenAI, Anthropic, and NVIDIA Nims.</li>
                            <li>Enabled dynamic model switching and data ingestion from GitHub, local files, and vector stores (Neo4j, Milvus, ChromaDB).</li>
                            <li>Impact: Accelerate developer workflows by 40% with flexible, context-aware responses.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Using an ASTNN to Identify Equivalent and Non-Equivalent Code Mutants</h3>
                        <ul>
                            <li>Modernized ASTNN codebase with Python 3.10, adding model persistence and Java mutant support via MutantBench.</li>
                            <li>Developed neural network techniques to detect code mutants, achieving 20% higher accuracy.</li>
                            <li>Collaborated in a Scrum team, driving sprints and reviews to meet project goals.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>My Campus Hubs: AI Assistant</h3>
                        <ul>
                            <li>Created a RAG-based assistant with a 13M-line dataset from 200M lines of university web data.</li>
                            <li>Tested 10+ open-source LLMs with custom prompts to optimize user experience.</li>
                            <li>Impact: Delivered up-to-date info to 15,000+ students with high accuracy.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>HealthG: Personalized Health AI Assistant</h3>
                        <ul>
                            <li>Developed a RAG-driven health chatbot using Mistral-Nemo and Gradio for tailored advice.</li>
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