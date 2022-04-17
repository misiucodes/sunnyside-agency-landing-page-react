import React from "react";
import "./Body.css"
import egg from "./images/egg.jpg";
import standout from "./images/standout.jpg";
import graphic from "./images/graphic.jpg";
import photography from "./images/photography.jpg";

function Body2() {
  return (
    <section className="info__container">

      <div className="info__transform"> 

        <div className="info__text-transform">
          <div className="info__headline">
            Transform your brand
          </div>
          <p className="info__description">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <div className="btn-container">
            <a href="/" className="btn-learnmore">
              Learn More 
            </a>
            <div className="btn-underline-transform"></div>
          </div>
        </div>

        <div className="info__img-transform">
          <img src={egg} alt="egg" className="img-transform"/>
        </div>

      </div>

      <div className="info__standout">

        <div className="info__img-standout">
          <img src={standout} alt="standout" className="img-standout"/>
        </div>
        <div className="info__text-standout">
          <div className="info__headline">
            Stand out to the right audience
          </div>
          <p className="info__description">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copyrighters, we'll build and extend your brand in digital places.
          </p>
          <div className="btn-container">
            <a href="/" className="btn-learnmore">
              Learn More
            </a>
            <div className="btn-underline-standout"></div>
          </div>
        </div>

      </div>

      <div className="info__graphic-photography">

        <div className="info__graphic-design">
          <div className="info__img-graphic">
            <img src={graphic} alt="cherries" className="img-graphic"/>
          </div>
          <div className="info__text-graphic">
            <div className="info__headline-graphic">
              Graphic Design
            </div>
            <p className="info__description-graphic">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
            </p>
          </div>
        </div>
        <div className="info__photography">
          <div className="info__img-photography">
            <img src={photography} alt="orange" className="img-photography"/>
          </div>
          <div className="info__text-photography">
            <div className="info__headline-photography">
              Photography
            </div>
            <p className="info__description-photography">
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Body2;