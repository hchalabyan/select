import React, { useState } from "react";
import classes from "./SignatureLayout.module.scss";
import RadioButton from "../RadioButton/RadioButton";
import { ReactComponent as LeftAlign } from "../../assets/icons/email-layout1.svg";
import { ReactComponent as CenterAlign } from "../../assets/icons/email-layout2.svg";
import { ReactComponent as RightAlign } from "../../assets/icons/email-layout3.svg";
import TemplateLayout from "./TemplateLayout/TemplateLayout";
const SignatureLayout = (props) => {
  const [elementPosition, setElementPosition] = useState("left");
  const position = [
    { id: 0, img: <LeftAlign />, text: "Left Align", label: "left" },
    { id: 1, img: <CenterAlign />, text: "Center Align", label: "center" },
    { id: 2, img: <RightAlign />, text: "Right Align", label: "right" },
  ];
  return (
    <>
      <div className={classes.SignatureLayout}>
        <h3>Template Type</h3>
        <div className={classes.TemplateButtonsWrapper}>
          {position.map((button) => {
            return (
              <RadioButton
                label={button.label}
                value={elementPosition === button.label}
                onChange={() => {
                  setElementPosition(button.label);
                }}
                checked={elementPosition === button.label}
                key={button.id}
              >
                <div className={classes.SignatureLayoutImage}>{button.img}</div>
                <p
                  className={
                    elementPosition === button.label ? classes.activeText : ""
                  }
                >
                  {button.text}
                </p>
              </RadioButton>
            );
          })}
        </div>
      </div>
      <TemplateLayout position={elementPosition} />
    </>
  );
};
export default SignatureLayout;
