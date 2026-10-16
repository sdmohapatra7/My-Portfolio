import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ProjectSlider.css";

// Assets
import hms from "../../assets/hms.png";
import societypro from "../../assets/societypro.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import salon from "../../assets/salon.png";
import ecommerce from "../../assets/ecommerce.png";

// Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
    SiTypescript,
    SiDotnet,
    SiPython,
    SiDjango,
    SiPostgresql,
    SiSpringboot,
    SiSocketdotio,
    SiRedis,
    SiMongodb,
    SiRedux,
    SiTailwindcss,
    SiExpress,
    SiMicrosoftsqlserver
} from "react-icons/si";

export const ProjectSlider = () => {
    const slides = [
        {
            id: "hms",
            title: "Hospital Management System (HMS)",
            tag: "Enterprise Healthcare ERP",
            architecture: "Clean Architecture • CQRS & MediatR • JWT RBAC",
            image: hms,
            description:
                "Enterprise multi-portal platform supporting Admin, Doctor, Nurse, and Patient workflows. Features Clean Architecture backend with CQRS pattern, secure JWT authentication with refresh token rotation, dynamic vital tracking, and automated billing generation.",
            techIcons: [
                { icon: <FaReact />, name: "React 18" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <SiDotnet />, name: ".NET Core 8 Web API" },
                { icon: <SiMicrosoftsqlserver />, name: "SQL Server / EF Core" }
            ],
            liveUrl: "https://github.com/sdmohapatra7/Hospital-Management-System",
            codeUrl: "https://github.com/sdmohapatra7/Hospital-Management-System",
            stats: [
                { label: "Architecture", value: "Clean & CQRS" },
                { label: "Portals", value: "Admin / Doctor / Patient" },
                { label: "Security", value: "JWT & Refresh Rotation" }
            ]
        },
        {
            id: "societypro",
            title: "Society Maintenance System (SocietyPro)",
            tag: "Full-Stack Housing Society ERP",
            architecture: "Django REST • PostgreSQL • Automated Invoicing",
            image: societypro,
            description:
                "Full-stack ERP system managing data for over 200 homes. Automates monthly maintenance calculations, expense tracking, and invoice delivery. Features custom role-based permissions with JWT and an admin dashboard to adjust tax rates and categories dynamically.",
            techIcons: [
                { icon: <FaReact />, name: "React 18" },
                { icon: <SiPython />, name: "Python 3" },
                { icon: <SiDjango />, name: "Django" },
                { icon: <SiPostgresql />, name: "PostgreSQL" }
            ],
            liveUrl: "https://society-maintenance.onrender.com/",
            codeUrl: "https://github.com/sdmohapatra7/society_maintenance",
            stats: [
                { label: "Scale", value: "200+ Homes" },
                { label: "Efficiency", value: "100% Automated Bills" },
                { label: "Security", value: "Role-Based Access" }
            ]
        },
        {
            id: "whatsapp",
            title: "WhatsApp Clone (Real-Time Messaging)",
            tag: "Real-Time WebSockets Engine",
            architecture: "Spring Boot • WebSockets • Zustand • PostgreSQL",
            image: whatsapp,
            description:
                "Scalable instant chat application with sub-100ms latency. Supports one-on-one chats, group messaging, live typing indicators, and read receipts. Features Zustand persistent state management and high-throughput Java Spring Boot queries.",
            techIcons: [
                { icon: <FaReact />, name: "React 18" },
                { icon: <FaJava />, name: "Java 17" },
                { icon: <SiSpringboot />, name: "Spring Boot" },
                { icon: <SiSocketdotio />, name: "WebSockets" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiRedux />, name: "Zustand" }
            ],
            liveUrl: "https://whatsup-clone-delta.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/whatsup_clone",
            stats: [
                { label: "Latency", value: "< 100ms" },
                { label: "Protocol", value: "WebSockets Full-Duplex" },
                { label: "State", value: "Zustand Store" }
            ]
        },
        {
            id: "linkedin",
            title: "LinkedIn Clone (Professional Networking)",
            tag: "High-Traffic Social Platform",
            architecture: "Node.js 20 • Socket.io • Redis Caching • MongoDB",
            image: linkedin,
            description:
                "Full-featured professional network platform supporting 1,000+ concurrent active sessions. Includes post publishing with Cloudinary media processing, instant real-time likes/comments, and feed load times under 200ms via Redis caching.",
            techIcons: [
                { icon: <FaReact />, name: "React 18" },
                { icon: <FaNodeJs />, name: "Node.js 20" },
                { icon: <SiSocketdotio />, name: "Socket.io" },
                { icon: <SiRedis />, name: "Redis Cache" },
                { icon: <SiMongodb />, name: "MongoDB" }
            ],
            liveUrl: "https://linkdin-clone-gray.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/linkdin_clone",
            stats: [
                { label: "Feed Load", value: "< 200ms" },
                { label: "Concurrency", value: "1,000+ Users" },
                { label: "Cache", value: "Redis In-Memory" }
            ]
        },
        {
            id: "salon",
            title: "Salon Booking Application",
            tag: "Full-Stack Appointment Platform",
            architecture: "Redux Toolkit • Tailwind CSS • Formik & Yup",
            image: salon,
            description:
                "Modern multi-step appointment scheduler featuring real-time slot conflict resolution (preventing double bookings with 99.9% uptime). Includes an intuitive admin portal for staff scheduling, service catalog adjustments, and revenue tracking.",
            techIcons: [
                { icon: <FaReact />, name: "React 18" },
                { icon: <SiRedux />, name: "Redux Toolkit" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <FaNodeJs />, name: "Node.js 20" },
                { icon: <SiExpress />, name: "Express" }
            ],
            liveUrl: "https://salon-booking-silk-seven.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/salon_booking",
            stats: [
                { label: "Uptime", value: "99.9% Conflict-Free" },
                { label: "State", value: "Redux Toolkit" },
                { label: "Validation", value: "Formik & Yup" }
            ]
        },
        {
            id: "ecommerce",
            title: "Ecommerce App (ESmart)",
            tag: "Full-Lifecycle Storefront & ERP",
            architecture: "MERN Stack • Razorpay Gateway • PDF Invoicing",
            image: ecommerce,
            description:
                "High-performance e-commerce engine supporting 500+ concurrent shoppers. Features persistent carts, wishlist synchronization, Razorpay checkout, automated background worker for PDF invoice generation, and seller inventory metrics.",
            techIcons: [
                { icon: <FaReact />, name: "React 18" },
                { icon: <SiRedux />, name: "Redux" },
                { icon: <FaNodeJs />, name: "Node.js 20" },
                { icon: <SiExpress />, name: "Express" },
                { icon: <SiMongodb />, name: "MongoDB" }
            ],
            liveUrl: "https://ecommerce-app-eight-steel.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/Ecommerce_App",
            stats: [
                { label: "Concurrency", value: "500+ Shoppers" },
                { label: "Payment", value: "Razorpay Integrated" },
                { label: "Reports", value: "Automated PDF Bills" }
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState("next");
    const [progress, setProgress] = useState(0);
    const touchStartX = useRef(null);
    const slideDuration = 6000; // 6 seconds per slide

    const nextSlide = useCallback(() => {
        setDirection("next");
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setProgress(0);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setDirection("prev");
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    }, [slides.length]);

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? "next" : "prev");
        setCurrentIndex(index);
        setProgress(0);
    };

    // Auto-advance timer with progress bar
    useEffect(() => {
        if (isPaused) return;

        const intervalMs = 50;
        const step = (intervalMs / slideDuration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide();
                    return 0;
                }
                return prev + step;
            });
        }, intervalMs);

        return () => clearInterval(timer);
    }, [isPaused, nextSlide, slideDuration]);

    // Touch Swipe Support
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX.current - touchEndX;

        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        touchStartX.current = null;
    };

    const currentSlide = slides[currentIndex];

    return (
        <div
            className="slider-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            data-aos="fade-up"
        >
            {/* Header info bar */}
            <div className="slider-topbar">
                <div className="slider-pill">
                    <AutoAwesomeIcon className="slider-pill-icon" />
                    <span>FEATURED 3D SPOTLIGHT • {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
                </div>

                <div className="slider-controls-group">
                    <button
                        className="slider-nav-btn prev-btn"
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                        title="Previous Project"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        className={`slider-pause-btn ${isPaused ? "active-pause" : ""}`}
                        onClick={() => setIsPaused(!isPaused)}
                        aria-label={isPaused ? "Play" : "Pause"}
                        title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
                    >
                        {isPaused ? <PlayArrowIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
                    </button>
                    <button
                        className="slider-nav-btn next-btn"
                        onClick={nextSlide}
                        aria-label="Next Slide"
                        title="Next Project"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>

            {/* Main 3D Card with Animated Gradient Beam */}
            <div className="slider-stage">
                <div className={`slider-card ${direction}`} key={currentSlide.id}>
                    {/* Rotating Conic Gradient Beam */}
                    <div className="border-beam"></div>

                    {/* Left: Project Preview Showcase */}
                    <div className="slider-media-pane">
                        <div className="slider-img-container">
                            <img
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                className="slider-img"
                            />
                            <div className="slider-img-overlay"></div>
                            <span className="slider-badge">{currentSlide.tag}</span>
                            <span className="slider-live-beacon">
                                <span className="beacon-dot"></span> LIVE SHOWCASE
                            </span>
                        </div>

                        {/* Fast Stats Row */}
                        <div className="slider-stats-strip">
                            {currentSlide.stats.map((st, i) => (
                                <div key={i} className="slider-stat-box">
                                    <span className="stat-box-val">{st.value}</span>
                                    <span className="stat-box-lbl">{st.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Project Details & Action Buttons */}
                    <div className="slider-info-pane">
                        <div className="architecture-tag">
                            <span>{currentSlide.architecture}</span>
                        </div>

                        <h3 className="slider-title">{currentSlide.title}</h3>

                        <p className="slider-desc">{currentSlide.description}</p>

                        <div className="slider-tech-stack">
                            <span className="tech-label">Technologies:</span>
                            <div className="tech-chips-row">
                                {currentSlide.techIcons.map((t, idx) => (
                                    <div key={idx} className="tech-pill" title={t.name}>
                                        <span className="tech-pill-icon">{t.icon}</span>
                                        <span className="tech-pill-name">{t.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="slider-actions">
                            <a
                                href={currentSlide.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-slider btn-slider-primary"
                            >
                                <span>See this Live</span>
                                <OpenInNewIcon fontSize="small" />
                            </a>
                            <a
                                href={currentSlide.codeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-slider btn-slider-secondary"
                            >
                                <span>View Code</span>
                                <CodeIcon fontSize="small" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Progress Bar */}
            <div className="slider-progress-track">
                <div
                    className="slider-progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Interactive Thumbnail Quick Jump Strip */}
            <div className="slider-thumbnails-track">
                {slides.map((s, idx) => (
                    <button
                        key={s.id}
                        className={`thumb-nav-btn ${currentIndex === idx ? "active-thumb" : ""}`}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Jump to ${s.title}`}
                    >
                        <span className="thumb-idx">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="thumb-title">{s.title.split("(")[0].trim()}</span>
                        {currentIndex === idx && <span className="active-thumb-glow"></span>}
                    </button>
                ))}
            </div>
        </div>
    );
};
