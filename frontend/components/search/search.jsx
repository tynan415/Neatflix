import React, { useState, useEffect } from 'react';

const SearchPage = (props) => {
  
    useEffect(() => {
        props.requestVideos()
    }, [])


    let search = props.search
    let vids = props.videos.filter(video =>(
        video.title.toLowerCase().includes(search.toLowerCase())
    ))
    if(!vids) return null;
    return (
        <div className="searchComp">
            <ul className="searchDisplay">
                {
                    vids.map((video, i) => (     
                        <img className="searchItem" key={i} src={video.photo_url} alt={video.title}></img>     
                    ))
                }
            </ul>
        </div>
    )
    
}
export default SearchPage;

