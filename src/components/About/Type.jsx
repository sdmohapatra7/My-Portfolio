import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
    return (
        <div className="typewriter-wrapper">
            <Typewriter
                options={{
                    strings: [
                        "Frontend Developer",
                        "React.js & TypeScript Specialist",
                        "Full-Stack Web Engineer",
                        "Clean Architecture & System Design",
                        "MERN & Spring Boot Developer",
                        "Java & DSA Problem Solver",
                        "Payment Gateway & API Specialist",
                        "Tech Mentor & Educator"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    delay: 50
                }}
            />
        </div>
    );
};