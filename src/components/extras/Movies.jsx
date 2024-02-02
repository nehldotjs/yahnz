import React, { useContext, useState } from 'react'
// import image from "../../assets/footer.png"
// STYLESHEET
import "./movies.css";
// CONTEXT
import { MovieContextValue } from '../../context/propContext/moviesApiContext';

function Movies(props) {
    const [view, setView] = useState(3);
    function addMore() {
        setView(() => {
            return (view + 2);
        })
    }
    const { movies } = useContext(MovieContextValue)
    const IMG_URL = `http://image.tmdb.org/t/p/w500`;
    return (
        <>
            < div className="extrasContainer">
                <div className="moviesHeader">
                    <h3>
                        TOP MOVIES
                    </h3>
                </div>
                <div className="movieListContainer">
                    <div className="movieContext">
                        <div >
                            {
                                movies.slice(0, view).map((item) => {
                                    const {
                                        title,
                                        poster_path,
                                        release_date,
                                        id,
                                    } = item;
                                    return (
                                        <div className='movieListWrapper' key={id}>
                                            <div className="movieImageContainer">
                                                <img src={IMG_URL + poster_path}
                                                    alt={title} />
                                            </div>
                                            <div className="moviesWriteUp">
                                                <h3>{title}
                                                </h3>
                                                <div className="publish">
                                                    <p className="time">{release_date}</p>
                                                    {/* <p className="auto">{overview}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                            <button className='moreBtn' onClick={addMore}>View More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Movies; 