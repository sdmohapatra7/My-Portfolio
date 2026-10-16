import React, { useState } from "react";
import "./Projects.css";

// Assets
import todo from '../../assets/todo.png';
import habit from '../../assets/habit.png';
import auth from '../../assets/auth.png';
import hospital from '../../assets/hospital.png';
import album from '../../assets/album.png';
import ecommerce from '../../assets/ecommerce.png';
import portfolio from '../../assets/S-logo.jpg';
import whatsapp from '../../assets/whatsapp.png';
import salon from '../../assets/salon.png';
import linkedin from '../../assets/linkedin.png';
import hms from '../../assets/hms.png';
import societypro from '../../assets/societypro.png';

// Icons
import {
    SiHtml5,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiRedux,
    SiJavascript,
    SiCss3,
    SiPostgresql,
    SiSocketdotio,
    SiTypescript,
    SiDotnet,
    SiPython,
    SiDjango,
    SiTailwindcss,
    SiSpringboot,
    SiRedis,
    SiMicrosoftsqlserver
} from "react-icons/si";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { ProjectSlider } from "./ProjectSlider";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import GridViewIcon from "@mui/icons-material/GridView";

export const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [viewMode, setViewMode] = useState("both"); // "both", "slider", "grid"

    const projectsData = [
        // Flagship 1: Hospital Management System (HMS) - From resume
        {
            id: "hms",
            title: "Hospital Management System (HMS)",
            category: "fullstack",
            tag: "Enterprise Healthcare ERP",
            image: hms,
            description: "Architected an enterprise multi-portal system supporting Admin, Doctor, Nurse, and Patient workflows using Clean Architecture, Repository Pattern, and CQRS (MediatR). Implemented RBAC secured with JWT and refresh token rotation, real-time patient vitals tracking, dynamic electronic prescriptions, and automated billing engine.",
            icons: [<FaReact title="React 18" />, <SiTypescript title="TypeScript" />, <SiDotnet title=".NET Core 8 Web API" />, <SiMicrosoftsqlserver title="SQL Server / EF Core" />],
            liveUrl: "https://github.com/sdmohapatra7/Hospital-Management-System",
            codeUrl: "https://github.com/sdmohapatra7/Hospital-Management-System"
        },

        // Flagship 2: Society Maintenance System (SocietyPro) - From resume
        {
            id: "societypro",
            title: "Society Maintenance System (SocietyPro)",
            category: "fullstack",
            tag: "Full-Stack ERP System",
            image: societypro,
            description: "Full-stack ERP system managing data for over 200 homes. Automates monthly maintenance invoices and expense tracking, eliminating manual bookkeeping. Features custom role-based access control (RBAC) with JWT authentication and a dynamic settings dashboard for admins to adjust tax rates, currencies, and categories without pushing new code.",
            icons: [<FaReact title="React 18" />, <SiPython title="Python" />, <SiDjango title="Django" />, <SiPostgresql title="PostgreSQL" />],
            liveUrl: "https://society-maintenance.onrender.com/",
            codeUrl: "https://github.com/sdmohapatra7/society_maintenance"
        },

        // WhatsApp Clone
        {
            id: "whatsapp",
            title: "WhatsApp Clone (Real-Time Messaging)",
            category: "fullstack",
            tag: "Real-Time WebSockets App",
            image: whatsapp,
            description: "Engineered a scalable chat application using WebSockets to enable real-time messaging with sub-100ms latency. Supports one-on-one chats, group conversations, typing indicators, and read receipts. Powered by Zustand persistent state, PostgreSQL, and high-performance Spring Boot backend queries.",
            icons: [<FaReact title="React 18" />, <FaJava title="Java 17" />, <SiSpringboot title="Spring Boot" />, <SiSocketdotio title="WebSockets" />, <SiPostgresql title="PostgreSQL" />, <SiRedux title="Zustand" />],
            liveUrl: "https://whatsup-clone-delta.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/whatsup_clone"
        },

        // LinkedIn Clone
        {
            id: "linkedin",
            title: "LinkedIn Clone (Professional Networking)",
            category: "fullstack",
            tag: "Social Networking Platform",
            image: linkedin,
            description: "A professional networking platform clone featuring user authentication, post creation with Cloudinary multimedia uploads, real-time likes and comments, and a responsive glassmorphic UI. Optimized feed load times to under 200ms using Redis caching and indexed MongoDB collections.",
            icons: [<FaReact title="React 18" />, <FaNodeJs title="Node.js 20" />, <SiSocketdotio title="Socket.io" />, <SiRedis title="Redis" />, <SiMongodb title="MongoDB" />],
            liveUrl: "https://linkdin-clone-gray.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/linkdin_clone"
        },

        // Salon Booking App
        {
            id: "salon",
            title: "Salon Booking App",
            category: "fullstack",
            tag: "Full-Stack Appointment Platform",
            image: salon,
            description: "A comprehensive full-stack application for managing salon appointments. Features dynamic booking engine that calculates real-time slot availability (preventing double bookings with 99.9% uptime), Redux Toolkit state management, Formik & Yup validation, secure checkout, and an admin management portal.",
            icons: [<FaReact title="React 18" />, <SiRedux title="Redux Toolkit" />, <SiTailwindcss title="Tailwind CSS" />, <FaNodeJs title="Node.js 20" />],
            liveUrl: "https://salon-booking-silk-seven.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/salon_booking"
        },

        // ESmart E-commerce
        {
            id: "ecommerce",
            title: "Ecommerce App (ESmart)",
            category: "fullstack",
            tag: "Full-Lifecycle Storefront",
            image: ecommerce,
            description: "High-performance online storefront handling 500+ concurrent shoppers. Features persistent shopping carts, wishlist, product search with faceted filters, integrated Razorpay payment gateway, automated post-purchase PDF invoice generation, and inventory administration.",
            icons: [<FaReact title="React 18" />, <SiRedux title="Redux" />, <FaNodeJs title="Node.js 20" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />],
            liveUrl: "https://ecommerce-app-eight-steel.vercel.app/",
            codeUrl: "https://github.com/sdmohapatra7/Ecommerce_App"
        },

        // NodeJs Auth System
        {
            id: "auth",
            title: "NodeJs Authentication Engine",
            category: "backend",
            tag: "Identity & Security Service",
            image: auth,
            description: "A production-grade authentication system supporting secure email sign-up/login, Google OAuth 2.0 integration, password reset token workflows, Passport.js strategies, and Redis for distributed session management.",
            icons: [<FaNodeJs title="Node.js" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiHtml5 title="HTML5/EJS" />],
            liveUrl: "https://authentication-system-wvng.onrender.com/",
            codeUrl: "https://github.com/sdmohapatra7/NodeJs_Authentication"
        },

        // Habit Tracker
        {
            id: "habit",
            title: "Habit Tracker",
            category: "frontend",
            tag: "Productivity Tool",
            image: habit,
            description: "A visual productivity tool to track daily habits and routines. Users can create habits, log multi-day consistency for the last 7 days, and analyze streak patterns with a clean interactive interface.",
            icons: [<FaNodeJs title="Node.js" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiHtml5 title="HTML5" />],
            liveUrl: "https://habit-tracker-c1id.onrender.com/",
            codeUrl: "https://github.com/sdmohapatra7/Habit_Tracker"
        },

        // Todo List
        {
            id: "todo",
            title: "Task Manager & Todo List",
            category: "backend",
            tag: "CRUD Application",
            image: todo,
            description: "A dynamic task management web app featuring asynchronous CRUD operations, priority filtering, responsive layout, and persistent document storage using MongoDB.",
            icons: [<FaNodeJs title="Node.js" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiHtml5 title="HTML5" />],
            liveUrl: "https://todoapp-wkiv.onrender.com",
            codeUrl: "https://github.com/sdmohapatra7/Todo-Nodejs"
        },

        // React Album
        {
            id: "album",
            title: "React Photo Album",
            category: "frontend",
            tag: "State Management App",
            image: album,
            description: "A responsive interactive photo album application built with React. Demonstrates component lifecycle management, state synchronization, client-side caching, and smooth responsive photo grids.",
            icons: [<FaReact title="React" />, <SiJavascript title="JavaScript" />, <SiHtml5 title="HTML5" />, <SiCss3 title="CSS3" />],
            liveUrl: "https://sdmohapatra7.github.io/React-Album-List/",
            codeUrl: "https://github.com/sdmohapatra7/React-Album-List"
        },

        // Hospital API (Backend)
        {
            id: "hospital-api",
            title: "Hospital API (RESTful Backend)",
            category: "backend",
            tag: "Healthcare Backend Service",
            image: hospital,
            description: "A RESTful API engine for healthcare clinic management. Allows healthcare practitioners to register patients, log diagnostic reports with status categorization, and query histories with JWT token authorization.",
            icons: [<FaNodeJs title="Node.js" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiPostman title="Postman" />],
            liveUrl: "https://hospitalapi-4hje.onrender.com",
            codeUrl: "https://github.com/sdmohapatra7/Hospital_API"
        },

        // Personal Portfolio
        {
            id: "portfolio",
            title: "Personal Engineering Portfolio",
            category: "frontend",
            tag: "Personal Brand & Showcase",
            image: portfolio,
            description: "The modern portfolio you are currently experiencing! Built with React.js 18, featuring dynamic gradient color schemes, dark/light themes, AOS scroll animations, and responsive mobile-first UI architecture.",
            icons: [<FaReact title="React 18" />, <SiHtml5 title="HTML5" />, <SiCss3 title="CSS3" />, <SiJavascript title="JavaScript" />],
            liveUrl: "https://sdmohapatra7.github.io/My-Portfolio/",
            codeUrl: "https://github.com/sdmohapatra7/My-Portfolio"
        }
    ];

    const filteredProjects = filter === "all"
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <>
            <div className="section" data-aos="fade-up">
                <h2 className="section__title">
                    Featured <span className="different">Projects & Innovations</span>
                </h2>

                {/* View Mode Switcher */}
                <div className="view-mode-bar" data-aos="fade-up">
                    <button
                        className={`view-toggle-btn ${viewMode === "both" ? "active-view" : ""}`}
                        onClick={() => setViewMode("both")}
                        title="Display both the interactive 3D slider and the project grid"
                    >
                        <span>✨ Complete Experience</span>
                    </button>
                    <button
                        className={`view-toggle-btn ${viewMode === "slider" ? "active-view" : ""}`}
                        onClick={() => setViewMode("slider")}
                        title="Focus on the 3D Interactive Slider"
                    >
                        <ViewCarouselIcon fontSize="small" />
                        <span>3D Interactive Slider</span>
                    </button>
                    <button
                        className={`view-toggle-btn ${viewMode === "grid" ? "active-view" : ""}`}
                        onClick={() => setViewMode("grid")}
                        title="Browse the catalog in grid layout"
                    >
                        <GridViewIcon fontSize="small" />
                        <span>All Projects Grid ({projectsData.length})</span>
                    </button>
                </div>

                {/* 1. 3D Interactive Showcase Slider */}
                {(viewMode === "both" || viewMode === "slider") && (
                    <ProjectSlider />
                )}

                {/* 2. Full Project Catalog Grid */}
                {(viewMode === "both" || viewMode === "grid") && (
                    <div className="grid-catalog-section" data-aos="fade-up">
                        <div className="catalog-header">
                            <h3 className="catalog-title">
                                {viewMode === "both" ? "Complete Engineering Catalog" : "All Projects Directory"}
                            </h3>
                            <p className="catalog-subtitle">
                                Filter through all enterprise systems, full-stack applications, and open-source tools.
                            </p>
                        </div>

                        {/* Filter Controls */}
                        <div className="projects-filter-container">
                            <button
                                className={`filter-btn ${filter === "all" ? "active" : ""}`}
                                onClick={() => setFilter("all")}
                            >
                                All ({projectsData.length})
                            </button>
                            <button
                                className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
                                onClick={() => setFilter("fullstack")}
                            >
                                Full-Stack & ERP
                            </button>
                            <button
                                className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
                                onClick={() => setFilter("frontend")}
                            >
                                Frontend & UI
                            </button>
                            <button
                                className={`filter-btn ${filter === "backend" ? "active" : ""}`}
                                onClick={() => setFilter("backend")}
                            >
                                Backend & APIs
                            </button>
                        </div>

                        <div className="allProjects">
                    {filteredProjects.map((proj) => (
                        <div key={proj.id} className="projects_container" data-aos="fade-up">
                            <div className="project">
                                <div className="project_videocontainer">
                                    <div className="img-frame">
                                        <img src={proj.image} alt={proj.title} />
                                        <span className="project-badge">{proj.tag}</span>
                                    </div>
                                </div>
                                <div className="project_information">
                                    <h2>{proj.title}</h2>
                                    <p>{proj.description}</p>
                                    <div className="project_tech_icons">
                                        {proj.icons.map((ic, i) => (
                                            <span key={i} className="tech-badge-icon">{ic}</span>
                                        ))}
                                    </div>
                                    <div className="project_buttons">
                                        <a
                                            href={proj.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btns btn-live"
                                        >
                                            See this Live ↗
                                        </a>
                                        <a
                                            href={proj.codeUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btns btn-code"
                                        >
                                            View Code ⌨
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};