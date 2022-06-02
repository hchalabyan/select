import React from "react";
import ExportButton from "../ExportButton/ExportButton";
import Style from "style-it";
import { ReactComponent as DateIcon } from "../../assets/icons/date-icon.svg";
import { ReactComponent as ViewIcon } from "../../assets/icons/view-icon.svg";
import { ReactComponent as ContentPalcaeHolderIcon } from "../../assets/icons/page-layout-2-content-palcaeholder.svg";
import { ReactComponent as ContentHolderIcon } from "../../assets/icons/page-layout-2-content-palcaeholder-2.svg";
import { ReactComponent as FaceIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/instagram-icon.svg";
import moment from "moment";
const ImagesGrid = () => {
  const date = moment().subtract(10, "days").calendar();
  return (
    <ExportButton>
      <Style>
        {`
             
             .Title{
                 font-size: 16px;
                 margin-bottom:12px;
                 margin-top:0;
             }
             .Main  {
                display:flex;
                justify-content: space-between;
                margin-top: 24px;
                width: 550px;
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
             
             .Social{
                display:flex;
                align-item:center;
                margin-right: 36px;
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
        <div>
          <ContentPalcaeHolderIcon />
        </div>
        <div className="Main">
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
          <div>
            <p className="Title">Title</p>
            <div className="DatePart">
              <DateIcon /> <span>{date}</span>
            </div>
            <div className="ViewPart">
              <ViewIcon /> <span>256</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <ContentHolderIcon />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </ExportButton>
  );
};
export default ImagesGrid;
