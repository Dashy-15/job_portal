import React from "react";
import frame10 from "../../Assets/announcement/frame-10.svg";
import frame57 from "../../Assets/announcement/frame-57.svg";
import frame56 from "../../Assets/announcement/Frame 56.svg";
import classes from "./AnnouncementCard.module.css";

const AnnouncementCard = () => {
  return (
    <section className={classes.announcement}>
      <header className={classes['announcement-header']}>
        <h1 className={classes['announcement-title']}>Announcement</h1>
        <div className={classes['announcement-date']}>
          <span className={classes['date-text']}>Today, 13 Sep 2021</span>
          <img
            className={classes['date-icon']}
            alt="Calendar Icon"
            src={frame10}
          />
        </div>
      </header>
      <ul className={classes['announcement-list']}>
        <li className={classes['announcement-item']}>
          <div className={classes['announcement-content']}>
            <p className={classes['announcement-text']}>
              Outing schedule for every department
            </p>
            <time className={classes['announcement-time']}>5 Minutes ago</time>
          </div>
          <img
            className={classes['announcement-icon']}
            alt="Action Icon"
            src={frame56}
          />
        </li>
        <li className={classes['announcement-item']}>
          <div className={classes['announcement-content']}>
            <p className={classes['announcement-text']}>Meeting HR Department</p>
            <time className={classes['announcement-time']}>Yesterday, 09:15 AM</time>
          </div>
          <img
            className={classes['announcement-icon']}
            alt="Action Icon"
            src={frame57}
          />
        </li>
        <li className={classes['announcement-item']}>
          <div className={classes['announcement-content']}>
            <p className={classes['announcement-text']}>
              IT Department need two more talents for UX/UI Designer position
            </p>
            <time className={classes['announcement-time']}>Yesterday, 09:15 AM</time>
          </div>
          <img
            className={classes['announcement-icon']}
            alt="Action Icon"
            src={frame57}
          />
        </li>
      </ul>
      <footer className={classes['announcement-footer']}>
        <button className={classes['see-all-button']}>See All Announcement</button>
      </footer>
    </section>
  );
};

export default AnnouncementCard;