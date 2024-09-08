import React, { Fragment } from 'react';
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
                    <p>I am an innovative Machine Learning Engineer and Researcher specializing in Natural Language Processing (NLP), actively seeking opportunities to advance AI technology. With extensive experience in developing cutting-edge AI Assistants and implementing advanced NLP techniques, including Retrieval-Augmented Generation (RAG), 
                        I excel at leveraging large language models for versatile, high-impact solutions. 
                        <br/>My expertise spans the entire machine learning world, from data preprocessing and model fine-tuning to deploying scalable ML solutions in production environments. Proficient in Python, PyTorch, and TensorFlow, 
                        I am adept at using a large scope of Machine Learning and Data Sceince libraries such as Hugging Face, Transformers, and Diffusers to name a few. My technical skills extend to big data technologies, version control, and containerization, enabling me to develop robust, efficient AI systems. 
                        <br/>Passionate about solving complex problems and pushing AI boundaries, I focus on advancing language model capabilities, 
                        exploring novel approaches to knowledge integration, and developing more efficient and interpretable NLP models. 
                        <br/>While my primary expertise lies in NLP, I am eager to explore new machine learning frontiers, including multimodal learning and the application of AI in emerging fields such as healthcare and climate science. 
                        Driven by the potential of AI to transform industries and improve lives, I am committed to contributing to groundbreaking research and developing innovative solutions that redefine the possibilities in artificial intelligence.</p>
                </AnimatedSection>

                <AnimatedSection>
                    <h2>Skills</h2>
                    <h3 style={{marginBottom:40}}><strong>Programming Languages</strong></h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <span className="skill-name">Python</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Javascript</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "75%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">C++</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "50%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Java</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "25%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">CSS</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "65%"}}></div>
                            </div>
                        </div>

                    </div>

                    <h3><strong>Machine Learning/Data Science</strong></h3> 
                    <p>Frameworks/Libraries: PyTorch, TensorFlow, Scikit-Learn, Transformers, Diffusers, PIL, HuggingFace, Langchain, Llama-Index, Llama Parse, Gradio, Pandas, NumPy</p>
                    <p>Data Stores: Milvus, ChromaDB, Neo4j</p>
                    <p>Skills: Retrieval-Augmented Generation, Prompt Engineering, Data Preprocessing, Synthetic Data Creation, Feature Engineering </p>
                    
                    <h3><strong>Tools & Platforms</strong></h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <span className="skill-name">Git</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "99%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">PyCharm</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "95%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">VS Code</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "70%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Conda</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Jupyter</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "35%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Docker</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "25%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">NVIDIAs AI Workbench</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "25%"}}></div>
                            </div>
                        </div>
                    </div>
            
                    <h3><strong>Operating Systems</strong></h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <span className="skill-name">Linux</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "85%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Windows 11</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "95%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">Windows 10</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "95%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name">MacOS</span>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "55%"}}></div>
                            </div>
                        </div>
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
                            <li>Earned a Letter of Recommendation from Upper Management for designing and helping to implement a plan to revamp our locations day to day operations, increasing overall productivity by 157% and customer satisfaction</li>
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
                            <li>Developed a sophisticated, chat-based coding assistant leveraging Retrieval-Augmented Generation (RAG) technology, integrating multiple language model providers (Ollama, HuggingFace, NVIDIA NIMs, OpenAI, and Anthropic) with a user-friendly Gradio interface.</li>
                            <li>Engineered a flexible system featuring dynamic model switching, custom embedding integration (using Hugging Face embeddings), and efficient memory management, demonstrating proficiency in PyTorch, Llama Index, and state-of-the-art language models.</li>
                            <li>Designed an intuitive UI with provider-specific controls, allowing users to fine-tune model behavior and easily switch between different AI providers.</li>
                            <li>Incorporated error handling, GPU memory management, and informative user notifications to enhance the application's robustness and user experience.</li>
                            <li>Demonstrated strong skills in ML engineering, AI application design, and integration of multiple AI services into a cohesive, user-centric application.</li>
                            <li><strong>Implemented key features including:</strong>
                            <ul style={{paddingLeft: '20px' }}>
                                <li>- Customizable model parameters (temperature, max tokens, top-p, context window)</li>
                                <li>- Support for various file types including PDFs, Word documents, and code files</li>
                                <li>- Context-aware document retrieval from local files and GitHub repositories</li>
                                <li>- Custom prompts and chat memory management</li>
                                <li>- Quantization options for HuggingFace models</li>
                                <li>- Streamed responses for real-time interaction</li>


                            </ul>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h3>Automatic Identification of Equivalent Mutants</h3>
                        <ul>
                            <li>Excelled as a member of a Scrum Team, engaged in sprint planning, daily standups, and sprint reviews</li>
                            <li>Investigated and implemented the use of a transformer-based model for the task of binary classification for automatic equivalent mutant identification.</li>
                            <li>Optimized data preprocessing, added and tuned hyperparameters, and increased overall performance by 145%</li>
                            <li>Condensed research and outcomes into a comprehensive formal report my team and I presented at a campus research fair</li>
                        </ul>
                    </div>
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
                <SocialLinks />
            </div>
        </Fragment>
    );
};

export default Resume;