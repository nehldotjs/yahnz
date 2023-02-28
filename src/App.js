import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/contact";
import Service from "./components/service";
import Home from "./components/home";
import Footer from "./components/footer";
// context
import { AvailableData } from "./context/contextData";
import { ApiData } from "./context/ApiContext";

// PROP CONTEXT
// import { MovieData } from "./context/propContext/moviesApiContext";
// import { MovieContextValue } from "./context/propContext/moviesApiContext";
// icons

import yahnz from "./assets/yahnz.png";
import insta from "./assets/Instagram.png";
import twitter from "./assets/Twitter.png";
import fImage from "./assets/footer.png";
import whatsApp from "./assets/whatsapp.jpg";
// styling
import "./styleComponents/App.css";

function App() {
  return (
    <div className="App" basename="/yahnz">
      <>
        <div className="backgorundContainer" basename="/yahnz">
          <div className="morphism"></div>
          <div className="bckGradient"></div>
        </div>
        <div className="app">
          <AvailableData>
            <ApiData>
              <Router>
                <Nav logo={yahnz} insta={insta} twitter={twitter} />
                <Routes>
                  <Route path="/yahnz" element={<Home pic={fImage} />} />
                  <Route path="About" element={<About />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Service" element={<Service />} />
                </Routes>
                <Footer
                  logo={yahnz}
                  insta={insta}
                  twitter={twitter}
                  footerImg={fImage}
                  whatsApp={whatsApp}
                />
              </Router>
            </ApiData>
          </AvailableData>
        </div>
      </>
    </div>
  );
}

export default App;
