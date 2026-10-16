import React from "react";
import "./Certifications.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export const Certifications = () => {
    const certs = [
        {
            title: "Career Camp | Fullstack Web Development",
            issuer: "Coding Ninjas",
            period: "2023",
            description: "Intensive immersion in Java, Data Structures & Algorithms, MERN Stack (React, Node, Express, MongoDB), System Design, and Object-Oriented Programming.",
            skills: ["MERN Stack", "Java", "DSA", "System Design"],
            badge: "Professional Certification",
            credentialUrl: "https://drive.google.com/file/d/1dWLa8mlQqTWUMFl5l6DKFGvOb87-seno/view?usp=sharing"
        },
        {
            title: "DOEACC 'O' Level in Computer Applications",
            issuer: "NIELIT / DOEACC Society",
            period: "Foundational",
            description: "Comprehensive foundation certification in Computer Systems, Data Processing, Programming Principles, and Web Technologies.",
            skills: ["Computing Foundations", "C Programming", "Databases"],
            badge: "Government Certified",
            credentialUrl: "https://drive.google.com/file/d/1dWLa8mlQqTWUMFl5l6DKFGvOb87-seno/view?usp=sharing"
        }
    ];

    const education = [
        {
            degree: "Master of Science in Mathematics (M.Sc.)",
            institution: "Fakir Mohan University, Balasore, Odisha",
            period: "2019 - 2021",
            score: "81% (First Class with Distinction)",
            details: "Specialized in Advanced Mathematics, Linear Algebra, Discrete Mathematics, and Statistical Modeling. Fostered deep analytical thinking applied to complex algorithms."
        },
        {
            degree: "Bachelor of Science in Mathematics (B.Sc. Hons)",
            institution: "MPC Autonomous College, Baripada, Odisha",
            period: "2015 - 2019",
            score: "70% (Honors with Distinction)",
            details: "Core training in Applied Mathematics, Probability Theory, Computational Methods, and Structural Mathematical Logic."
        }
    ];

    return (
        <div className="section" data-aos="fade-up">
            <h2 className="section__title">
                Certifications & <span className="different">Education</span>
            </h2>

            <div className="cert-edu-grid">
                {/* Certifications Column */}
                <div className="cert-column">
                    <h3 className="column-heading">
                        <WorkspacePremiumIcon className="heading-icon" />
                        <span>Professional Certifications</span>
                    </h3>
                    <div className="cards-stack">
                        {certs.map((c, i) => (
                            <div key={i} className="cert-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="cert-header">
                                    <VerifiedIcon className="verified-icon" />
                                    <span className="cert-badge">{c.badge}</span>
                                </div>
                                <h4>{c.title}</h4>
                                <h5 className="cert-issuer">{c.issuer} • {c.period}</h5>
                                <p>{c.description}</p>
                                <div className="cert-tags">
                                    {c.skills.map((s, idx) => (
                                        <span key={idx} className="cert-tag">{s}</span>
                                    ))}
                                </div>
                                <a 
                                    href={c.credentialUrl} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="cert-link"
                                >
                                    View Credential ↗
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Academic Excellence Column */}
                <div className="edu-column">
                    <h3 className="column-heading">
                        <SchoolIcon className="heading-icon" />
                        <span>Academic Foundation</span>
                    </h3>
                    <div className="cards-stack">
                        {education.map((e, i) => (
                            <div key={i} className="edu-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="edu-score-badge">{e.score}</div>
                                <h4>{e.degree}</h4>
                                <h5 className="edu-inst">{e.institution}</h5>
                                <span className="edu-period">{e.period}</span>
                                <p>{e.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
