import React from "react";
import egg from "./images/egg.jpg";
import standout from "./images/standout.jpg"
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

          <div className="col text-wrapper-top">
            <div className="top-line">
              Transform your brand
            </div>
            <p className="description">
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <button className="btn-transform">
              LEARN MORE
            </button>
        </div>

        <div className="col img-wrapper">
          <img src={egg} alt="egg" className="img-main-pg" width="950"></img>
        </div>

        

      </div>

      <div className="row middle_row">

        <div className="col img-wrapper">
          <img src={standout} alt="pink cup" className="img-main-pg" ></img>
        </div>
        <div className="col text-wrapper-top">
          <div className="top-line">
            Stand out to the right audience
          </div>
          <p className="description">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
          </p>
          <button className="btn-standout">
            LEARN MORE
          </button>
        </div>

      </div>
    </div>
  );
}

export default Body;