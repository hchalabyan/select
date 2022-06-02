import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};
export default Button;
