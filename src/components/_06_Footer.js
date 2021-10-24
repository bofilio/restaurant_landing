import React from "react";
import "../css/footer.css";
import tree_img from "../imgs/tree.png";
import f_arrow from '../imgs/f-arrow.svg'
import facebook_icon from '../imgs/facebook.svg'
import behance_icon from '../imgs/Behance.svg'
import twiter_icon from '../imgs/twiter.svg'
import linkedin_icon from '../imgs/linkedin.svg'
import copy_right_icon from '../imgs/copy-right.svg'
const Footer = () => {
  return (
    <footer
      className="d-flex d-center"
      style={{ backgroundImage: `url(${tree_img})` }}
    >
      <div className="d-flex flex-column content">
        <h4 className="text-center mb-8">
          Get notified <br />
          about new amazing products
        </h4>
        <p className="text-center text-secondary mb-8 sub-text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus.
        </p>
        <form className="d-flex bg-white p-4 align-items-center">
            <input className="flex-grow" type="text" placeholder="email" />
            <button className="bg-primary">
                <img src={f_arrow} alt="=>" />
            </button>
        </form>
      </div>
      <div id="bottom-bar" className="d-flex p-2 align-items-center">
        <div className="d-flex space-around icons-container">
          <img className="mr-4" src={facebook_icon} alt="facebook" />
          <img className="mr-4" src={twiter_icon} alt="facebook" />
          <img className="mr-4" src={linkedin_icon} alt="facebook" />
          <img className="mr-4" src={behance_icon} alt="facebook" />
        </div>
        <div className="d-flex">
          <img src={copy_right_icon} alt="copy-right" />
          <span className="sub-text1">2020 Expice Studio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
