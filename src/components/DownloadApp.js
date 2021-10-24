import React from "react";
import "../css/download-app.css";
import app_img from "../imgs/app.png";
import google_play_img from "../imgs/Google-play.svg";
import apple_store_img from "../imgs/Apple-Store.svg";
const DownloadApp = () => {
  return (
    <section id="download-app" className="bg-secondary container">
      <div className="d-flex space-around mobile content">
        <div className="d-flex flex-column justify-content-center heading" >
          <h4>
            Download App for <br />
            Exciting Deals
          </h4>
          <span className="sub-text1 p-2" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Est,
              adipiscing cursus auctor eget sed phasellus senectus.<br/> Ut tellus
              donec vestibulum tristique leo bibendum in a, tincidunt
            </span>
          <div className="p-2">
          
            <div className="d-flex  btns ">
              <button>
                <img src={google_play_img} alt="" />
              </button>
              <button>
                <img src={apple_store_img} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div style={{flexBasis:"2rem"}}></div>
        <div className=" d-flex d-center">
          <img src={app_img} alt="app img" className="app-image"/>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
