import React, { useState } from "react";
import "../styleComponents/footer.css";

function Footer(prop) {
  const { footerImg, logo, twitter, insta } = prop;

  const tags = [ 
    { id: 1, btnValue: "Buisiness" },
    { id: 2, btnValue: "ElonMusk" },
    { id: 3, btnValue: "Entertainment" },
    { id: 4, btnValue: "Politics" },
    { id: 5, btnValue: "Sports" },
    { id: 6, btnValue: "Movies" },
  ];
  return (
    <div className="footer">
      <div className="footerBackground">
        <img src={footerImg} alt="" />
        <div className="footerOverlay"></div>
      </div>

      <div className="footercontent">
        <div className="section section1">
          <div className="footerLogo">
            <img src={logo} alt="yahnz logo" className="fLogo" />
            <div className="footerSocials">
              <a href="http://twitter.com/nehlzin" className="icons">
                <img src={twitter} alt="socials" />
              </a>
              <a href="http://instagram.com/nehlzin" className="icons">
                <img src={insta} alt="socials" />
              </a>
            </div>
          </div>
          <div className="serchContainer">
            <form>
              <input type="text" placeholder="Email" />
              <button>
                <h3>Subscribe</h3>
              </button>
            </form>
          </div>
        </div>

        <div className="hr"></div>

        <div className="section section2">
          <div className="footerSection2contaiiner1-context">
            {/* FORUM LOGO CONATAINER */}
            <div className="forum">
              <div className="forumLogoContainer">
                <img src={logo} alt="logo" className="forumLogo" />
                <h3>FORUM</h3>
              </div>
              <h2>
                Nigeria English - Language internet forum.
                Created by
                <br />
                <span>OSUYA NELSON</span>
              </h2>
            </div>
            {/* WEB SECTION CONTAINER */}
            <div className="webSections">
              <h3>Sections</h3>
              <div className="sectionLinks">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis ea natus voluptatibus. Sint voluptatum aspernatur
                  blanditiis omnis a nam itaque{" "}
                </h5>
              </div>
            </div>
            {/* POPULAR TAGS CONTAINER  */}
            <div className="popularTags">
              <h3>Popular Tags</h3>
              <div className="tags">
                {tags.map((tag) => {
                  const { id, btnValue } = tag;
                  return <button key={id}>{btnValue}</button>;
                })}
              </div>
            </div>
          </div>

          {/* WHAATSAPP ICON CONTAINER */}
          
          {/* <a
            href="http://google.com"
            className="footerSection2contaiiner1-whatsAppLink">
            <div className="whatsappLinkContext">
              <div className="whatsAppLogo">
                <img src={whatsApp} alt="whatsApp icon" />
              </div>
              <h3>
                join our <br /> whatsApp <br /> community
              </h3>
            </div>
          </a>  */}
        </div>
      </div>

      <div className="copyright">
        COPYRIGHT &copy; 2021 - 2022 | All Right Reserved | Yahnz -- OSUYA NELSON
      </div>
    </div>
  );
}

export default Footer;
