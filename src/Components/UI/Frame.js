
import React from "react";
import classes from "./Frame.module.css";

const Frame = (props) => {
  return (
    <div className={`${classes.frame} ${props.className}`}>
      <div className={classes.div}>
        <div className={`${classes["this-is-title"]} ${props.divClassName}`}>
          {props.text}
        </div>

        <div className={classes["today-AM"]}>{props.text1}</div>
      </div>

      <img className={classes.img} alt="Frame" src={props.frame} />
    </div>
  );
};

export default Frame;
