import React from 'react';
import "./PhotoGallery.css";
import cone from "./images/cone.jpg";
import orange from "./images/orange.jpg";
import sugarcubes from "./images/sugarcubes.jpg";
import milkbottles from "./images/milkbottles.jpg";

function PhotoGallery() {
  return (
    <div className="photo-gallery">

      <div className="gallery-photo">
        <img src={milkbottles} alt="milk bottles" className="gallery-photo" />
      </div>

      <div className="gallery-photo">
        <img src={orange} alt="orange" className="gallery-photo" />
      </div>

      <div className="gallery-photo">
        <img src={cone} alt="icecream cone" className="gallery-photo" />
      </div>
      <div className="gallery-photo">
        <img src={sugarcubes} alt="sugarcubes stacked" className="gallery-photo" />
      </div>

    </div>
  );
}

export default PhotoGallery;