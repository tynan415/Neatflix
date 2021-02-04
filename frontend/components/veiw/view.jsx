import React from 'react';

class View extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // this.props.getVideos()
        this.props.requestGenres()
        this.props.requestVideo(this.props.match.params.videoId);
    }

    render(){
        return(
            <div className='view'>
                {
                    this.props.video ? <div className='centerDiv'>
                        <video controls autoPlay className="fullVideo"> 
                            <source src={this.props.video.video_url} type="video/mp4" />
                        </video> 
                    </div> : null
                }
            </div>
        );
    }
}

export default View;