import React from "react";
import ExportButton from "../ExportButton/ExportButton";
import { ReactComponent as DateIcon } from "../../assets/icons/date-icon.svg";
import { ReactComponent as ViewIcon } from "../../assets/icons/view-icon.svg";
import { ReactComponent as ContentIcon } from "../../assets/icons/page-layout-1-content-palcaeholder.svg";
import { ReactComponent as FaceIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/instagram-icon.svg";

import Style from "style-it";
import moment from "moment";
const SingleImageGrid = (props) => {
  const date = moment().subtract(10, "days").calendar();
  return (
    <ExportButton>
      <Style>
        {`
             .Category{
                font-size: 13px;
                margin:0;
             }
             .Title{
                 font-size: 16px;
                 margin-top:12px;
                 margin-bottom:24.5px;
             }
             .DatePart{
                margin-right: 24.5px;
                margin-bottom:23px;
                display:inline-block;
             }
              .DatePart svg{
                    width:15px;
                    height:15px;
              }
             .ViewPart{
                display:inline-block;
             }
             .ViewPart svg{
                    width:19px;
                    height: 13px;
             }
             .Content{
                max-width:456px;
                margin:24px 0 36px;
             }
             .Social{
                display:flex;
                align-item:center;
             }
             .SocialIconsWrapper{
                width: 25px;
                height: 25px;
                display:inline-block;
             }
             .SocialIconsWrapper:not(:last-child){
                margin-right: 16px;
             }
             .Social span{
                font-size:13px;
                margin-right: 23.5px;
             }
         `}
      </Style>

      <div>
        <p className="Category">Category Name</p>
        <p className="Title">Title</p>
        <div className="DatePart">
          <DateIcon /> <span>{date}</span>
        </div>
        <div className="ViewPart">
          <ViewIcon /> <span>256</span>
        </div>
        <div>
          <ContentIcon />
        </div>
        <p className="Content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="Social">
          <span>Share</span>
          <div className="SocialIconsWrapper">
            <FaceIcon />
          </div>
          <div className="SocialIconsWrapper">
            <TwitterIcon />
          </div>
          <div className="SocialIconsWrapper">
            <InstaIcon />
          </div>
        </div>
      </div>
    </ExportButton>
  );
};
export default SingleImageGrid;
