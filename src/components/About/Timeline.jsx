import React, { useState } from "react";
import "./Timeline.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { ThemeContext } from "../../context/Theme";

export const Timeline = () => {
    const [{ themename }] = React.useContext(ThemeContext);
    const [filter, setFilter] = useState("all");
    const [linecolor, setlinecolor] = React.useState(
        themename === "light" ? "#6366f1" : "#818cf8"
    );

    React.useEffect(() => {
        if (themename === "dark") {
            setlinecolor("#818cf8");
        } else {
            setlinecolor("#6366f1");
        }
    }, [themename]);

    const tickerItems1 = [
        "Software Engineer @ Vis Network",
        "Axis Startek Frontend",
        "IndiGo OneSupport Platform",
        "React.js 18 & TypeScript",
        "SmartEats POS (50+ Restaurants)",
        "Clean Architecture & CQRS",
        "Stripe, Razorpay & PayU",
        "10,000+ Daily Transactions",
        "Deliveroo & UberEats Partner APIs",
        "ASP.NET Core 8 & Spring Boot"
    ];

    const tickerItems2 = [
        "Current Work: Vis Network Pvt Ltd",
        "Bhubaneswar, Odisha",
        "Tenure: Kaizeninfocomm Pvt Ltd",
        "M.Sc. Mathematics Honors (81%)",
        "600+ Students Mentored (4.7★)",
        "Full-Stack Web Engineering",
        "PostgreSQL, SQL Server & Redis",
        "Real-Time WebSockets & Zustand",
        "Docker & Cloud CI/CD Pipelines"
    ];

    const showWork = filter === "all" || filter === "work";
    const showEdu = filter === "all" || filter === "education";

    return (
        <>
            <div className="section mainsection" data-aos="fade-up">
                <h2 className="section__title">
                    Professional <span className="different">Journey 💫</span>
                </h2>

                {/* Sliding Dynamic Marquee / Ticker */}
                <div className="ticker-wrapper" data-aos="fade-up">
                    <div className="ticker-track ticker-left">
                        <div className="ticker-content">
                            {tickerItems1.concat(tickerItems1).map((item, idx) => (
                                <span key={idx} className="ticker-item">
                                    <FlashOnIcon className="ticker-icon" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="ticker-track ticker-right">
                        <div className="ticker-content reverse">
                            {tickerItems2.concat(tickerItems2).map((item, idx) => (
                                <span key={idx} className="ticker-item alt-item">
                                    <RocketLaunchIcon className="ticker-icon" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Interactive Sliding Filter Tabs */}
                <div className="timeline-filter-container" data-aos="fade-up">
                    <button
                        className={`timeline-filter-btn ${filter === "all" ? "active" : ""}`}
                        onClick={() => setFilter("all")}
                    >
                        All Milestones
                    </button>
                    <button
                        className={`timeline-filter-btn ${filter === "work" ? "active" : ""}`}
                        onClick={() => setFilter("work")}
                    >
                        💼 Work Experience
                    </button>
                    <button
                        className={`timeline-filter-btn ${filter === "education" ? "active" : ""}`}
                        onClick={() => setFilter("education")}
                    >
                        🎓 Education & Training
                    </button>
                </div>

                <VerticalTimeline lineColor={linecolor}>
                    {/* 1. Vis Network Pvt Ltd (Current Work) */}
                    {showWork && (
                        <VerticalTimelineElement
                            date={"July 2026 - Present (Current Work)"}
                            contentStyle={{
                                boxShadow: `var(--shadow)`,
                                border: "2px solid var(--clr-primary)",
                                backgroundColor: `var(--clr-card-bg)`,
                                color: `var(--clr-fg)`,
                                backdropFilter: "blur(14px)",
                                borderRadius: "18px",
                            }}
                            contentArrowStyle={{
                                borderRight: "16px solid var(--clr-primary)",
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                                color: "#ffffff",
                                boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)",
                            }}
                            icon={<WorkIcon />}
                        >
                            <div className="current-work-header">
                                <span className="active-pill">
                                    <span className="live-dot"></span>
                                    CURRENT WORK • PRESENT
                                </span>
                                <span className="location-pill">Bhubaneswar, Odisha</span>
                            </div>

                            <h3 className="vertical-timeline-element-title timeline-role">
                                Software Engineer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle timeline-company">
                                Vis Network Pvt Ltd
                            </h4>

                            {/* Client & Platform Projects Banner */}
                            <div className="current-spotlight">
                                <span className="spotlight-badge">CLIENT & ENTERPRISE PROJECTS</span>
                                <h5>Axis Startek & IndiGo OneSupport</h5>
                                <div className="spotlight-stats">
                                    <span className="s-stat">Axis Startek Frontend</span>
                                    <span className="s-stat">IndiGo OneSupport Ops</span>
                                    <span className="s-stat">Core Module Upgrades</span>
                                </div>
                            </div>

                            <div className="timeline-body">
                                <ul className="timeline-bullets">
                                    <li><strong>Axis Startek Project:</strong> Currently focused on frontend development for the <strong>Axis Startek</strong> project, building out new features and making sure the interface is fast and works well on all devices.</li>
                                    <li><strong>IndiGo OneSupport Platform:</strong> Working on maintenance and support for the <strong>OneSupport</strong> platform for <strong>IndiGo</strong>, resolving production bugs, troubleshooting issues, and rolling out routine updates to keep operations running smoothly.</li>
                                    <li><strong>Core Codebase Modernization:</strong> Responsible for analyzing the existing codebase and pushing updates to core modules to keep up with changing client requirements.</li>
                                    <li><strong>Seamless API Integration:</strong> Working closely with backend developers to wire up new APIs and ensure that data flows seamlessly from the database to the user's screen.</li>
                                </ul>

                                <div className="timeline-tech-chips">
                                    <span>React.js 18</span>
                                    <span>TypeScript</span>
                                    <span>Axis Startek</span>
                                    <span>IndiGo OneSupport</span>
                                    <span>RESTful APIs</span>
                                    <span>UI Optimization</span>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    )}

                    {/* 2. Kaizeninfocomm Pvt Ltd */}
                    {showWork && (
                        <VerticalTimelineElement
                            date={"April 2024 - Jan 2026"}
                            contentStyle={{
                                boxShadow: `var(--shadow)`,
                                border: "1.5px solid var(--clr-border)",
                                backgroundColor: `var(--clr-card-bg)`,
                                color: `var(--clr-fg)`,
                                backdropFilter: "blur(14px)",
                                borderRadius: "16px",
                            }}
                            contentArrowStyle={{
                                borderRight: "16px solid var(--clr-primary)",
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                                color: "#ffffff",
                                boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
                            }}
                            icon={<WorkIcon />}
                        >
                            <div className="current-work-header">
                                <span className="past-role-pill">ENTERPRISE TENURE</span>
                                <span className="location-pill">Ahmedabad, Gujarat</span>
                            </div>

                            <h3 className="vertical-timeline-element-title timeline-role">
                                Frontend Developer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle timeline-company">
                                Kaizeninfocomm Pvt. Ltd.
                            </h4>

                            {/* Flagship Project: SmartEats */}
                            <div className="current-spotlight">
                                <span className="spotlight-badge">KEY PROJECT (FROM RESUME)</span>
                                <h5>SmartEats (Restaurant POS & KDS System)</h5>
                                <div className="spotlight-stats">
                                    <span className="s-stat">50+ Restaurants</span>
                                    <span className="s-stat">10,000+ Daily Txns</span>
                                    <span className="s-stat">2,000+ Daily Active Users</span>
                                </div>
                            </div>

                            <div className="timeline-body">
                                <ul className="timeline-bullets">
                                    <li><strong>POS & 50+ Restaurants:</strong> Built web dashboards and a Point of Sale (POS) system deployed across <strong>50+ restaurants</strong> using React.js, jQuery, and AJAX. Refactored legacy code into reusable components, helping pages load about <strong>30% faster</strong>.</li>
                                    <li><strong>Deliveroo & UberEats APIs:</strong> Wired up third-party APIs like Deliveroo and UberEats to pull in orders automatically, eliminating manual entry errors and boosting order volume by <strong>40%</strong>.</li>
                                    <li><strong>Inventory & Overhead Reduction:</strong> Developed inventory and franchise management features to handle purchase invoices and track food waste, helping clients reduce overhead costs by <strong>18%</strong>.</li>
                                    <li><strong>Multi-Gateway Payment Integration:</strong> Integrated payment gateways like Razorpay, PayU, and Stripe to smooth out the checkout process, increasing success rates by <strong>15%</strong>.</li>
                                    <li><strong>Mobile QR-Code Table Ordering:</strong> Created a mobile-friendly web app allowing customers to order directly from their tables using QR codes, actively supporting over <strong>2,000 users daily</strong>.</li>
                                    <li><strong>XSLT & XML Data Pipelines:</strong> Wrote XSLT and XML scripts to render data dynamically on a high-traffic platform handling over <strong>10,000 transactions a day</strong>.</li>
                                </ul>

                                <div className="timeline-tech-chips">
                                    <span>React.js</span>
                                    <span>jQuery & AJAX</span>
                                    <span>XSLT / XML</span>
                                    <span>Stripe</span>
                                    <span>Razorpay</span>
                                    <span>PayU</span>
                                    <span>Deliveroo API</span>
                                    <span>UberEats API</span>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    )}

                    {/* 3. Coding Ninjas TA */}
                    {showWork && (
                        <VerticalTimelineElement
                            date={"July 2023 - March 2024 (Part-time)"}
                            contentStyle={{
                                boxShadow: `var(--shadow)`,
                                border: "1.5px solid var(--clr-border)",
                                backgroundColor: `var(--clr-card-bg)`,
                                color: `var(--clr-fg)`,
                                backdropFilter: "blur(14px)",
                                borderRadius: "16px",
                            }}
                            contentArrowStyle={{
                                borderRight: "16px solid var(--clr-primary)",
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                color: "#ffffff",
                                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                            }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timeline-role">
                                Teaching Assistant
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle timeline-company">
                                Coding Ninjas • Remote
                            </h4>
                            <div className="timeline-body">
                                <ul className="timeline-bullets">
                                    <li>Mentored over <strong>600 students</strong> learning web development. Helped them by reviewing their code, figuring out bugs, and breaking down tough concepts into simple terms.</li>
                                    <li>Maintained an average rating of <strong>4.7 / 5.0</strong> while personally answering over <strong>850 questions</strong> from students.</li>
                                    <li>Walked students through building their final projects, pushing them to solve problems on their own and write clean, standard code.</li>
                                </ul>

                                <div className="timeline-tech-chips">
                                    <span>MERN Stack</span>
                                    <span>Java & DSA</span>
                                    <span>Code Debugging</span>
                                    <span>Mentorship</span>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    )}

                    {/* 4. Career Camp Full Stack */}
                    {showEdu && (
                        <VerticalTimelineElement
                            date={"Jan 2023 - June 2023"}
                            contentStyle={{
                                boxShadow: `var(--shadow)`,
                                border: "1.5px solid var(--clr-border)",
                                backgroundColor: `var(--clr-card-bg)`,
                                color: `var(--clr-fg)`,
                                backdropFilter: "blur(14px)",
                                borderRadius: "16px",
                            }}
                            contentArrowStyle={{
                                borderRight: "16px solid var(--clr-primary)",
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                                color: "#ffffff",
                                boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                            }}
                            icon={<CardMembershipIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timeline-role">
                                Full Stack Web Development (Career Camp)
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle timeline-company">
                                Coding Ninjas
                            </h4>
                            <div className="timeline-body">
                                <p>
                                    Intensive training in <strong>MERN Stack</strong>, Data Structures, Algorithms, and Object-Oriented Programming. 
                                    Built end-to-end applications including authentication systems, e-commerce storefronts, and REST APIs.
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    )}

                    {/* 5. M.Sc. Mathematics */}
                    {showEdu && (
                        <VerticalTimelineElement
                            date={"2019 - 2021"}
                            contentStyle={{
                                boxShadow: `var(--shadow)`,
                                border: "1.5px solid var(--clr-border)",
                                backgroundColor: `var(--clr-card-bg)`,
                                color: `var(--clr-fg)`,
                                backdropFilter: "blur(14px)",
                                borderRadius: "16px",
                            }}
                            contentArrowStyle={{
                                borderRight: "16px solid var(--clr-primary)",
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                                color: "#ffffff",
                                boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                            }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timeline-role">
                                Master of Science in Mathematics (Score: 81%)
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle timeline-company">
                                Fakir Mohan University, Balasore, Odisha
                            </h4>
                            <div className="timeline-body">
                                <p>
                                    Academic Honors: Graduated in the top percentiles with a specialization in Advanced Mathematics. 
                                    Relevant Coursework: <em>Advanced Calculus, Data Analysis, Discrete Mathematics, Linear Algebra, and Statistical Modeling</em>.
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    )}

                    {/* 6. B.Sc. Mathematics */}
                    {showEdu && (
                        <VerticalTimelineElement
                            date={"2015 - 2019"}
                            contentStyle={{
                                boxShadow: `var(--shadow)`,
                                border: "1.5px solid var(--clr-border)",
                                backgroundColor: `var(--clr-card-bg)`,
                                color: `var(--clr-fg)`,
                                backdropFilter: "blur(14px)",
                                borderRadius: "16px",
                            }}
                            contentArrowStyle={{
                                borderRight: "16px solid var(--clr-primary)",
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                                color: "#ffffff",
                                boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
                            }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timeline-role">
                                Bachelor of Science in Mathematics (Score: 70%)
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle timeline-company">
                                Maharaja Purna Chandra Autonomous College, Baripada, Odisha
                            </h4>
                            <div className="timeline-body">
                                <p>
                                    Relevant Coursework: <em>Probability Theory, Applied Mathematics, Computational Methods, and Number Theory</em>.
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    )}

                    {/* 7. Higher Secondary */}
                    {showEdu && (
                        <VerticalTimelineElement
                            date={"2014 - 2016"}
                            contentStyle={{
                                boxShadow: `var(--shadow)`,
                                border: "1.5px solid var(--clr-border)",
                                backgroundColor: `var(--clr-card-bg)`,
                                color: `var(--clr-fg)`,
                                backdropFilter: "blur(14px)",
                                borderRadius: "16px",
                            }}
                            contentArrowStyle={{
                                borderRight: "16px solid var(--clr-primary)",
                            }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                color: "#ffffff",
                                boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                            }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timeline-role">
                                Higher Secondary (Science)
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle timeline-company">
                                Prince College Of Science, Mayurbhanj
                            </h4>
                            <div className="timeline-body">
                                <p>
                                    Studied Physics, Chemistry, Mathematics, and Information Technology.
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    )}

                    <VerticalTimelineElement
                        icon={<StarRateIcon />}
                        iconStyle={{
                            background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                            color: "#ffffff",
                            boxShadow: "0 0 25px rgba(251, 191, 36, 0.6)",
                        }}
                    />
                </VerticalTimeline>
            </div>
        </>
    );
};