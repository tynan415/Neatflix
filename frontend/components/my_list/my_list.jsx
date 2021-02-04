import React from 'react';
import Video from '../home_page/video_cont'

class MyList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchList()
    }

    scrollLeftL = () => {
        document.getElementById('listScroll').scrollLeft += 1000;
    }
    scrollRightL = () => {
        document.getElementById('listScroll').scrollLeft -= 1000;
    }

    
    handleHover(e) {
        e.currentTarget.children[2].classList.remove('hidden')
        e.currentTarget.children[1].classList.remove('hidden')
    }

    handleUnhover(e) {
        e.currentTarget.children[2].classList.add('hidden')
        e.currentTarget.children[1].classList.add('hidden')
    }

    render() {
        let my_vids = [];
        let my_shows = [];
        let my_movies = [];
        if (!!this.props.myList[0]) {
            
            Object.values(this.props.myList).forEach((vid) => {
                if (this.props.videos) {
                    my_vids.push(this.props.videos[vid.video_id])
                    
                    if (this.props.videos[vid.video_id].description === 'show') {
                        my_shows.push(this.props.videos[vid.video_id])
                    } else {
                        my_movies.push(this.props.videos[vid.video_id])
                    }
                }
                
            })
        }

        let listName = "My List"
        if (this.props.path === "/movies") {
            listName = "My Movies"
            my_vids = my_movies
        } else if (this.props.path === "/shows") {
            listName = "My Shows"
            my_vids = my_shows
        }

        if (!!this.props.myList[0]) {
            return (
                <div className="myListContainer"  onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover} >
                <div className="myList" id="listScroll" >
                    <p className="genre" >{listName}</p>
                    <div className="pixelSpace" />
                        {
                            my_vids.map((video, i) => (
                                <Video clsNameBut="addButton hidden"
                                    playButCls="vidPage hidden"
                                    muteButCls="muteBut hidden" 
                                    src={video.video_url} 
                                    img={video.photo_url} 
                                    key={i} id={video.id} 
                                    del={this.props.deleteFromList} 
                                    onList={true} 
                                />
                                ))
                            }
                </div>
                    <a className="next hidden" onClick={this.scrollLeftL} >&#10095;</a>
                    <a className="prev hidden" onClick={this.scrollRightL} >&#10094;</a>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default MyList;