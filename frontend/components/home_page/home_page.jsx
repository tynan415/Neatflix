import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import Video from './video';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            genreType: []
        }
    }

    componentDidMount() {
        this.props.getVideos()
        this.props.requestGenres()
    }


 
    render() {
        if (this.props.videos.length === 0 || this.props.genres.length === 0) {
            return null;
        } else {

        const { videos, genres } = this.props;

        let action = videos.filter(video => (
            genres[video.genre_id].name === "Action"
        ));

        let comedy = videos.filter(video => (
            genres[video.genre_id].name === "Comedy"
        ));

        let drama = videos.filter(video => (
            genres[video.genre_id].name === "Drama"
        ));

        return (
            <div className="homePage" >
                    <div className="previewBox">
                        <video src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" controls autoPlay muted/>
                    </div>
                <div className="actionContainer">
                    <p className="genre" >Action</p>
                        <div className="action">
                        <div className="pixelSpace" />
                        {
                            action.map((video, i) => (     
                                <Video img={video.photo_url} key={i}/>     
                            )) 
                        }
                        </div>
                </div>
                <div className="comedyContainer">
                    <p className="genre" >Comedy</p>
                    <div className="comedy">
                        <div className="pixelSpace" />
                        {
                            comedy.map((video, i) => (     
                                <Video img={video.photo_url} key={i}/>     
                            )) 
                        }
                    </div>
                </div>
                <div className="dramaContainer">
                    <p className="genre" >Drama</p>
                    <div className="drama">
                        <div className="pixelSpace" />
                        {
                            drama.map((video, i) => (     
                                <Video img={video.photo_url} key={i}/>     
                            )) 
                        }
                    </div>
                </div>
        </div>
        )

        }

        
    }
}

export default HomePage;