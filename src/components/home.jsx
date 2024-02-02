import React, { useContext } from "react";
// STYLESHEET
import "../styleComponents/home.css";
// COMPONENTS
import CarouselFeed from "./homeComponets/carouselFeed";
import MostPopular from "./homeComponets/MostPopular";
import TrendingNews from "./homeComponets/TrendingNews";
import LatestNews from "./homeComponets/latestNews";
// CONTEXT
import { ApiDataContext } from "../context/ApiContext";

function Home(props) {
  const { pic } = props;
  const { news } = useContext(ApiDataContext);
  return (
    <>
      <div className="homeContainer">
        <CarouselFeed data={news} />
        <div className="headlines">
          <div className="latestNews">
            <LatestNews data={news} />
          </div>
          <div className="trending">
            <TrendingNews data={news} />
          </div>
          <div className="mostPopular">
            <MostPopular img={pic} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
