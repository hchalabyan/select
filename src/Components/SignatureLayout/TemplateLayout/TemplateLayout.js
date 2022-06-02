import React from "react";

import { ReactComponent as AvatarIcon } from "../../assets/icons/email-layout-circle-icon.svg";

import { ReactComponent as FaceIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/instagram-icon.svg";
import ExportButton from "../ExportButton/ExportButton";
import Style from "style-it";

const TemplateLayout = (props) => {
  return (
    <ExportButton>
      <Style>
        {`
            .TemplateLayout {
             display: flex;
            }
           .ImagesWrapper {
                width: 160px;
                margin-right: 32px;
            }
             .AvatarIconWrapper {
              margin-bottom: 33px;
            }
            .SocialIcons {
              display: flex;
              justify-content: center;
      }
       .IconWrapper {
        width: 25px;
        height: 25px;
      }
      .IconWrapper:not(:last-child){
       margin-right: 16px;
      }
       .IconWrapper svg {
          width: 100%;
          height: 100%;
        }
        .Description {
    color: black;
    width: 450px;}
     .Title {
      font-size: 16px;
      margin-top: 60px;
      margin-bottom: 0;
    }
     .SubTitle {
      font-size: 13px;
      margin-bottom: 28.5px;
      margin-top: 8px;
    }
     .Context {
      font-size: 15px;
    }
    
    
    .RightTemplateLayout {
    display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  
}
.RightTemplateLayout .ImagesWrapper {
    margin-right: 0;
    margin-left: 86px;
  }
  
  .CenterTemplateLayout {
  flex-direction: column;
  align-items: center;
  position: relative;
  }
  .CenterTemplateLayout .SocialIcons {
    position: absolute;
    right: 0;
    top: 80%;
  }
   .CenterTemplateLayout .ImagesWrapper{
    margin-right: 0;
    }
     .CenterTemplateLayout .ImagesWrapper .AvatarIconWrapper{
    margin-bottom: 0;
  }
   .CenterTemplateLayout .Description {
    margin-right: auto;
    width: 100%;}
     .CenterTemplateLayout .Description .Title,
    .CenterTemplateLayout .Description .SubTitle {
      text-align: center;
    }
     .CenterTemplateLayout .Description .Title{
      margin-top:24px;
    }
     .CenterTemplateLayout .Description .Context {
      width: 509px;
    }
      
         `}
      </Style>

      <div
        className={`TemplateLayout ${
          props.position === "center"
            ? "CenterTemplateLayout"
            : props.position === "right"
            ? "RightTemplateLayout"
            : "TemplateLayout"
        }`}
      >
        <div className="ImagesWrapper">
          <div className="AvatarIconWrapper">
            <AvatarIcon />
          </div>
          <div className="SocialIcons">
            <div className="IconWrapper">
              <FaceIcon />
            </div>
            <div className="IconWrapper">
              <TwitterIcon />
            </div>
            <div className="IconWrapper">
              <InstaIcon />
            </div>
          </div>
        </div>

        <div className="Description">
          <p className="Title">Name Surname</p>
          <p className="SubTitle">Web Developer</p>
          <p className="Context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </ExportButton>
  );
};

export default TemplateLayout;
