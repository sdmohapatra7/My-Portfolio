import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import todo from '../../assets/todo.png';
import habit from '../../assets/habit.png';
import auth from '../../assets/auth.png';
import hospital from '../../assets/hospital.png';
import album from '../../assets/album.png';
import ecommerce from '../../assets/ecommerce.png';
import portfolio from '../../assets/S-logo.jpg'; // Using your logo for the portfolio project

import {
    SiHtml5,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiPostman,
    SiRedux,
    SiJavascript,
    SiCss3
} from "react-icons/si";
// import { DiCss3 } from "react-icons/di";
// import { IoLogoJavascript } from "react-icons/io";

export const Projects = () => {
    return (
        <>
            <div className="section">
                <h2 className="section__title different">Projects</h2>
                <div className="allProjects">
                    
                    {/* Project 1: Ecommerce (Flagship) */}
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={ecommerce} alt="e-Commerce App" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>ESmart E-commerce</h2>
                                <p>
                                    A full-stack e-commerce platform built with the MERN stack. 
                                    Features include user authentication, product search, cart management, 
                                    secure payments, and an admin dashboard for inventory control.
                                </p>
                                <div>
                                    <FaReact />
                                    <SiRedux />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/sdmohapatra7/Ecommerce_App" // Update with live link if available
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            See this Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sdmohapatra7/Ecommerce_App"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Auth System */}
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={auth} alt="Authentication" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>NodeJs Auth System</h2>
                                <p>
                                    A scalable authentication system supporting email sign-up/login, 
                                    Google OAuth integration, and password resets. 
                                    Built with Passport.js and Redis for session management.
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiHtml5 /> {/* EJS Placeholder */}
                                </div>
                                <div>
                                    <a
                                        href="https://authentication-system-wvng.onrender.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            See this Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sdmohapatra7/NodeJs_Authentication"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Habit Tracker */}
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={habit} alt="Habit Tracker" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Habit Tracker</h2>
                                <p>
                                    A productivity tool to track daily habits. Users can create habits, 
                                    mark them as done/not done for the last 7 days, and track their consistency visually.
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiHtml5 />
                                </div>
                                <div>
                                    <a
                                        href="https://habit-tracker-c1id.onrender.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            See this Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sdmohapatra7/Habit_Tracker"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 4: Todo List */}
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={todo} alt="todo-App" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Todo List</h2>
                                <p>
                                    A classic CRUD application to manage daily tasks. 
                                    Features dynamic DOM manipulation and persistent storage using MongoDB.
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiHtml5 />
                                </div>
                                <div>
                                    <a
                                        href="https://todoapp-wkiv.onrender.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            See this Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sdmohapatra7/Todo-Nodejs"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* Project 5: React Album */}
                     <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={album} alt="React-Album" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>React-Album</h2>
                                <p>
                                    A responsive photo album application built with React. 
                                    Demonstrates component lifecycle methods, props, and state management.
                                </p>
                                <div>
                                    <FaReact />
                                    <SiJavascript />
                                    <SiHtml5 />
                                    <SiCss3 />
                                </div>
                                <div>
                                    <a
                                        href="https://sdmohapatra7.github.io/React-Album-List/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            See this Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sdmohapatra7/React-Album-List"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 6: Hospital API */}
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={hospital} alt="Hospital Api" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Hospital API (Backend)</h2>
                                <p>
                                    A REST API for COVID-19 hospital management. 
                                    Allows doctors to register patients and create reports. 
                                    Includes JWT authentication and status filtering.
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiPostman />
                                </div>
                                <div>
                                    <a
                                        href="https://hospitalapi-4hje.onrender.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            API Link
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sdmohapatra7/Hospital_API"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 7: Portfolio (New) */}
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={portfolio} alt="Portfolio" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Personal Portfolio</h2>
                                <p>
                                    The portfolio you are currently viewing. Built with React.js, 
                                    incorporating Material UI, AOS animations, and a fully responsive layout.
                                </p>
                                <div>
                                    <FaReact />
                                    <SiHtml5 />
                                    <SiCss3 />
                                    <SiJavascript />
                                </div>
                                <div>
                                    <a
                                        href="https://sdmohapatra7.github.io/My-Portfolio/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            See this Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sdmohapatra7/My-Portfolio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};