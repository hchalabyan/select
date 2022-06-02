import React from "react";
import Style from "style-it";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import { ReactComponent as FaceIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/instagram-icon.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/date-icon.svg";
import { ReactComponent as ViewIcon } from "../../assets/icons/view-icon.svg";
import ExportButton from "../ExportButton/ExportButton";
import moment from "moment";
import Button from "../Button/Button";

const SliderLayout = () => {
  const images = [
    {
      original:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder.svg",
      thumbnail:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder-small_1.svg",
    },
    {
      original:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder.svg",
      thumbnail:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder-small_1.svg",
    },
    {
      original:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder.svg",
      thumbnail:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder-small_1.svg",
    },
    {
      original:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder.svg",
      thumbnail:
        "https://www.linkpicture.com/q/page-layout-3-content-palcaeholder-small_1.svg",
    },
  ];
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
                justify-content: flex-start;
                margin-top: 24px;
             }
             .DatePart{
                margin-right: 22.6px;
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
                justify-content:center;
                margin-right: 36px;
                margin-top:26px;
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
            
             .image-gallery-thumbnail{
                width: 40px;
                height: 40px;
              }
              .image-gallery-thumbnail.active, .image-gallery-thumbnail:focus, .image-gallery-thumbnail:hover{
                border:1px solid #B4B000  ;
              }
              .LeftSide{
                flex: 0 0 55%;
                margin-right:40px;
                max-width: 405px;
              }
              .RightSide{
                flex: 0 0 45%;
                max-width: 346px;
              }
              .ButtonsGroup {
                display: flex;
              }
              .ButtonsGroup div{
                border: 1px solid #B4B000;
                border-radius: 33px;
                padding: 12px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 160px;
                margin-top: 20.8px;
             }
             .ButtonsGroup div:hover{
                background: #B4B000;
             }
             .ButtonsGroup div:hover button{
                color: white;
                cursor: pointer;
             }
             .ButtonsGroup button{
              font-size: 13px;
               color: #B4B000;
              border: none;
              background: none;
              width: 100%;
              height: 100%;
             }
             .ButtonsGroup div:first-of-type{
                margin-right: 16px;
             }
             ul{
                margin-top: 24px;
                padding-left: 20px;
                list-style: none;
             }
             ul li{
                margin-bottom: 8px;
             }
             ul li::before {
                content: "\\2022";
                color: #B4B000;
                font-weight: bold;
                display: inline-block;
                width: 1em;
                margin-left: -1em;
            }
            .Text{
              margin:0;
            }
            .image-gallery-content {
                position: relative;
                line-height: 0;
                top: 0;
            }
            .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
                margin: 0 5px;
            }
            .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
                display: inline-block;
                vertical-align: top;
                width: 100px;
            }
            .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {
                display: inline-block;
                width: calc(100% - 110px);
            }
            .image-gallery-slide-wrapper {
                position: relative;
            }
            .image-gallery-slides {
                line-height: 0;
                overflow: hidden;
                position: relative;
                white-space: nowrap;
                text-align: center;
            }
            .image-gallery-slide {
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
            }
            .image-gallery-content.left .image-gallery-slide .image-gallery-image, .image-gallery-content.right .image-gallery-slide .image-gallery-image {
                max-height: 100vh;
            }
            .image-gallery-thumbnail .image-gallery-thumbnail-image {
                vertical-align: middle;
                width: 100%;
                line-height: 0;
            }
            .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {
                display: inline-block;
                width: calc(100% - 110px);
            }
            .image-gallery-slide .image-gallery-image {
                width: 100%;
                object-fit: contain;
            }
            .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail {
                display: block;
                margin-right: 0;
                padding: 0;
            }
            .image-gallery-slide.center {
                position: relative;
                width: 300px;
                height: 300px;
            }
         `}
      </Style>

      <div>
        <div className="Main">
          <div className="LeftSide">
            <ImageGallery
              items={images}
              thumbnailPosition="left"
              showFullscreenButton={false}
              useBrowserFullscreen={false}
              showPlayButton={false}
              showNav={false}
            />
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

          <div className="RightSide">
            <p className="Title">Title</p>
            <div className="DatePart">
              <DateIcon /> <span>{date}</span>
            </div>
            <div className="ViewPart">
              <ViewIcon /> <span>256</span>
            </div>
            <p className="Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="ButtonsGroup">
              <Button text="Button 1" />
              <Button text="Button 1" />
            </div>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </div>
        </div>
      </div>
    </ExportButton>
  );
};
export default SliderLayout;
