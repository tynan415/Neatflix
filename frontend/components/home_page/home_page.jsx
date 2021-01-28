import React from 'react';
import Video from './video';
import MyList from '../my_list/my_list_container';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            genreType: [],
        }
        this.plusSlides = this.plusSlides.bind(this)
    }

    componentDidMount() {
        this.props.getVideos()
        this.props.requestGenres()
    }

    minusSlides = () => {
        document.getElementById('actionScroll').scrollLeft += 1000;
    }
    plusSlides = () => {
        document.getElementById('actionScroll').scrollLeft -= 1000;
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
                        <video src="https://www.youtube.com/embed/pVIwOZbvAoY" controls autoPlay muted/>
                        <iframe src="https://www.youtube.com/embed/pVIwOZbvAoY" frameBorder="0" allow="autoplay;"></iframe>
                    </div>
                 <MyList />
                
                <div className="actionContainer" >
                    <p className="genre" >Action</p>
                        <a className="prev" onClick={this.plusSlides} >&#10094;</a>
                        <div className="action" id="actionScroll">
                        <div className="pixelSpace" />
                        {
                            action.map((video, i) => (     
                                <Video img={video.photo_url} key={i} action={this.props.addToList} id={video.id}/>     
                            )) 
                        }
                        </div>
                        <a className="next" onClick={this.minusSlides} >&#10095;</a>
                </div>
                <div className="comedyContainer">
                    <p className="genre" >Comedy</p>
                    <div className="comedy">
                        <div className="pixelSpace" />
                        {
                            comedy.map((video, i) => (     
                                <Video img={video.photo_url} key={i} action={this.props.addToList} id={video.id}/>     
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
                                <Video img={video.photo_url} key={i} action={this.props.addToList} id={video.id}/>     
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