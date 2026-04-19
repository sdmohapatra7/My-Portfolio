import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
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
    SiSocketdotio
} from "react-icons/si";




import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiRender, SiPostman } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
    return (
        <>
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">Skills</h2>
                <div className="techsection">
                    <div>
                        <FaReact />
                        <h5>React</h5>
                    </div>
                    <div>
                        <SiJavascript />
                        <h5>Javascript</h5>
                    </div>
                    <div>
                        <FaJava />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <SiJquery />
                        <h5>jQuery</h5>
                    </div>
                    <div>
                        <SiRedux />
                        <h5>Redux</h5>
                    </div>
                    <div>
                        <FaNodeJs />
                        <h5>Nodejs</h5>
                    </div>
                    <div>
                        <SiExpress />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <DiMongodb />
                        <h5>MongoDb</h5>
                    </div>
                    <div>
                        <SiHtml5 />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <DiCss3 />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <SiTailwindcss />
                        <h5>Tailwind</h5>
                    </div>
                    <div>
                        <BsBootstrap />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <SiSass />
                        <h5>SASS</h5>
                    </div>
                    <div>
                        <SiFigma />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <VscGithub />
                        <h5>Github</h5>
                    </div>
                    <div>
                        <SiPostman />
                        <h5>Postman</h5>
                    </div>
                    <div>
                        <SiRender />
                        <h5>Render</h5>
                    </div>
                    <div>
                        <SiVercel />
                        <h5>Vercel</h5>
                    </div>
                    <div>
                        <SiTypescript />
                        <h5>TypeScript</h5>
                    </div>
                    <div>
                        <SiNextdotjs />
                        <h5>Next.js</h5>
                    </div>
                    <div>
                        <SiPostgresql />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div>
                        <SiFirebase />
                        <h5>Firebase</h5>
                    </div>
                    <div>
                        <SiSocketdotio />
                        <h5>Socket.io</h5>
                    </div>
                </div>




            </div>
        </>
    );
};