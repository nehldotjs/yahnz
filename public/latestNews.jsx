import { render } from '@testing-library/react';
import React, { useState } from 'react';
//import uuid v4
import { v4 as uuid } from 'uuid';

// STYLE SHEET
import "../homeComponets/homeStyleComponent/latestNewsStyleSheet.css";
// CONTEXT
function LatestNews(props) {
    const [load, setLoad] = useState(3);
    const { data } = props;
    const unique_id = uuid();
    console.log(unique_id)

    function addMore() {
        setLoad(() => {
            return (load + 2)
        })
    }
    render(
        () => {
            return (
                <>
                    <div className="latestNewsContainer">
                        <div className="latestNewsHeader">
                            <h3>LATEST NEWS</h3>
                        </div>
                        <div className="latestNewsContent">
                            {
                                data.slice(0, load).map((item) => {
                                    const {
                                        url,
                                        title,
                                        urlToImage,
                                    } = item;
                                    return (
                                        <div >
                                            <a
                                                key={unique_id}
                                                href={url}
                                                className="l-newsUpdateContent"
                                            >
                                                <div className="l-imgContainer">
                                                    <img src={urlToImage} alt="loading" />
                                                </div>
                                                <div className="l-context">
                                                    <p> {title} </p>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                            < button className='moreBtn' onClick={addMore}>
                                View More
                            </button>
                        </div>
                        <div className="latestNewsHeader">
                            <h3>MUSIC</h3>
                        </div>
                    </div >
                </>
            )
        }
    )
}
export default LatestNews;