import React from "react";
import "../css/top-restaurants.css";
import rest_img1 from "../imgs/restau1.png";
import rest_img2 from "../imgs/restau2.png";
import see_more_img from "../imgs/see_more.png";
import pin from "../imgs/location_.png";
const TopResaurants = () => {
  return (
    <section id="top-restaurant" className="d-flex flex-column">
      <div className="d-flex restaurants-section mobile tablet p-4">
        <div className="heading">
          <h4>some top restaurant for dining in or Take away!</h4>
        </div>
        <div className="sub-text sub-text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
          amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi
          tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed.
        </div>
      </div>
      <div className="restau-grid d-flex align-items-center mt-8">
        <div className="restaurant" >
          <img src={rest_img2} className="main-img" alt="restau" />
          <div className="infos">
            <h5 style={{marginBottom:"1vw"}}>Fire Water</h5>
            <div className="sub-text2" style={{ maxWidth: "80%" }}>
              we are all about we are all about to the fullest and all content
              dining out or in!dining out or in!
            </div>
            <div className="d-flex align-items-center location">
              <img src={pin} width="16" alt="location"/>
              <h6 className="ml-4">New Market</h6>
            </div>
            <div className="book-btn bg-white text-center primary btn-text">
              Book Now
            </div>
          </div>
        </div>
        <div className="restaurant">
        <img src={rest_img1} className="main-img" alt="restau" />
          <div className="infos">
            <h5 style={{marginBottom:"1vw"}}>Fire Water</h5>
            <div className="sub-text2" style={{ maxWidth: "80%" }}>
              we are all about we are all about to the fullest and all content
              dining out or in!dining out or in!
            </div>
            <div className="d-flex align-items-center location">
              <img src={pin} alt="location" width="16"  />
              <h6 className="ml-4">New Market</h6>
            </div>
            <div className="book-btn bg-white text-center primary btn-text">
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
