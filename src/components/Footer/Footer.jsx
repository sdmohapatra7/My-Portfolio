import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../context/Theme";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFilePdf } from "react-icons/fa";
import resume_url from "../../config";

export const Footer = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    const scrollToSection = (id) => {
        const sectionId = id.startsWith("#") ? id.substring(1) : id;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className={`footer-wrapper section ${themename}`}>
            <div className="footer-grid">
                {/* Personal Intro */}
                <div className="footer-about">
                    <h3 className="footer-logo">
                        <span className="gradient-text">Shaktidhar Mohapatra</span>
                    </h3>
                    <p>
                        Frontend Engineer & Full-Stack Developer specializing in React.js, TypeScript, and high-performance web systems. 
                        Bridging mathematical logic with seamless user experiences.
                    </p>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Shaktidhar Mohapatra • Designed & Built with Precision
                    </p>
                </div>

                {/* Navigation */}
                <div className="footer-links">
                    <h4>Quick Navigation</h4>
                    <ul>
                        <li><a href="#home" onClick={() => scrollToSection("home")}>Home</a></li>
                        <li><a href="#about" onClick={() => scrollToSection("about")}>About Me</a></li>
                        <li><a href="#skills" onClick={() => scrollToSection("skills")}>Skills & Architecture</a></li>
                        <li><a href="#projects" onClick={() => scrollToSection("projects")}>Featured Projects</a></li>
                        <li><a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a></li>
                        <li>
                            <a 
                                href={resume_url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="footer-resume-link"
                            >
                                <FaFilePdf /> View / Download Resume
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media with Icons */}
                <div className="footer-contact">
                    <h4>Get in Touch</h4>
                    <ul className="connect-list">
                        <li>
                            <a href="https://www.linkedin.com/in/shaktidhar-mohapatra/" target="_blank" rel="noreferrer">
                                <FaLinkedin /> <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/sdmohapatra7" target="_blank" rel="noreferrer">
                                <FaGithub /> <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:sdmohapatra7@gmail.com">
                                <FaEnvelope /> <span>sdmohapatra7@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919777887204">
                                <FaPhone /> <span>+91 9777887204</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
