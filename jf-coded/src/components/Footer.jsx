import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Footer.css';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/JakeFurtaw">My Github</Link>
                    </li>
                </ul>
                <p>Coded By: Jacob Furtaw & Copilot
                    <br />
                Created: December 2023
                </p>
                <p></p>
            </nav>
        </footer>
    );
};

export default Footer;
