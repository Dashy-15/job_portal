import React from "react";
import classes from "./Dashboard.module.css";
import Card from "../UI/Card";
import Card1 from "../UI/Card1";
import vector2 from "../../Assets/chart/vector-2.svg";
import vector3 from "../../Assets/chart/vector-3.svg";
import frame3 from "../../Assets/chart/frame-20.svg";
import AnnouncementCard from "../UI/AnnouncementCard";
import ActivityCard from "../UI/ActivityCard";
import ScheduleCard from "../UI/ScheduleCard";


const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <h2 className={classes.title}>Dashboard</h2>
            <div className={classes['info-cards']}>
                <Card className={classes.available}>
                    <h2 className={classes.text}>Available Position</h2>
                    <p className={classes.count}>24</p>
                    <p className={classes.description1}>4 Urgently needed</p>
                </Card>
                <Card className={classes.job}>
                    <h2 className={classes.text}>Job Open</h2>
                    <p className={classes.count}>10</p>
                    <p className={classes.description2}>4 Active hiring</p>
                </Card>
                <Card className={classes.employee}>
                    <h2 className={classes.text}>New Employees</h2>
                    <p className={classes.count}>24</p>
                    <p className={classes.description3}>4 Department</p>
                </Card>
                <div className={classes.activity}>
                    <ActivityCard />
                    <div className={classes["upcoming-schedule"]}>
                        <ScheduleCard />
                    </div>
                </div>

            </div>

            <section className={classes.sections}>
                <Card1
                    totalEmployees="Total Employees"
                    pos="216"
                    men="120 Men"
                    women="96 Women"
                    vector2={vector2}
                    vector3={vector3}
                    trendLabel="+2%"
                    frame3={frame3}
                    pastMonth="+2% Past month"
                />
                <Card1
                    totalEmployees="Talent Request"
                    pos="16"
                    men="6 Men"
                    women="10 Women"
                    vector2={vector2}
                    vector3={vector3}
                    trendLabel="+5%"
                    frame3={frame3}
                    pastMonth="+5% Past month"
                />
            </section>

            <div className={classes.announcement}>
                <AnnouncementCard />
            </div>

        </div>
    );
}

export default Dashboard;