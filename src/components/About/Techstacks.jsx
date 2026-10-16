import React, { useState } from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaJava, FaAws } from "react-icons/fa";
import {
    SiHtml5,
    SiExpress,
    SiTailwindcss,
    SiRedux,
    SiJquery,
    SiSass,
    SiFigma,
    SiTypescript,
    SiVercel,
    SiNextdotjs,
    SiPostgresql,
    SiFirebase,
    SiSocketdotio,
    SiJavascript,
    SiRender,
    SiPostman,
    SiCsharp,
    SiPython,
    SiDotnet,
    SiSpringboot,
    SiDjango,
    SiRedis,
    SiDocker,
    SiVite,
    SiNetlify,
    SiMicrosoftsqlserver
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsFileEarmarkCode } from "react-icons/bs";

export const Techstacks = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const allSkills = [
        // Frontend
        { name: "React", icon: <FaReact />, category: "frontend" },
        { name: "TypeScript", icon: <SiTypescript />, category: "languages frontend" },
        { name: "JavaScript", icon: <SiJavascript />, category: "languages frontend" },
        { name: "Next.js", icon: <SiNextdotjs />, category: "frontend backend" },
        { name: "Redux Toolkit", icon: <SiRedux />, category: "frontend" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
        { name: "HTML5", icon: <SiHtml5 />, category: "frontend" },
        { name: "CSS3", icon: <DiCss3 />, category: "frontend" },
        { name: "SASS", icon: <SiSass />, category: "frontend" },
        { name: "Bootstrap", icon: <BsBootstrap />, category: "frontend" },
        { name: "jQuery", icon: <SiJquery />, category: "frontend" },
        { name: "Zustand", icon: <SiRedux />, category: "frontend" },
        
        // Backend & Frameworks
        { name: ".NET Core 8", icon: <SiDotnet />, category: "backend" },
        { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
        { name: "Express", icon: <SiExpress />, category: "backend" },
        { name: "Spring Boot", icon: <SiSpringboot />, category: "backend" },
        { name: "Django", icon: <SiDjango />, category: "backend" },
        { name: "Socket.io", icon: <SiSocketdotio />, category: "backend" },

        // Languages
        { name: "Java 17", icon: <FaJava />, category: "languages backend" },
        { name: "Python 3", icon: <SiPython />, category: "languages backend" },
        { name: "C#", icon: <SiCsharp />, category: "languages backend" },
        { name: "XML / XSLT", icon: <BsFileEarmarkCode />, category: "languages tools" },

        // Databases & Cloud
        { name: "PostgreSQL", icon: <SiPostgresql />, category: "database" },
        { name: "SQL Server", icon: <SiMicrosoftsqlserver />, category: "database" },
        { name: "MongoDB", icon: <DiMongodb />, category: "database" },
        { name: "Redis", icon: <SiRedis />, category: "database" },
        { name: "Firebase", icon: <SiFirebase />, category: "database cloud" },
        { name: "Docker", icon: <SiDocker />, category: "cloud" },
        { name: "AWS", icon: <FaAws />, category: "cloud" },

        // Tools & Platforms
        { name: "GitHub", icon: <VscGithub />, category: "tools" },
        { name: "Postman", icon: <SiPostman />, category: "tools" },
        { name: "Vite", icon: <SiVite />, category: "tools" },
        { name: "Vercel", icon: <SiVercel />, category: "cloud" },
        { name: "Render", icon: <SiRender />, category: "cloud" },
        { name: "Netlify", icon: <SiNetlify />, category: "cloud" },
        { name: "Figma", icon: <SiFigma />, category: "tools" }
    ];

    const coreConcepts = [
        "RESTful APIs",
        "JWT & RBAC",
        "Unit Testing",
        "ERP Systems",
        "System Design",
        "Scalability",
        "Performance Optimization",
        "MVC Architecture",
        "OOP Principles",
        "Agile Methodology",
        "Clean Architecture & CQRS",
        "Responsive UX"
    ];

    const softSkills = [
        "Analytical Problem Solving",
        "Cross-functional Teamwork",
        "Technical Communication",
        "Agile Adaptability"
    ];

    const filteredSkills = activeFilter === "all"
        ? allSkills
        : allSkills.filter(s => s.category.includes(activeFilter));

    return (
        <>
            <div className="section main" data-aos="fade-up">
                <h2 className="section__title">
                    Technical <span className="different">Skills</span>
                </h2>

                {/* Filter Tabs */}
                <div className="skills-filter-container">
                    <button
                        className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                        onClick={() => setActiveFilter("all")}
                    >
                        All ({allSkills.length})
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === "frontend" ? "active" : ""}`}
                        onClick={() => setActiveFilter("frontend")}
                    >
                        Frontend
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === "backend" ? "active" : ""}`}
                        onClick={() => setActiveFilter("backend")}
                    >
                        Backend & APIs
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === "languages" ? "active" : ""}`}
                        onClick={() => setActiveFilter("languages")}
                    >
                        Languages
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === "database" ? "active" : ""}`}
                        onClick={() => setActiveFilter("database")}
                    >
                        Databases
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === "cloud" ? "active" : ""}`}
                        onClick={() => setActiveFilter("cloud")}
                    >
                        DevOps & Cloud
                    </button>
                </div>

                {/* Continuous Infinite Tech Slider */}
                <div className="tech-slider-marquee" data-aos="fade-up">
                    <div className="tech-marquee-track">
                        {allSkills.concat(allSkills).map((s, i) => (
                            <div key={i} className="tech-marquee-item">
                                <span className="marquee-icon">{s.icon}</span>
                                <span className="marquee-text">{s.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="techsection">
                    {filteredSkills.map((skill, idx) => (
                        <div key={idx} className="tech-card">
                            <div className="tech-icon">{skill.icon}</div>
                            <h5>{skill.name}</h5>
                        </div>
                    ))}
                </div>

                {/* Core Architecture Concepts */}
                <div className="concepts-container" data-aos="fade-up">
                    <h3 className="concepts-title">Core Architecture & Engineering Methodologies</h3>
                    <div className="concepts-chips">
                        {coreConcepts.map((concept, idx) => (
                            <span key={idx} className="concept-chip">
                                {concept}
                            </span>
                        ))}
                    </div>

                    <h4 className="concepts-title" style={{ marginTop: "1.2rem", fontSize: "0.95rem", opacity: 0.85 }}>Professional Soft Skills</h4>
                    <div className="concepts-chips">
                        {softSkills.map((skill, idx) => (
                            <span key={idx} className="concept-chip" style={{ borderColor: "rgba(6, 182, 212, 0.4)", background: "rgba(6, 182, 212, 0.08)" }}>
                                ✦ {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};