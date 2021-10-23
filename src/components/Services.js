import React from "react";
import booking_table from "../imgs/booking-table.svg";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <div className="d-flex align-items-center ">
        <div className="header p-4">
          <h4>Our Services</h4>
        </div>
        <p class=" sub sub-text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
          amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi
          tellus. Lorem
        </p>
      </div>
      <div className="mobile d-flex p-16-8">
        <div className="flex-grow d-flex flex-column">
          <div className="tables d-flex align-items-center flex-grow">
            <div className="d-flex d-center advanced-booking bg-secondary">
              <div className="p-8">
                <img src={booking_table} alt="table" />
              </div>
            </div>
            <div className="d-flex  flex-column align-items-center flex-grow">
              <h5>Advanced Table</h5>
              <h5>Booking</h5>
            </div>
          </div>
          <div className="food d-flex align-items-center flex-grow ">
            <div className="d-flex  flex-column align-items-center flex-grow">
              <h5>Advanced Table</h5>
              <h5>Booking</h5>
            </div>
            <div className="d-flex align-items-center d-center advanced-booking  bg-secondary">
              <div className="p-8">
                <img src={booking_table} alt="table" />
              </div>
            </div>
          </div>
        </div>
        <div style={{flexBasis:'2rem'}}></div>
        <div className="delivery d-flex flex-column align-items-center flex-grow  bg-secondary">
          <img className="mb-4" src={booking_table} alt="delevery" />
          <div>
            <h5 className="text-center">Free Home Delivery<br/> At your Door Steps</h5>
            <p className="sub-text1 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
