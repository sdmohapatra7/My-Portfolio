import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../context/Theme";
import profilePic from "../../assets/S-logo.jpg";


export const Introduction = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    return (
        <>
            <section id="#about">
                <div className="section" data-aos="fade-right">
                    <h2 className="section__title">
                        About <span className="different">Me</span>
                    </h2>
                    <div className={"introduction " + themename}>
                        <div className="introduction_logocontainer">
                            <img src={profilePic} alt="Images" />
                        </div>
                        <div className="introduction_datacontainer">
                            <h4>
                                Hi Everyone, My name is{" "}
                                <span className="different">Shaktidhar Mohapatra </span> and I am from{" "}
                                <span className="different">
                                    {" "}
                                    Betnoti, Mayurbhanj, Odisha (India)
                                </span>
                                . I have completed my post graduation in Mathematics (Sep 2021. Msc)
                                from{" "}
                                <span className="different">
                                    FakirMohan University, Balasore (Odisha)
                                </span>
                                . Then I joined full stack development course by{" "}
                                <span className="different">Coding Ninjas</span> a place that trains passionate people in various technologies.
                            </h4>
                            <h4>Terms That can describe me apart form Coding :</h4>
                            <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Hard Worker{" "}
                            </h4>
                            <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Quick Lerner{" "}
                            </h4>
                            <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Teacher{" "}
                            </h4>
                            <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Cricket Lover{" "}
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};