import React from "react";
const Offer = ({image}) => {
  return (
    <div className="d-flex flex-column food-offer mt-8">
      <img src={image} alt="food1" />
      <div className="p-2-4">
        <div className="d-flex align-items-center">
          <h6>Hand Sandwitch</h6>
          <i className="flex-grow"></i>
          <h6 className="primary">10.25 $</h6>
        </div>
        <p className="sub-text1 mt-2" style={{ width: "80%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing.
        </p>
      </div>
    </div>
  );
};

export default Offer;
