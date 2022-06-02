import React, { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import { ReactComponent as SingleGrid } from "../../assets/icons/page-layout3.svg";
import { ReactComponent as ImageGrid } from "../../assets/icons/page-layout2.svg";
import { ReactComponent as SliderGrid } from "../../assets/icons/page-layout1.svg";
import classes from "./PageLayout.module.scss";
import SingleImageGrid from "./SingleImageGrid";
import ImagesGrid from "./ImagesGrid";
import SliderLayout from "./SliderLayout";
const PageLayout = () => {
  const [elementPosition, setElementPosition] = useState("single");
  const position = [
    { id: 0, img: <SingleGrid />, text: "Single image grid", label: "single" },
    { id: 1, img: <ImageGrid />, text: "2 images grid", label: "images" },
    { id: 2, img: <SliderGrid />, text: "Slider grid", label: "slider" },
  ];
  return (
    <>
      <div className={classes.PageLayout}>
        <h3>Template Type</h3>
        <div className={classes.PageButtonsWrapper}>
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
      {elementPosition === "single" ? (
        <SingleImageGrid />
      ) : elementPosition === "images" ? (
        <ImagesGrid />
      ) : (
        <SliderLayout />
      )}
    </>
  );
};
export default PageLayout;
