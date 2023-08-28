import React from "react";
import "./Projects.css";
import { FaVuejs,FaReact } from "react-icons/fa";
import todo from '../../assets/todo.png' ;
import habit from '../../assets/habit.png' ;
import auth from '../../assets/auth.png' ;
import hospital from '../../assets/hospital.png' ;
import album from '../../assets/album.png' ;
import ecommerce from '../../assets/ecommerce.png' ;

import {
    SiHtml5,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiPostman,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
    return (
        <>
            <div className="section">
                <h2 className="section__title different">Projects</h2>
                <div className="allProjects">
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src={habit}
                                        alt="Habit Tracker"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Habit Tracker</h2>
                                <p>
                                A Habit tracker for tracking all user created Habits. Create and delete any habit.View of weekly of habit status. Habit status changed to DONE, NOT DONE, UNMARKED.
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <FaVuejs />
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
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src={todo}
                                        alt="todo-App"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Todo List</h2>
                                <p>
                                This project involves creating a simple web-based To-Do List application. The application allows users to add, view, and delete tasks from their to-do list. 
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <FaVuejs />
                                </div>
                                <div>
                                    <a
                                        href="https://todoapp-wkiv.onrender.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
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
                                The Node.js Authentication System project aims to create a secure user authentication system with user registration, login, and account management capabilities. This system provides a foundation for building secure web applications.
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <FaVuejs />
                                </div>
                                <div>
                                    <a
                                        href="https://www.npmjs.com/package/apijs-mongo"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            See this Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/Shreyasgkhakal100/API.JS-Mongo"
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

                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src={hospital}
                                        alt="Hospital Api(Backend)"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Hospital Api-Backend</h2>
                                <p>
                                    Backend API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients. CRUD
                                    operations for Ductors and Patients.
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
                                            URL for the API
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
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src={album}
                                        alt="React-Album"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>React-Album</h2>
                                <p>
                                    The React Album project aims to create a web application where users can view, organize, and manage their albums. This project will allow you to apply your React skills to build a responsive and user-friendly interface for interacting with data.
                                </p>
                                <div>
                                    <FaReact />
                                    <IoLogoJavascript />
                                    <SiHtml5 />
                                    <DiCss3 />
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
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src={ecommerce}
                                        alt="e-Commerce App"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>e-Commerce App</h2>
                                <p>
                                This project aims to develop an E-commerce web application using the MERN stack, allowing users to browse products, add items to their cart, make purchases, and manage their orders.
                                </p>
                                <div>
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <FaReact />
                                    <DiCss3 />
                                    <SiHtml5 />
                                    <IoLogoJavascript />
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/sdmohapatra7/Ecommerce_App"
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
                </div>
            </div>

        </>
    );
};