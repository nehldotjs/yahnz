import React, { useState } from 'react';

import { v4 as uuid } from 'uuid';

// import { FaRegHeart } from "react-icons/fa";
// import { FaRegComment } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { FaRegPaperPlane } from "react-icons/fa";

// STYLESHEET
import "../homeComponets/homeStyleComponent/trendingNewsStyleSheet.css"

function TrendingNews() {
  // const { data } = props
  // const unique_id = uuid();
  // console.log(unique_id);

  const [activate, setActivate] = useState(false);
  const [like, setLike] = useState(false);
  const [likeAmount, setLikeAmount] = useState(10);

  const videoData = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/1pDQjwaH3qk",
      desc: `Listen to KU LO SA by Oxlade and its lyrics…
                Oxlade, a Nigerian elegant and brilliant Afro-beat artist, has released another anticipated tune titled “KU LO SA” under “A Colors Show.”
                “A Colors Show” is an innovative creative music platform that showcases outstanding talent from around the world. Oxlade, the Nigerian Afro-beats singer, was summoned this time, and he delivers an impassioned rendition of his latest song “KU LO SA,” which appears to be on the verge of becoming a blockbuster hit for the young musician.
                COLORS focuses on the most original upcoming performers and innovative sounds in an incredibly diversified and saturated business. All COLORS concerts strive to establish a clean, basic platform that focuses on the musicians and allows them to display their songs uninterrupted.
                Oxlade will also sing “KU LO SA,” following “A Colors Show,” which featured international stars such as Doja Cat, H.E.R., Mahalia, Jorja Smith, Ayra Starr, and others. This track is a follow-up to Ayra Starr’s rendition of “ASE.” READ MORE`,
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/x9yop0nYR9g",
      desc: `Quavo & Takeoff - HOTEL LOBBY | A COLORS SHOW
              3, 216, 403 views  Premiered on 17 Jun 2022  ​@Quavo Huncho and @Takeoff join forces as Unc & Phew for a stellar performance of their latest single.This show is the first in our series celebrating Black Music Month created in collaboration with Motown Records.

              COLORSxSTUDIOS is a unique aesthetic music platform showcasing exceptional talent from around the globe.COLORS focuses on the most distinctive new artists and original sounds in an increasingly fragmented and saturated scene.All COLORS shows seek to provide clear, minimalistic stage that shines a spotlight on the artists, giving them the opportunity to present their music without distraction.READ MORE`
    },
  ]
  function likedBtn() {
    return (
      setLike(true),
      setLikeAmount(likeAmount + 1)
    )
  };

  function active() {
    if (!activate) {
      setActivate(() => {
        return true
      });
    }
  }

  return (
    <>
      <div className='trendingNewsContainer' >
        <div className="trendingNewsHeader">
          <h3>TRENDING</h3>
        </div>

        {
          videoData.map((item) => {
            const { link, desc,id} = item;
            return (
              <div key={id}>
                <div className="trendingNewsContent">

                  <div className="youtubeindexeos">

                    <iframe
                      src={link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; 
                      autoplay; 
                      clipboard-write; 
                      encrypted-media; 
                      gyroscope; 
                      picture-in-picture"
                      allowFullScreen
                      className='youtube'
                    ></iframe>
                  </div>
                  <a
                    href={link}
                    download={link}
                    className="downloadBtn"
                  >
                    DOWNLOAD
                  </a>
                  <div className="T-contentContext">
                    <p className='videoDesc'>
                      {desc}
                    </p>

                    <div className="likeAndCommentContainer">
                      <div className='likesContainer'>
                        <div className="likeBtn" onClick={likedBtn}>
                          {
                            like ?
                              <button className='like'>
                                {/* <FaHeart className='icon heart' /> */}
                              </button>
                              :
                              <button className='like'>
                                {/* <FaRegHeart className='icon heart' /> */}
                              </button>
                          }
                        </div>

                        <div className="likeIndex">
                          <h4>{likeAmount}</h4>
                        </div>
                      </div>

                      <button className='commentBtn' onClick={active}>
                        {/* <FaRegComment className='icon' /> */}
                      </button>
                    </div>

                    <div className="interaction">
                      <div className="commentSection">
                        <form className={activate ? "textarea form" : "active"}>
                          <textarea className={activate ? "textarea " : "active"}
                            placeholder='Write a comment...'>
                          </textarea>
                          <button className={activate ? "commentSubmitBtn " : "active"}>
                            {/* <FaRegPaperPlane className='icon' /> */}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default TrendingNews;