import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import Video from './video';

class HomePage extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getVideos()
    }
 
    render() {
        return (
            <div className="homePage" >
                    <Video 
                        src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                        pos="previewBox"
                    />
                <div className="actionContainer">
                    <p className="genre" >Action</p>
                        <div className="action">
                        {/* <button className="prev" >&#10094;</button> */}
                        <div className="pixelSpace" />
                        <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                            <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                            <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                            <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                            <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                            <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                            <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                        {/* <button className="next" >&#10095;</button> */}
                        </div>
                </div>
                <div className="comedyContainer">
                    <p className="genre" >Comedy</p>
                    <div className="comedy">
                        <div className="pixelSpace" />

                        <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                         <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                         <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                        <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                        <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                        <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                        <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                       
                    </div>
                </div>
                <div className="dramaContainer">
                    <p className="genre" >Drama</p>
                    <div className="drama">
                        <div className="pixelSpace" />
                    <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                     <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                     <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                     <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                     <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                     <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                     <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                     <Video 
                            src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                            pos="videoComp"
                        />
                    </div>
                </div>
        </div>
        )
    }
}

export default HomePage;