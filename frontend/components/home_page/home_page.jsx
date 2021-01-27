import React from 'react';
import Video from './video';
import MyList from '../my_list/my_list_container';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
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



    // buttonRight = document.getElementById('slideRight');
    // buttonLeft = document.getElementById('slideLeft');

    // buttonRight.onclick = function () {
    //   document.getElementById('container').scrollLeft += 20;
    // };
    minusSlides = () => {
        // debugger
        document.getElementById('actionScroll').scrollLeft += 2000;
    }
    plusSlides = () => {
        // debugger
        document.getElementById('actionScroll').scrollLeft -= 2000;
    }

    // plusSlides(n) {
    //     let slideIndex = 1;
    //     let i;
    //     let slides = document.getElementsByClassName("videoComp");
    //     if (n > slides.length) {slideIndex = 1}
    //     if (n < 1) {slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slides[slideIndex-1].style.display = "block";
    // }

 
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
                <MyList />
                <div className="actionContainer" >
                    <p className="genre" >Action</p>
                        <div className="action" id="actionScroll">
                        <a className="prev" onClick={this.plusSlides} >&#10094;</a>
                        <div className="pixelSpace" />
                        {
                            action.map((video, i) => (     
                                <Video img={video.photo_url} key={i}/>     
                            )) 
                        }
                        <a className="next" onClick={this.minusSlides} >&#10095;</a>
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