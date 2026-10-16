import React from "react";
import "./Introduction.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CodeIcon from "@mui/icons-material/Code";
import { ThemeContext } from "../../context/Theme";
import profilePic from "../../assets/sp_image.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section>
        <div className="section" data-aos="fade-up">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer" data-aos="zoom-in">
              <div className="image_wrapper">
                <div className="floating-orbit-ring"></div>
                <img src={profilePic} alt="Shaktidhar Mohapatra" />
                
                {/* Floating Holographic Badges */}
                <div className="floating-badge float-top-left" title="Current Role">
                  <span className="badge-icon">⚡</span>
                  <span className="badge-text">Vis Network (Current)</span>
                </div>

                <div className="floating-badge float-top-right" title="Proven Track Record">
                  <span className="badge-icon">🚀</span>
                  <span className="badge-text">2+ Yrs Experience</span>
                </div>

                <div className="floating-badge float-bottom-left" title="Core Specialization">
                  <span className="badge-icon">⚛️</span>
                  <span className="badge-text">React 18 & TypeScript</span>
                </div>

                <div className="floating-badge float-bottom-right" title="SmartEats Scale">
                  <span className="badge-icon">🍽️</span>
                  <span className="badge-text">50+ Restaurants Scaled</span>
                </div>

                <div className="experience_badge">
                  <span>Software Engineer @ Vis Network</span>
                </div>
              </div>
            </div>
            <div className="introduction_datacontainer" data-aos="fade-left">
              <h4>
                Greetings! I am{" "}
                <span className="different">Shaktidhar Mohapatra</span>, a 
                dedicated software engineer hailing from scenic 
                <span className="different"> Baripada, Odisha</span>.
              </h4>
              <h4>
                I hold a Master's degree in <span className="different">Mathematics</span> (2021) 
                from Fakir Mohan University with an outstanding score of <strong>81%</strong>, 
                which fuels my deep-rooted logical approach to system architecture and algorithmic design. 
                Currently, I channel my expertise as a <span className="different">Software Engineer</span> 
                at <strong>Vis Network Pvt Ltd</strong>, focusing on frontend development for <strong>Axis Startek</strong> 
                and production operations for <strong>IndiGo OneSupport</strong>.
              </h4>
              <h4>
                Previously, at <span className="different">Kaizeninfocomm</span>, I architected restaurant POS, KDS, 
                and partner dashboards across 50+ branches. My journey also includes mentoring 
                <strong> 600+ students</strong> at <span className="different">Coding Ninjas</span> and resolving 
                <strong> 850+ technical queries</strong> (rated 4.7/5.0).
              </h4>

              {/* Resume Objective Callout */}
              <div className="objective-callout" data-aos="fade-up">
                <span className="objective-label">CAREER OBJECTIVE</span>
                <p>
                  "To use my experience in full-stack development to build reliable web applications that solve real-world problems. Specialized in building enterprise ERP modules, speeding up frontend load times, and integrating payment gateways with clean, readable code."
                </p>
              </div>

              {/* Distinct Bento Grid Architecture Showcase */}
              <div className="about__bento-grid" data-aos="fade-up">
                {/* Bento Card 1: Math Foundation */}
                <div className="bento-card bento-math">
                  <div className="bento-badge">ACADEMIC EXCELLENCE</div>
                  <div className="bento-header">
                    <SchoolIcon className="bento-icon icon-math" />
                    <div>
                      <h5>Mathematical Rigor (81% Honors)</h5>
                      <span className="bento-sub">Fakir Mohan University • Master of Science</span>
                    </div>
                  </div>
                  <p>
                    Deep foundation in <em>Advanced Calculus, Linear Algebra, Statistical Modeling, and Computational Logic</em> directly empowering optimal algorithmic system design and efficient data structures.
                  </p>
                  <div className="bento-chips">
                    <span>Statistical Modeling</span>
                    <span>Algorithmic Optimization</span>
                    <span>81% Top Percentile</span>
                  </div>
                </div>

                {/* Bento Card 2: Vis Network Enterprise */}
                <div className="bento-card bento-vis">
                  <div className="bento-badge badge-live">CURRENT ACTIVE WORK</div>
                  <div className="bento-header">
                    <WorkOutlineIcon className="bento-icon icon-vis" />
                    <div>
                      <h5>Vis Network Pvt Ltd</h5>
                      <span className="bento-sub">Software Engineer • Bhubaneswar, Odisha</span>
                    </div>
                  </div>
                  <p>
                    Spearheading responsive frontend architecture for the <strong>Axis Startek</strong> ecosystem and operational maintenance for <strong>IndiGo OneSupport</strong> platform.
                  </p>
                  <div className="bento-chips">
                    <span>Axis Startek</span>
                    <span>IndiGo OneSupport</span>
                    <span>RESTful APIs</span>
                  </div>
                </div>

                {/* Bento Card 3: Kaizen SmartEats Scale */}
                <div className="bento-card bento-scale">
                  <div className="bento-badge">PRODUCTION SCALE</div>
                  <div className="bento-header">
                    <CodeIcon className="bento-icon icon-scale" />
                    <div>
                      <h5>SmartEats POS & Dashboards</h5>
                      <span className="bento-sub">Kaizeninfocomm • 50+ Restaurants Scaled</span>
                    </div>
                  </div>
                  <p>
                    Scaled high-traffic restaurant management platforms handling <strong>10,000+ daily transactions</strong>. Integrated Deliveroo, UberEats, and multi-currency payment gateways (Stripe, Razorpay, PayU).
                  </p>
                  <div className="bento-chips">
                    <span>10K+ Daily Txns</span>
                    <span>Deliveroo & UberEats</span>
                    <span>Stripe & Razorpay</span>
                  </div>
                </div>

                {/* Bento Card 4: Mentorship & Leadership */}
                <div className="bento-card bento-mentor">
                  <div className="bento-badge">COMMUNITY IMPACT</div>
                  <div className="bento-header">
                    <AutoAwesomeIcon className="bento-icon icon-mentor" />
                    <div>
                      <h5>Mentorship & Teaching</h5>
                      <span className="bento-sub">Coding Ninjas • 600+ Engineers Mentored</span>
                    </div>
                  </div>
                  <p>
                    Maintained an exceptional <strong>4.7 / 5.0</strong> mentorship rating while answering over 850 technical inquiries on DSA, React, and Full-Stack problem solving.
                  </p>
                  <div className="bento-chips">
                    <span>600+ Students</span>
                    <span>850+ Queries</span>
                    <span>4.7 ★ Rating</span>
                  </div>
                </div>
              </div>

              <h4 className="traits-heading">Terms that describe me apart from Coding:</h4>
              <div className="traits-grid">
                <div className="trait-chip">
                  <CheckCircleOutlineIcon className="icons" />
                  <span>Analytical Problem Solver</span>
                </div>
                <div className="trait-chip">
                  <AutoAwesomeIcon className="icons" />
                  <span>Continuous Learner</span>
                </div>
                <div className="trait-chip">
                  <CheckCircleOutlineIcon className="icons" />
                  <span>Tech Mentor & Educator</span>
                </div>
                <div className="trait-chip">
                  <AutoAwesomeIcon className="icons" />
                  <span>Cricket Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};