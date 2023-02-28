import React from "react";
import { Link } from "react-router-dom";

// ICONS 
// import { FaHome } from 'react-icons/fa';
// import { FaEnvelope } from 'react-icons/fa';
// import { FaHandshake } from 'react-icons/fa';

import "./../styleComponents/burgerMenu.css";

function BurgerMenu(prop) {
  const bMenu = document.getElementById("burgerMenu");
  const { activity } = prop;

  function menuActivity() {
    if (bMenu.classList.contains("menuActive")) {
      bMenu.classList.remove("menuActive");
    }
  }

  return (
    <div
      id="burgerMenu"
      className={
        activity ? "burgerMenuContainer  menuActive" : "burgerMenuContainer"
      } onClick={menuActivity}>

      <div className="links">

        <Link to="/yahnz" className="link">
          {/* <FaHome className="icon"/> */}
          <h3>Home</h3>
        </Link>
        <Link to="service" className="link">
          {/* <FaHandshake className="icon"/> */}
          <h3>service</h3>
        </Link>
        <Link to="contact" className="link">
          {/* <FaEnvelope className="icon"/> */}
          <h3>contact</h3>
        </Link>

      </div>
    </div>
  );
}

export default BurgerMenu;
