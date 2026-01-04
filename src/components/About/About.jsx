import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import resume_url from "../../config";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Shaktidhar Mohapatra</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A performance-driven <strong>Frontend Developer</strong> with a Master's in Mathematics. 
          Currently at <strong>Kaizeninfocomm Pvt Ltd</strong>, I architect dynamic restaurant dashboards and franchise modules using <strong>React.js</strong>, <strong>jQuery</strong>, and <strong>XSLT</strong>. 
          I specialize in integrating secure payment gateways like <strong>Stripe & Razorpay</strong> and optimizing complex data flows. 
          Previously, I mentored <strong>600+ students</strong> in <strong>DSA & Web Development</strong> at Coding Ninjas, honing my ability to solve complex problems with clean, scalable code.
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
            window.open(resume_url);
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