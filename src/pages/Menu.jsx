import React from "react";
import BackgroundSlider from "../components/BackgroundSlider.jsx";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <div className="margin"></div>
      <div className="carousel_container">
        <h1 className="carousel_header">Hors D'oeuvres</h1>
        <BackgroundSlider courseNumber="0"></BackgroundSlider>
      </div>
      <div className="carousel_container">
        <h1 className="carousel_header">Appetizers</h1>
        <BackgroundSlider courseNumber="1"></BackgroundSlider>
      </div>
      <div className="carousel_container">
        <h1 className="carousel_header">Main Course</h1>
        <BackgroundSlider courseNumber="2"></BackgroundSlider>
      </div>
      <div className="carousel_container">
        <h1 className="carousel_header">Dessert</h1>
        <BackgroundSlider courseNumber="3"></BackgroundSlider>
      </div>
    </div>
  );
}

export default Menu;
