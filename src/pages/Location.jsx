import React from "react";
import "./Location.css";

function Location() {
  return (
    <div>
      <div className="margin"></div>
      <div className="direction-hours">
        <h1>Directions and Hours</h1>
      </div>
      <div className="location-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106117.13058022234!2d-118.29760551452635!3d33.7823576315079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd319a390ca79b%3A0x58188daa73ea2ffa!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1682943237674!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="directions">
          <h1 className="address">1234 W. Harlington St.</h1>
          <h1 className="address">Long Beach, CA 90713</h1>
          <p className="phone">Phone: (123)-456-789</p>
          <div className="hours">
            <h1>Hours</h1>
            <p>
              <b>Monday:</b> 5:00 pm - 11:00 pm
            </p>
            <p>
              <b>Tuesday:</b> 5:00 pm - 11:00 pm
            </p>
            <p>
              <b>Wednesday:</b> Closed
            </p>
            <p>
              <b>Thursday:</b> 5:00 pm - 11:00 pm
            </p>
            <p>
              <b>Friday:</b> 5:00 pm - 11:00 pm
            </p>
            <p>
              <b>Saturday:</b> 6:00 pm - 11:00 pm
            </p>
            <p>
              <b>Sunday:</b> 6:00 pm - 11:00 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
