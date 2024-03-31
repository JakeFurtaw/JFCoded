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
                        <Link to="https://github.com/JakeFurtaw">My Github</Link>
                    </li>
                    <li>
                        <Link to="https://gitlab.com/JakeFurtaw">My Gitlab</Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/jacob-furtaw/">My LinkedIn</Link>
                    </li>
                </ul>
                <p>Coded By: Jacob Furtaw
                </p>
                <p></p>
            </nav>
        </footer>
    );
};

export default Footer;
