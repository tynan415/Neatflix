import React, { useState, useEffect } from 'react';
import Video from '../home_page/video';


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
            <div className="space" />
            <ul className="searchDisplay">
                {
                    vids.map((video, i) => (     
                        // <img className="searchItem" key={i} src={video.photo_url} alt={video.title}></img>
                        <Video img={video.photo_url} key={i} action={props.addToList} id={video.id}/>     
                    ))
                }
            </ul>
        </div>
    )
    
}
export default SearchPage;

