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
                        <h3
                            className="vertical-timeline-element-title"
                            data-aos="fade-right"
                        >
                            Frontend Developer
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Kaizeninfocomm Pvt. Ltd.
                        </h4>
                        <p data-aos="fade-right">
                            Architecting restaurant dashboards using <strong>React.js</strong>, <strong>jQuery</strong>, and <strong>XSLT</strong>. 
                            Successfully integrated global payment gateways (Stripe, Razorpay) and optimized complex data flows for franchise management modules. 
                            [cite_start]Ensuring mobile-first design and clean architecture[cite: 68, 70].
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date={"July 2023 - July 2024"}
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
                        <h3
                            className="vertical-timeline-element-title"
                            data-aos="fade-right"
                        >
                            Teaching Assistant
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Coding Ninjas
                        </h4>
                        <p data-aos="fade-right">
                            Mentored <strong>600+ students</strong> in Full Stack Web Development and DSA. 
                            Achieved a student satisfaction rating of <strong>4.7/5.0</strong> while resolving over <strong>850+ technical doubts</strong> 
                            [cite_start]and debugging complex codebases[cite: 76, 77].
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date={"2023 (Certification)"}
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
                        <h3
                            className="vertical-timeline-element-title"
                            data-aos="fade-right"
                        >
                            Full Stack Web Development Trainee
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Coding Ninjas Career Camp
                        </h4>
                        <p data-aos="fade-right">
                            Intensive training in MERN Stack, Data Structures, Algorithms, and Java. 
                            [cite_start]Built multiple full-stack projects including E-commerce platforms and Authentication systems[cite: 93].
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
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
                        <h3
                            className="vertical-timeline-element-title"
                            data-aos="fade-right"
                        >
                            Master of Science (Mathematics)
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Fakir Mohan University, Balasore
                        </h4>
                        <p data-aos="fade-right">
                            Specialization in Advanced Mathematics. Developed strong analytical and problem-solving skills 
                            [cite_start]applied to algorithmic logic[cite: 80, 81, 82].
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Aug 2015 - Aug 2019"}
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
                        <h3
                            className="vertical-timeline-element-title"
                            data-aos="fade-right"
                        >
                            Bachelor of Science (Mathematics)
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            MPC Autonomous College, Baripada
                        </h4>
                        <p data-aos="fade-right">
                            Graduated with Honors. [cite_start]Focused on structural design and project management coursework[cite: 83, 84, 85].
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Jul 2014 - May 2016"}
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
                        <h3
                            className="vertical-timeline-element-title"
                            data-aos="fade-right"
                        >
                            Higher Secondary (Science)
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Prince College Of Science, Mayurbhanj
                        </h4>
                        <p data-aos="fade-right">
                            Studied Physics, Chemistry, Mathematics, and IT. Passed with Distinction.
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