import React from "react";
import "../css/food.css";
import food_img1 from "../imgs/food1.png";
import Offer from "./Offer";
const Food = () => {
  return (
    <section className="container">
      <div className="section-body">
        <div className="d-flex flex-column align-items-center">
          <h5 className="mb-4">Ecplore Our Food</h5>
          <p className="sub-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing.
          </p>
        </div>
        <div className="d-flex flex-wrap">
          <Offer />
          <div style={{ flexBasis: "2%" }}></div>
          <Offer />
          <div style={{ flexBasis: "2%" }}></div>
          <Offer />
          <div style={{ flexBasis: "1rem" }}></div>
          <Offer />
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Food;
