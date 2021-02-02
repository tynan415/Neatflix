import React, { useState, useEffect } from 'react';
import Video from '../home_page/video';


const SearchPage = (props) => {
  
    useEffect(() => {
        props.requestVideos()
    }, [])


    let search = props.search
    // console.log(search)
    let vids = props.videos.filter(video =>(
        video.title.toLowerCase().includes(search.toLowerCase())
    ))

    if(vids.length === 0) return (
        <div className="noResults">
            <div className="shrug">your search yielded no results.
            </div>
        </div>
    )
    
    return (
        <div className="searchComp">
            <div className="space" />
            <ul className="searchDisplay">
                {
                    vids.map((video, i) => (     
                        <Video clsNameBut="srchAddBut hidden"
                            playButCls="srchPlayBut hidden"
                            muteButCls="srchMuteBut hidden" 
                            src={video.video_url} 
                            img={video.photo_url} key={i} 
                            action={props.addToList} 
                            id={video.id}
                        />     
                    ))
                }
            </ul>
            <div className="searchFill" />    
        </div>
    )
    
}
export default SearchPage;

