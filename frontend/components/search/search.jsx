// import NavBar from '../nav_bar/nav_bar';
// class SearchPage extends React.Component { 
//     render() {
//         return (   
//             <div className="searchPage">
//             </div>
//         )
//     }
// }
// export default SearchPage;

import React, { useState, useEffect } from 'react';

const SearchPage = (props) => {
    // const [ videos, setVideos ] = useState(props.videos);

    useEffect(() => {
        props.requestVideos()
    }, [])

    let vids = props.videos[0];
    if(!vids) return null;
    return (
        <div className="searchComp">
            <ul className="searchDisplay">
                {
                    vids.map((video, i) => (    
                        <li className="searchItem" key={i}>{video.title}</li>       
                    ))
                }
            </ul>
        </div>
    )
    
}
export default SearchPage;

