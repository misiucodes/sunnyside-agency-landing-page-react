import React from "react";
import "./Main.css";
import arrow from "./images/arrow-down.svg";

function Main() {
  return (
    <header>
      <h1 className="title">WE ARE CREATIVES</h1>
      <img src={arrow} alt="arrow-pointing-down" className="img-arrow" />
    </header>
  );
}

export default Main;