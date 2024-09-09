import React from 'react';
import '../stylesheets/SocialLinks.css';

const SocialLinks = ({ animationType = 'none' }) => {
    const links = [
        { href: "https://www.linkedin.com/in/jacob-furtaw/", iconClass: "fab fa-linkedin", ariaLabel: "LinkedIn"},
        { href: "https://www.github.com/JakeFurtaw", iconClass: "fab fa-github", ariaLabel: "GitHub"},
        { href: "https://gitlab.com/JakeFurtaw", iconClass: "fab fa-gitlab", ariaLabel: "GitLab"},
        { href: "mailto:jfurtaw97@gmail.com", iconClass: "fas fa-envelope", ariaLabel: "Email"}
    ];

    const getAnimationClass = () => {
        switch(animationType) {
            case 'pulse':
                return 'pulse-icons';
            case 'fly-in':
                return 'fly-in-icons';
            case 'fly-in-pulse':
                return 'fly-in-pulse-icons';
            default:
                return '';
        }
    };

    return (
        <div className={`social-links ${getAnimationClass()}`}>
            {links.map((link, index) => (
                <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={index % 2 === 0 ? "social-icon" : "social-icon2"}
                    aria-label={link.ariaLabel}
                >
                    <i className={link.iconClass}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;