import React from "react";
import egg from "./images/egg.jpg";
import standout from "./images/standout.jpg";
import graphic from "./images/graphic.jpg";
import photography from "./images/photography.jpg";
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
          <img src={standout} alt="pink cup" className="img-main-pg"></img>
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

        <div className="bottom-row">

          <div className="bottom_left">
            <div className="col img-wrapper">
              <img src={graphic} alt="cherries" className="img-main-pg"></img>
            </div>
            <div className="col text-wrapper-bottom">
              <div className="top-line-graphic">
                Graphic Design
              </div>
              <p className="description-graphic">
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
              </p>
            </div>
          </div>
            
          <div className="bottom_right">
            <div className="col img-wrapper">
              <img src={photography} alt="orange" className="img-main-pg"></img>
            </div>
            <div className=" col text-wrapper-bottom">
              <div className="top-line-photography">
                Photography
              </div>
              <p className="description-photography">
                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
              </p>
            </div>
          </div>
          
      </div>

    </div>
  );
}

export default Body;