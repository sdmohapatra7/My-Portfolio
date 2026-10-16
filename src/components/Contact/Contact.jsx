import React, { useState } from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { ThemeContext } from "../../context/Theme";

export const Contact = () => {
    const [{ themename }] = React.useContext(ThemeContext);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText("sdmohapatra7@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <>
            <div className="section" data-aos="fade-up">
                <h2 className="section__title">
                    Get in <span className="different">Touch</span>
                </h2>

                <div className={`contact-wrapper ${themename}`}>
                    {/* Live Availability Badge */}
                    <div className="availability-badge" data-aos="fade-down">
                        <span className="live-status-dot"></span>
                        <span>Available for Full-Time Software Engineer Roles & Collaborations</span>
                    </div>

                    <p className="contact-subtitle">
                        Whether you have a full-time role, a high-impact engineering challenge, or just want to chat about 
                        scalable frontend architectures and mathematics — my inbox is always open!
                    </p>

                    <div className="contact-cards-grid">
                        {/* Email Card with Quick Copy */}
                        <div className="contact-card interactive-card">
                            <div className="contact-card-icon email-icon">
                                <CgMail />
                            </div>
                            <div className="contact-card-info">
                                <span className="card-tag">Email Me</span>
                                <h4>sdmohapatra7@gmail.com</h4>
                                <div className="contact-card-btns">
                                    <a
                                        href="mailto:sdmohapatra7@gmail.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-action-btn mail-link"
                                    >
                                        Send Mail ↗
                                    </a>
                                    <button
                                        onClick={handleCopyEmail}
                                        className={`card-action-btn copy-link ${copied ? "copied-active" : ""}`}
                                        title="Copy email to clipboard"
                                    >
                                        {copied ? <DoneAllIcon fontSize="inherit" /> : <ContentCopyIcon fontSize="inherit" />}
                                        <span>{copied ? "Copied!" : "Copy"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Phone & WhatsApp Card */}
                        <div className="contact-card interactive-card">
                            <div className="contact-card-icon phone-icon">
                                <BsFillTelephoneFill />
                            </div>
                            <div className="contact-card-info">
                                <span className="card-tag">Call or WhatsApp</span>
                                <h4>+91 9777887204</h4>
                                <div className="contact-card-btns">
                                    <a
                                        href="tel:+919777887204"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-action-btn phone-link"
                                    >
                                        Direct Call ↗
                                    </a>
                                    <a
                                        href="https://wa.me/919777887204?text=Hi%20Shaktidhar,%20I%20saw%20your%20portfolio!"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-action-btn wa-link"
                                    >
                                        <BsWhatsapp fontSize="inherit" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="contact-card static-card">
                            <div className="contact-card-icon location-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-card-info">
                                <span className="card-tag">Location</span>
                                <h4>Bhubaneswar / Baripada, Odisha</h4>
                                <span className="action-hint">Open to Remote & Hybrid</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Hub Links (Preserving all original links) */}
                    <div className="contactcontainer" data-aos="fade-up">
                        <a
                            href="https://www.linkedin.com/in/shaktidhar-mohapatra/"
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn linkedin-btn"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/sdmohapatra7/"
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn github-btn"
                            aria-label="GitHub"
                        >
                            <VscGithub />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="mailto:sdmohapatra7@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn email-btn"
                            aria-label="Email"
                        >
                            <CgMail />
                            <span>Email</span>
                        </a>
                        <a 
                            href="tel:+919777887204" 
                            target="_blank" 
                            rel="noreferrer"
                            className="social-btn phone-btn"
                            aria-label="Phone"
                        >
                            <BsFillTelephoneFill />
                            <span>Call</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};