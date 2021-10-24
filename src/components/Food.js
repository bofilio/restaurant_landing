import React from "react";
import "../css/food.css";
import food_img1 from "../imgs/food1.png";
import food_img2 from "../imgs/food2.png";
import food_img3 from "../imgs/food3.png";
import food_img4 from "../imgs/food4.png";
import food_img5 from "../imgs/food5.png";
import food_img6 from "../imgs/food6.png";
import Offer from "./Offer";
const Food = () => {
  return (
    <section id="food-section" className="container">
      <div className="section-body">
        <div className="d-flex flex-column align-items-center">
          <h4 className="mb-4">Ecplore Our Food</h4>
          <p className="sub-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing.
          </p>
        </div>
        <div className="d-flex flex-wrap">
          <Offer image={food_img1}/>
          <div style={{ flexBasis: "2%" }}></div>
          <Offer image={food_img2} />
          <div style={{ flexBasis: "2%" }}></div>
          <Offer image={food_img3}/>
          <div style={{ flexBasis: "1rem" }}></div>
          <Offer image={food_img4}/>
          <div style={{ flexBasis: "1rem" }}></div>
          <Offer image={food_img5}/>
          <div style={{ flexBasis: "1rem" }}></div>
          <Offer image={food_img6}/>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Food;
