import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
    return (
        <>
            <Typewriter
                options={{
                    strings: [
                        "Frontend Developer",
                        "React.js Specialist",
                        "MERN Stack Developer",
                        "Java & DSA Enthusiast",
                        "Open Source Contributor",
                        "Problem Solver",
                        "UI/UX & Mobile-First Designer",
                        "Tech Mentor & Educator"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50
                }}
            />
        </>
    );
};