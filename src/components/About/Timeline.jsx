import React from "react";
import "./Timeline.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeContext } from "../../context/Theme";

export const Timeline = () => {
    const [{ themename }] = React.useContext(ThemeContext);
    const [linecolor, setlinecolor] = React.useState(
        themename === "light" ? "#23283e" : "#fcfcfc"
    );

    React.useEffect(() => {
        if (themename === "dark") {
            setlinecolor("#fcfcfc");
        } else {
            setlinecolor("#23283e");
        }
    }, [themename]);
    return (
        <>
            <div className="section mainsection">
                <h2 className="section__title" data-aos="fade-right">
                    My <span className="different">Timeline 💫</span>
                </h2>
                <VerticalTimeline lineColor={linecolor}>
                    <VerticalTimelineElement
                        date={"April 2024 - Present"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                            borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                            border: ` 3px solid var(--clr-primary)`,
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-primary)`,
                        }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Frontend Developer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Kaizeninfocomm Pvt. Ltd.
                        </h4>
                        <p>
                            Architecting high-performance restaurant dashboards and franchise management modules. 
                            Specializing in <strong>React.js</strong> and <strong>jQuery</strong>, I integrate 
                            global payment systems like <strong>Stripe</strong> and <strong>Razorpay</strong> while 
                            optimizing data flow and ensuring a premium user experience.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date={"July 2023 - March 2024"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                            borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                            border: ` 3px solid var(--clr-primary)`,
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-primary)`,
                        }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Teaching Assistant
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Coding Ninjas
                        </h4>
                        <p>
                            Mentored a community of <strong>600+ students</strong> in DSA and Full Stack Web 
                            Development. Resolved over <strong>850+ technical queries</strong> with a 
                            consistently high satisfaction rating of <strong>4.7/5.0</strong>, helping 
                            future developers debug complex codebases and master core concepts.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date={"Jan 2023 - June 2023"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                            borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                            border: ` 3px solid var(--clr-primary)`,
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Full Stack Web Development
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Coding Ninjas (Career Camp)
                        </h4>
                        <p>
                            Intensive training in the <strong>MERN Stack</strong>, Data Structures, and 
                            Algorithms. Built multiple professional projects including secure 
                            authentication systems and dynamic e-commerce platforms.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date={"Aug 2019 - Sep 2021"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                            borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                            border: ` 3px solid var(--clr-primary)`,
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Master of Science (Mathematics)
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Fakir Mohan University, Balasore
                        </h4>
                        <p>
                            Specialization in Advanced Mathematics. Developed a rigorous analytical 
                            mindset and advanced problem-solving capabilities which I now apply to 
                            algorithmic logic and software architecture.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date={"Aug 2016 - Aug 2019"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                            borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                            border: ` 3px solid var(--clr-primary)`,
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Bachelor of Science (Mathematics)
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            MPC Autonomous College, Baripada
                        </h4>
                        <p>
                            Graduated with Honors. Focused on structural logic and computational 
                            methods, laying the foundation for a career in technology and system design.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement

                        date={"July 2014 - May 2016"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                            borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                            border: ` 3px solid var(--clr-primary)`,
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Higher Secondary (Science)
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Prince College Of Science, Mayurbhanj
                        </h4>
                        <p>
                            Studied Physics, Chemistry, Mathematics, and IT. Graduated with 
                            Distinction, solidifying my analytical foundation and early interest 
                            in computing.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        icon={<StarRateIcon />}

                        iconStyle={{
                            border: ` 3px solid var(--clr-primary)`,
                            backgroundColor: `var(--clr-bg)`,
                            color: `var(--clr-primary)`,
                        }}
                    ></VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
};