import React, { useState, useContext } from "react";

import "../styleComponents/nav.css";
import BurgerMenu from "./burgerMenu";
import navBackGroundImage from "../assets/bustop.png";

// context
import { ApiDataContext } from "../context/ApiContext";

function Nav(prop) {
  const region = document.getElementById("region");
  const { setCountry } = useContext(ApiDataContext);
  const [menu, setMenu] = useState(false);

  // API PROPERTIES
  function regionVal() {
    setCountry(
      () => {
        return region.value
      }
    )
  }
  function clickEvent() {
    if (!menu) {
      setMenu(() => {
        return true;
      });
    } else {
      setMenu(() => {
        return false;
      });
    }
  }

  const { logo, insta, twitter } = prop;
  return (
    <>
      <div className="nav">
        <div className="navContainer">
          <div className="imageContainer">
            <img src={navBackGroundImage} alt="lagos" className="navImage" />
            <div className="overlay"></div>
          </div>

          <div className="navContextContainer">
            <div className="burgerMneu">
              <button onClick={clickEvent}>
                <div className="burgerLine1"></div>
                <div className="burgerLine2"></div>
              </button>
            </div>

            <div className="logoContainer">
              <img src={logo} alt="logo" className="navLogo" />
            </div>
            <div className="socialLinks">
              <a href="http://twitter.com/nehlzin">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="http://instagram.com/nehlzin">
                <img src={insta} alt="instagram" />
              </a>
              <div className="selectBtn">
                <select name="region" id="region" onChange={regionVal}>
                  <option value="ng">NG</option>
                  <option value="us">US</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BurgerMenu activity={menu} />
    </>
  );
}
export default Nav;
