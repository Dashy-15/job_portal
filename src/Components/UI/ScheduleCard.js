import React from "react";
import Frame from "./Frame";
import frame10 from "../../Assets/announcement/frame-10.svg";
import classes from "./Schedule.module.css";
import Frame57 from "../../Assets/announcement/Frame 57.svg"

export const ScheduleCard = () => {
    return (
        <div className={classes["upcoming-schedule"]}>
            <div className={classes["text-wrapper"]}>Priority</div>

            <div className={classes["text-wrapper-2"]}>Other</div>

            <div className={classes["frame-2"]}>
                <div className={classes["text-wrapper-3"]}>Upcoming Schedule</div>

                <div className={classes["frame-3"]}>
                    <div className={classes["div-wrapper"]}>
                        <div className={classes["text-wrapper-4"]}>Today, 13 Sep 2021</div>
                    </div>

                    <img className={classes["frame-4"]} alt="Frame" src={frame10} />
                </div>
            </div>

            <Frame
                className={classes["frame-68"]}
                divClassName={classes["frame-instance"]}
                frame={Frame57}
                text="Review candidate applications"
            />
            <div className={classes.scheduleFrame}>
                <Frame
                    className={classes["frame-68-instance"]}
                    divClassName={classes["frame-instance"]}
                    frame={Frame57}
                    text="Interview with candidates"
                    text1="Today - 10.30 AM"
                />
                <Frame
                    className={classes["design-component-instance-node"]}
                    divClassName={classes["frame-5"]}
                    frame={Frame57}
                    text="Short meeting with product designer from IT Departement"
                    text1="Today - 09.15 AM"
                />
                <div className={classes["overlap-group"]}>
                    <Frame
                        className={classes["frame-6"]}
                        divClassName={classes["frame-7"]}
                        frame={Frame57}
                        text="Sort Front-end developer candidates"
                        text1="Today - 11.30 AM"
                    />
                    <div className={classes["frame-8"]}>
                        <div className={classes["text-wrapper-5"]}>Create a New Schedule</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;
