import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <div className="margin"></div>
      <h1>Contact</h1>
      <ul className="socials">
        <li>
          <img src="twitter.png"></img>
        </li>
        <li>
          <img src="facebook.png"></img>
        </li>
        <li>
          <img src="instagram.png"></img>
        </li>
        <li>
          <img src="symbols.png"></img>
        </li>
      </ul>

      <div className="contact">
        <label for="name">Name</label>
        <input type="text" name="name" id="name"></input>

        <label for="email">Email</label>
        <input type="text" name="email" id="email"></input>

        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject"></input>

        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>
      </div>

      <button>Send</button>
    </div>
  );
}

export default Contact;
