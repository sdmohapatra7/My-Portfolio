import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../context/Theme";
import profilePic from "../../assets/sp_image.jpg";



export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section>
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
                Greetings! I am{" "}
                <span className="different">Shaktidhar Mohapatra</span>, a 
                dedicated software engineer hailing from the scenic 
                <span className="different"> Baripada, Odisha</span>.
              </h4>
              <h4>
                I hold a Master's degree in <span className="different">Mathematics</span> (2021) 
                from Fakir Mohan University, which fuels my logical approach to coding. 
                Currently, I channel my expertise as a <span className="different">Frontend Developer</span> 
                at Kaizeninfocomm Pvt Ltd.
              </h4>
              <h4>
                My professional journey was accelerated by an intensive focus on Full Stack 
                Development at <span className="different">Coding Ninjas</span>, where I 
                discovered my passion for building scalable web solutions and mentoring 
                emerging talent.
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