import React from "react";
import classes from "./ActivityCard.module.css";


const ActivityCard = () => {
  return (
    <section className={classes['recently-activity']}> 
      <header className={classes.header}>
        <h2 className={classes["header-title"]}>Recently Activity</h2> 
      </header>
      <div className={classes.content}>
        <time className={classes.timestamp}>10.40 AM, Fri 10 Sept 2021</time>
        <h3 className={classes["activity-title"]}>You Posted a New Job</h3>
        <p className={classes["activity-description"]}>
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <footer className={classes.footer}>
        <p className={classes["activity-summary"]}>Today you made 12 Activities</p>
        <button className={classes["see-all-button"]}>See All Activity</button>
      </footer>
    </section>
  );
};

export default ActivityCard;