import { useEffect, useState } from "react";
import "./BackgroundSlider.css";
import imageSlide from "../data.jsx";

function BackgroundSlider({ courseNumber }) {
  const [currentState, setCurrentState] = useState(0);

  //timer for the carousels to rotate through images
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(/culinary-voyage/${imageSlide[courseNumber][currentState].url})`,
  };

  //currentIndex is the built in second paramater from map method
  const goToNext = (currentIndex) => {
    setCurrentState(currentIndex);
  };

  return (
    <div className="slider_container">
      <div style={bgImageStyle} className="bgImage"></div>
      <div className="description">
        <div>
          <h1>{imageSlide[courseNumber][currentState].title}</h1>
          <p>{imageSlide[courseNumber][currentState].body}</p>
        </div>
        <div className="carousel_bullets">
          {imageSlide[courseNumber].map((imageSlide, currentIndex) => (
            <span onClick={() => goToNext(currentIndex)}></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackgroundSlider;
