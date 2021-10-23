import React from "react";
import bg_left from "../imgs/bg-l.png";
import bg_right from "../imgs/bg-r.png";

const Booking = () => {
  return (
    <section className="d-flex flex-column container">
      <div className="booking d-flex align-items-center">
        <img className="bg_l" src={bg_left} alt="bg-l" />
        <div className="content flex-grow bg-white p-8">
          <div className="d-flex flex-column align-items-center">
            <h4 className="mb-8">
              <span className="header ">advanced booking</span>
            </h4>
            <form className="search d-flex mb-8">
              <input
                placeholder="Search restaurants"
                className="flex-grow search_input"
              />
              <button>GO</button>
            </form>
            <form
              className="booking-form d-flex flex-wrap"
              style={{ paddingLeft: "10%" }}
            >
              <input className="mr-2" type="date" style={{ width: "25%" }} />
              <input className="mr-2" type="time" style={{ width: "25%" }} />
              <select style={{ width: "25%" }}>
                <option>02 people</option>
                <option>03 people</option>
              </select>
            </form>
          </div>
        </div>
        <img className="bg_r" src={bg_right} alt="bg-r" />
      </div>
    </section>
  );
};

export default Booking;
