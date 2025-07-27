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
                            textAlign: "center",
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
                        Worked closely with product owners, designers and other stakeholders
                        throughout the development process.Collaborated with back-end developers to integrate user interface
                        elements into applications.Debugged existing code to identify and fix bugs or performance issues.Developed reusable components that can be used in future projects
                        with minimal effort.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date={"July 2023 - Jun 2024"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            textAlign: "center",
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
                            Coding Ninjas (Intensive)
                        </h4>
                        <p data-aos="fade-right">
                            Mentoring and clearing student's doubts via one to one calls/text, Motivating students to do hard work, provides emotional support to them & Helping students to start their career in Tech.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date={"Sep 2022 - Jun 2023"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            textAlign: "center",
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
                            Student
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Coding Ninjas 
                        </h4>
                        <p data-aos="fade-right">
                            Joined the Coding Ninjas to learn Full Stack Web Development
                            and DSA. Also get to learn lot more other skills as well.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Aug 2019 - Sep 2021"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            textAlign: "center",
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
                            Student [MSC (Mathematics)]
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Fakir Mohan University, Balasore, Odisha
                        </h4>
                        <p data-aos="fade-right">
                            Studied Two Year Post Graguation Course In Mathematics . Passed
                            First Class With 81 Percentage.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Aug 2016 - Apr 2019"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            textAlign: "center",
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
                            Student [BSC (Mathematics)]
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            MPC Autonomous College, Baripada, Mayurbjanj 
                        </h4>
                        <p data-aos="fade-right">
                            Studied Three Year Degree Course In Mathematics . Passed
                            First Class Honours With Distinction With 7.43 CGPA.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Jul 2014 - May 2016"}
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            textAlign: "center",
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
                            Student [CHSC (Science)]
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            Prince College Of Science, Pallabani, Mayurbhanj
                        </h4>
                        <p data-aos="fade-right">
                            Studied 12th Science which consists Physics, Chemistry, Math, IT. Passed
                            with 72.67 Percentage.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            boxShadow: `var(--shadow)`,
                            border: "3px solid var(--clr-primary)",
                            backgroundColor: `var(--clr-bg)`,
                            textAlign: "center",
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
                            Student [BSE (Odisha)]
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            data-aos="fade-right"
                        >
                            M P C High School, Betnoti, Myurbhanj
                        </h4>
                        <p data-aos="fade-right">
                            Studied 10th With Subject Science, Social Science, Math, English etc. Passed with 72.5 Percentage.
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