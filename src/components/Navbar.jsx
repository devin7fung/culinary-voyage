import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  let previousScrollPosition = 0;
  let currentScrollPosition = 0;
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    currentScrollPosition = window.scrollY;

    if (previousScrollPosition - currentScrollPosition < 0) {
      setShow(false);
    }
    if (previousScrollPosition - currentScrollPosition > 0) {
      setShow(true);
    }
    previousScrollPosition = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={show ? "nav" : ""}>
      <h1>
        <Link to="/culinary-voyage" className="link">
          Culinaray Voyage
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/culinary-voyage/menu" className="link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/culinary-voyage/location" className="link">
            Location
          </Link>
        </li>
        <li>
          <Link to="/culinary-voyage/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Navbar;
