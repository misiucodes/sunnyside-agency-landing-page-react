import React from "react";
import egg from "./images/egg.jpg";
import "./Body.css";

function Body({
  topLine,
  description,
  buttonLabel,
  img,
  alt
}) {
  return (
    <div className="container">

      <div className="row main_row">

          <div className="col text-wrapper">
            <div className="top-line">
              Transform your brand
            </div>
            <p className="description">
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <button className="btn-learnmore">
              LEARN MORE
            </button>
        </div>

        <div className="col img-wrapper">
          <img src={egg} alt="egg" className="img-main-pg"></img>
        </div>

      </div>
    </div>
  );
}

export default Body;