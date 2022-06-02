import React from "react";
import classes from "./RadioButton.module.scss";
const RadioButton = (props) => {
  return (
    <div
      className={`${classes.RadioButton} ${
        props.checked ? classes.Checked : ""
      }`}
    >
      <label>
        <input type="radio" checked={props.value} onChange={props.onChange} />
        {props.children}
      </label>
    </div>
  );
};
export default RadioButton;
