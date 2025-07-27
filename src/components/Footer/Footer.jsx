import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../context/Theme";

export const Footer = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    return (
        <footer className={`footer-wrapper section ${themename}`}>
            <div className="footer-grid">
                {/* Personal Intro */}
                <div className="footer-about">
                    <h3>Shakti</h3>
                    <p>
                        Passionate about building web apps that are fast, accessible, and delightful. Let's connect and create something impactful.
                    </p>
                    <p>© {new Date().getFullYear()} Shakti • All rights reserved</p>
                </div>

                {/* Navigation */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-contact">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/shaktidhar-mohapatra/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/sdmohapatra7" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="mailto:sdmohapatra7@gmail.com">Email</a></li>
                        <li><a href="tel:+919777887204">📞 +91 9777887204</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
