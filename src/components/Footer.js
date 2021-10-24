import React from "react";
import "../css/footer.css";
import tree_img from "../imgs/tree.png";
import f_arrow from '../imgs/f-arrow.svg'
const Footer = () => {
  return (
    <footer
      className="d-flex d-center container"
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
    </footer>
  );
};

export default Footer;
