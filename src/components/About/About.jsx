import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DescriptionIcon from "@mui/icons-material/Description";
import SendIcon from "@mui/icons-material/Send";
import resume_url from "../../config";

export const About = () => {
  return (
    <>
      <div className="about center">
        <div className="hero__status-badge" data-aos="fade-down">
          <span className="pulse-dot"></span>
          <span>Software Engineer @ Vis Network • Full-Stack Engineer</span>
        </div>

        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name gradient-text">Shaktidhar Mohapatra</span>
        </h1>

        <Type />

        <p className="about__desc" data-aos="fade-up">
          A dedicated <strong>Software Engineer & Full-Stack Engineer</strong> with a strong 
          analytical foundation in <strong>Mathematics (81%)</strong> from Fakir Mohan University. 
          Currently at <strong>Vis Network Pvt Ltd</strong>, developing responsive interfaces for the 
          <strong> Axis Startek</strong> project and providing maintenance for the 
          <strong> OneSupport</strong> platform for <strong>IndiGo</strong>. 
          Previously at <strong>Kaizeninfocomm</strong>, I built high-performance restaurant dashboards and POS systems 
          deployed across <strong>50+ branches</strong>, handling <strong>10,000+ daily transactions</strong> with 
          <strong> React.js 18</strong>, <strong>TypeScript</strong>, and payment integrations 
          (<strong>Stripe, Razorpay, PayU</strong>). My passion is writing clean, scalable code and delivering web applications that users truly enjoy.
        </p>

        {/* Senior Developer Interactive Terminal Window */}
        <div className="hero__terminal" data-aos="fade-up">
          <div className="terminal__topbar">
            <div className="terminal__dots">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <div className="terminal__title">
              <span>developer.config.ts</span>
            </div>
            <div className="terminal__badge">
              <span>TypeScript 5.0</span>
            </div>
          </div>
          <div className="terminal__body">
            <pre className="terminal__code">
              <code>
                <span className="code-keyword">const</span> <span className="code-var">softwareEngineer</span> = &#123;<br />
                &nbsp;&nbsp;<span className="code-prop">name</span>: <span className="code-string">"Shaktidhar Mohapatra"</span>,<br />
                &nbsp;&nbsp;<span className="code-prop">currentRole</span>: <span className="code-string">"Software Engineer @ Vis Network Pvt Ltd"</span>,<br />
                &nbsp;&nbsp;<span className="code-prop">enterpriseProjects</span>: [<span className="code-string">"Axis Startek"</span>, <span className="code-string">"IndiGo OneSupport"</span>],<br />
                &nbsp;&nbsp;<span className="code-prop">coreStack</span>: [<span className="code-string">"React 18"</span>, <span className="code-string">"TypeScript"</span>, <span className="code-string">".NET Core 8"</span>, <span className="code-string">"Node.js"</span>],<br />
                &nbsp;&nbsp;<span className="code-prop">analyticalFoundation</span>: <span className="code-string">"M.Sc. Mathematics (81% Honors)"</span>,<br />
                &nbsp;&nbsp;<span className="code-prop">productionMetrics</span>: &#123; <span className="code-prop">restaurantsPowered</span>: <span className="code-num">50</span>, <span className="code-prop">dailyTxns</span>: <span className="code-string">"10,000+"</span> &#125;,<br />
                &nbsp;&nbsp;<span className="code-prop">status</span>: <span className="code-accent">"Building Scalable & Reliable Web Apps"</span><br />
                &#125;;
              </code>
            </pre>
          </div>
        </div>

        {/* Hero Quick Impact Highlights */}
        <div className="hero__stats" data-aos="fade-up">
          <div className="stat-card">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">12+</span>
            <span className="stat-label">Full-Stack Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50+</span>
            <span className="stat-label">Restaurants Powered (SmartEats)</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">600+</span>
            <span className="stat-label">Students Mentored (4.7★)</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="about__actions center" data-aos="fade-up">
          <a
            href={resume_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn--gradient btnResume"
            download="Shaktidhar_Mohapatra_Resume.pdf"
          >
            <DescriptionIcon fontSize="small" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="btn btn--outline"
            style={{ textDecoration: "none" }}
          >
            <SendIcon fontSize="small" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="about__contact center" data-aos="fade-up">
          <a
            href="https://github.com/sdmohapatra7"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:sdmohapatra7@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
            title="Email"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919777887204"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
            title="Call"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/shaktidhar-mohapatra/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  );
};