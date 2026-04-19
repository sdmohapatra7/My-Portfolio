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
          A results-driven <strong>Frontend Engineer</strong> with a rigorous Master's foundation in Mathematics. 
          Currently at <strong>Kaizeninfocomm</strong>, I architect high-performance restaurant dashboards 
          and franchise management ecosystems using <strong>React.js</strong> and <strong>Native JavaScript</strong>. 
          I specialize in building <strong>Scalable UI Architectures</strong> and integrating 
          secure, global payment engines like <strong>Stripe & Razorpay</strong>. 
          By bridging the logic of <strong>Mathematics</strong> with the creativity of 
          <strong>Web Development</strong>, I build digital experiences that are as 
          technically robust as they are visually stunning.
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

        <a
          href={resume_url}
          target="_blank"
          rel="noreferrer"
          className="btnResume"
          style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}
        >
          Resume
        </a>

      </div>
    </>
  );
};