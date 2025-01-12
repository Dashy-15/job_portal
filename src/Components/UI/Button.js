import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <div className={classes.custom}>
            <button onClick={props.onClick} className={props.isActive ? classes.active : ""}>
                <props.icon className={classes.icon} />
                {props.label}
            </button>
        </div>
    );
};

export default Button;
