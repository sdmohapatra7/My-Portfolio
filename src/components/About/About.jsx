import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import DescriptionIcon from "@mui/icons-material/Description";
// import PublicIcon from "@mui/icons-material/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
    return (
        <>
            <div className="about center">
                <h1 data-aos="fade-right" className="mobileHead">
                    Hello, I am <span className="about__name">Shaktidhar Mohapatra</span>
                </h1>
                <Type />
                <p className="about__desc" data-aos="fade-right">
                Dynamic Front End Developer with proven expertise at Kaizen Pvt. Ltd., excelling in Reacts and problem-solving. Successfully enhanced user interfaces and
resolved over 850 student queries as a Teaching Assistant at Coding Ninjas, showcasing adaptability and teamwork. Committed to delivering high-quality,
reusable components that drive project success.
                </p>
                <div className="about__contact center">
                    <a
                        href="https://github.com/sdmohapatra7"
                        aria-label="github"
                        target="_blank"
                        rel="noreferrer"
                        className="link link--icon"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href="mailto:sdmohapatra7@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="mail"
                        className="link link--icon"
                    >
                        <EmailIcon />
                    </a>
                    <a
                        href="tel:+919777887204"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="phone"
                        className="link link--icon"
                    >
                        <PhoneIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shaktidhar-mohapatra/"
                        aria-label="linkedin"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                </div>

                <button
                    className="btnResume"
                    onClick={() => {
                        window.open(
                            "https://drive.google.com/file/d/1XGxmeAjzSSIC9bY7HgkkxgxbZlu67AD5/view?usp=drive_link"
                        );
                    }}
                >
                    Resume
                </button>
            </div>
            <Introduction />
            <Timeline />
            <section id="#skills">
                <Techstacks />
            </section>
        </>
    );
};