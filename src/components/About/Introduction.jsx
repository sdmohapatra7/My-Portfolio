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
                <span className="different">Shaktidhar Mohapatra </span> and I
                am from{" "}
                <span className="different">
                  {" "}
                  Baripada, Odisha (India)
                </span>
                .
              </h4>
              <h4>
                I hold a Master's degree in Mathematics (2021) from{" "}
                <span className="different">
                  Fakir Mohan University, Balasore
                </span>
                . Currently, I am working as a Frontend Developer at{" "}
                <span className="different">Kaizeninfocomm Pvt Ltd</span>.
              </h4>
              <h4>
                My journey into tech started with a rigorous Full Stack Web
                Development training at{" "}
                <span className="different">Coding Ninjas</span>, where I also
                served as a Teaching Assistant.
              </h4>
              
              <h4>Terms that describe me apart from Coding:</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solver{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Continuous Learner{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Tech Mentor{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};