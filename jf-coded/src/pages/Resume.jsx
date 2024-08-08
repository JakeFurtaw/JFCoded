import React, { Fragment } from 'react';
import "../stylesheets/Resume.css";
import Navbar from '../components/Navbar';

const Resume = () => {
    return (
        <Fragment>

        <div className="container">
        <Navbar />
            <header>
                <h1>Jacob Furtaw</h1>
                <p>Machine Learning Engineer</p>
                
            </header>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li><strong>Machine Learning/Data Science:</strong> Python, PyTorch, TensorFlow, Langchain, Llama-Index, Ollama, Scikit-Learn, Pandas, Numpy, HuggingFace, Transformers, Data Preprocessing, BeautifulSoup, Synthetic Data Creation, Hyperparameter Tuning</li>
                    <li><strong>Environment/Version Control:</strong> Git, SVN, Conda, Docker, Linux, Virtual Machines, Jupyter, VS Code, PyCharm, Nvidia AI Workbench</li>
                    <li><strong>Familiar With:</strong> C++, Javascript(Node.js), React, MongoDB, SQL, Flutter</li>
                    <li><strong>Personal:</strong> Problem Solver, Team-player, Self-starter, Innovator, Outgoing, Forward Thinker</li>
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                <div>
                    <h3>Bachelor of Science in Computer Science, Software Engineering Concentration</h3>
                    <p>Towson University, Towson, MD | Jan 2022 - Dec 2023</p>
                </div>
                <div>
                    <h3>Associate of Science in Computer Science</h3>
                    <p>Howard Community College, Columbia, MD | Aug 2019 - Dec 2021</p>
                </div>
            </section>

            <section>
                <h2>Work Experience</h2>
                <div>
                    <h3>Machine Learning Engineer</h3>
                    <p>SurgePoint Software | Aug 2023 - Present</p>
                    <ul>
                        <li>Developing an innovative AI Assistant using cutting-edge open-source LLMs like Mistral 7B, NeMo 12B, and Llama 3.1 8B</li>
                        <li>Utilizing self-taught data engineering and data preprocessing skills to craft a 13-million-line dataset of web-scraped data</li>
                        <li>Implementing Retrieval-Augmented Generation to inject my dataset and increase semantic relevance scores to combat model hallucination</li>
                        <li>Leveraging self-taught prompt engineering skills to ensure the model has a well-structured prompt and enough context to clearly and concisely answer any query a user might input</li>
                    </ul>
                </div>
                <div>
                    <h3>Advanced Repair Agent</h3>
                    <p>Geek Squad | Mar 2022 - Present</p>
                    <ul>
                        <li>Earned a Letter of Recommendation from Upper Management for designing and helping to implement a plan to revamp our locations day to day operations, increasing overall productivity and customer satisfaction</li>
                        <li>Executing tens of thousands of Software and Hardware fixes on desktops, laptops, tablets, and cell phones</li>
                        <li>Receiving an award for Top Performing ARA at our location every quarter and was in the top 3% in our District and Region</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Academic Experience</h2>
                <div>
                    <h3>Machine Learning Project</h3>
                    <p>Towson University, Towson, MD | Jan 2023 - May 2023</p>
                    <ul>
                        <li>Excelled as a member of a Scrum Team, engaged in sprint planning, daily standups, and sprint reviews</li>
                        <li>Investigated and implemented the use of a transformer-based model for the task of binary classification</li>
                        <li>Optimized data preprocessing, added and tuned hyperparameters, and increased overall performance</li>
                        <li>Condensed research and outcomes into a comprehensive formal report my team presented at a campus research fair</li>
                    </ul>
                </div>
                <div>
                    <h3>Oceans</h3>
                    <p>Towson University, Towson, MD | Aug 2023 - Dec 2023</p>
                    <ul>
                        <li>Engineered and Deployed a fully functional social media platform using the MERN stack with a team of four</li>
                        <li>Designed and Integrated features such as user searching, post creation and display algorithm, front-end design</li>
                        <li>Orchestrated weekly meetings and feature implementations with the use of sprints and Trello boards</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Awards</h2>
                <ul>
                    <li>Towson Startup: Secured $1,000 at the Towson College Cup Startup Pitch Competition, Awarded $10,000 and a spot on the Summer 2024 Startup Incubator</li>
                </ul>
            </section>
        </div>
        </Fragment>
    );
};

export default Resume;