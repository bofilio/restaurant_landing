import React from "react";
import "../css/top-restaurants.css";
import rest_img1 from "../imgs/restau1.png";
import rest_img2 from "../imgs/restau2.png";
import see_more_img from "../imgs/see_more.png";
import pin from "../imgs/location_.png";
const TopResaurants = () => {
  return (
    <section id="top-restaurant" className="d-flex flex-column container">
      <div className="d-flex restaurants-section ">
        <div className="heading">
          <div>some top restaurant for dining in or Take away!</div>
        </div>
        <div className="sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
          amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi
          tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed.
        </div>
      </div>
      <div className="restau-grid d-flex align-items-center">
        <div className="restaurant">
          <img src={rest_img2} width="100%" alt="restau" />
          <div className="infos">
            <h4 className="mb-2">Fire Water</h4>
            <div className="sub" style={{ maxWidth: "60%" }}>
              we are all about we are all about to the fullest and all content
              dining out or in!dining out or in!
            </div>
            <div className="d-flex align-items-center location">
              <img src={pin} alt="location" width="20" height="25" />
              <span className="ml-4">New Market</span>
            </div>
            <div className="book-btn bg-white text-center primary">
              Book Now
            </div>
          </div>
        </div>
        <div className="restaurant">
        <img src={rest_img1} width="100%" alt="restau" />
          <div className="infos">
            <h4 className="mb-2">Fire Water</h4>
            <div className="sub" style={{ maxWidth: "60%" }}>
              we are all about we are all about to the fullest and all content
              dining out or in!dining out or in!
            </div>
            <div className="d-flex align-items-center location">
              <img src={pin} alt="location" width="20" height="25" />
              <span className="ml-4">New Market</span>
            </div>
            <div className="book-btn bg-white text-center primary">
              Book Now
            </div>
          </div>
        </div>
        
        <div className="see-more">
          <img src={see_more_img} alt="see more" />
        </div>
      </div>
    </section>
  );
};

export default TopResaurants;
