import React from "react";
import { v4 } from "uuid";

import Carousel from "react-elastic-carousel";
import "../homeComponets/homeStyleComponent/carousel.css";

function CarouselFeed(props) {

  const { data } = props;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    {
      width: 550, itemsToShow: 2,
      itemsToScroll: 2,
      pagination: false
    },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <div className="carouselContainer">
      <Carousel breakPoints={breakPoints}>
        {data.map((item) => {
          const {
            title,
            url,
            urlToImage,
          } = item;
          return (
            <div href={url} className="card" key={v4()}>
              <div className="categoryTag">
                <div className="context">
                  <h3 className="description">
                    {title}
                  </h3>
                </div>
                <img src={urlToImage} alt="img" />
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
}
export default CarouselFeed;
