import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="sections">
        <div className="section">
          <div className="background fourcourse"></div>
          <h1>Culinary Voyage</h1>
          <div className="text-box">
            <div className="box">
              <h2>Fine Wine and Dine</h2>
              <p>
                Only The Finest Food In Town. Come Enjoy A Fabulous Four Course
                Serving At Yours Truly
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="background horsdoeuvre"></div>
          <h1>Hors D'oeuvres</h1>
          <div className="text-box">
            <div className="box">
              <h2>delicate morsel crafted with intrigue and surprise</h2>
              <p>
                Our four-course meal starts with the hors d'oeuvre designed to
                provide a small and flavorful bite to whet your appetite before
                the main course. Our hors d'oeuvres are made with the same care
                and attention to detail as our other dishes, and our chefs take
                pride in creating bites that are both delicious and visually
                stunning. From a crispy crostini topped with rich and creamy
                pâté to a refreshing cucumber cup filled with tangy ceviche.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="background appetizer"></div>
          <h1>Appetizer</h1>
          <div className="text-box">
            <div className="box">
              <h2>bite to awaken the senses</h2>
              <p>
                The appetizer is the second course featuring a small dish
                designed to awaken your taste buds and prepare you for the meal
                to come. Our appetizers are carefully crafted using the freshest
                ingredients, and each dish is created to showcase the flavors
                and textures of the ingredients. Whether you choose a light and
                refreshing salad or a savory and indulgent appetizer, our
                appetizer course is sure to set the tone for a delightful dining
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="background maincourse"></div>
          <h1>Main Course</h1>
          <div className="text-box">
            <div className="box">
              <h2>tantalizing journey through layers of flavor and texture</h2>
              <p>
                For the main course, our chefs carefully select and prepare a
                protein, vegetables, and starch to create a satisfying and
                flavorful dish. Our main courses are designed to showcase the
                best of our seasonal ingredients, and our chefs take pride in
                creating dishes that are both delicious and visually stunning.
                From a perfectly seared steak to a tender and juicy fish fillet,
                our main course is the highlight of our four-course meal.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="background dessert"></div>
          <h1>Dessert</h1>
          <div className="text-box last">
            <div className="box">
              <h2>sweet finale, with a hint of mystery in every bite</h2>
              <p>
                Finally, our dessert course provides a sweet and decadent end to
                your meal, featuring a variety of desserts to satisfy any sweet
                tooth. Our desserts are made fresh daily, and each dish is
                created to showcase the flavors and textures of the ingredients.
                Whether you choose a classic chocolate cake or a more
                adventurous dessert, our dessert course is the perfect end to a
                delightful dining experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
