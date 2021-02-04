import React from 'react'
import Video from '../home_page/video_cont'
import MyList from '../my_list/my_list_container'

class TypeShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.handleHover = this.handleHover.bind(this)
        this.handleUnhover = this.handleUnhover.bind(this)
        }
    
    componentDidMount() {
        this.props.getVideos()
        this.props.requestGenres()
        this.props.fetchList()
    }

    
    scrollLeftA = () => {
        document.getElementById('actionScroll').scrollLeft += 1000;
    }
    scrollRightA = () => {
        document.getElementById('actionScroll').scrollLeft -= 1000;
    }
    scrollLeftC = () => {
        document.getElementById('comedyScroll').scrollLeft += 1000;
    }
    scrollRightC = () => {
        document.getElementById('comedyScroll').scrollLeft -= 1000;
    }
    scrollLeftD = () => {
        document.getElementById('dramaScroll').scrollLeft += 1000;
    }
    scrollRightD = () => {
        document.getElementById('dramaScroll').scrollLeft -= 1000;
    }
 
    handleHover(e) {
        e.currentTarget.children[2].classList.remove('hidden')
        e.currentTarget.children[3].classList.remove('hidden')
    }

    handleUnhover(e) {
        e.currentTarget.children[2].classList.add('hidden')
        e.currentTarget.children[3].classList.add('hidden')
    }


    render() {
        if (this.props.videos.length === 0 || Object.values(this.props.genres).length === 0) {
            return null;
        }  else {

            let pageVids = [];
            this.props.videos.forEach((vid) => {
               
                if (vid.description + 's' === this.props.match.path.slice(1)) {
                    pageVids.push(vid)
                }
            })

            
            let action = pageVids.filter(video => (
                this.props.genres[video.genre_id].name === "Action"
            ));
    
            let comedy = pageVids.filter(video => (
                this.props.genres[video.genre_id].name === "Comedy"
            ));
    
            let drama = pageVids.filter(video => (
                this.props.genres[video.genre_id].name === "Drama"
            ));

            let randVid = Math.floor(Math.random() * Math.floor(pageVids.length-1))
            return (
                <div className="typeShowPage">
                    <div className="previewBox">
                        <video src={pageVids[randVid].video_url} autoPlay muted controls> 
                        </video>
                    </div>
                    <MyList path={this.props.match.path} />

                    <div className="actionContainer"  onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover}>
                        <p className="genre">Action</p>
                        <div className="action" id="actionScroll" >
                        <div className="pixelSpace" />
                            {
                            action.map((video, i) => (     
                                <Video clsNameBut="addButton hidden" playButCls="vidPage hidden" muteButCls="muteBut hidden"
                                    src={video.video_url} img={video.photo_url} key={i} action={this.props.addToList} 
                                    del={this.props.deleteFromList} id={video.id} />     
                                )) 
                            }
                        </div>
                        <a className="next hidden" onClick={this.scrollLeftA} >&#10095;</a>
                        <a className="prev hidden" onClick={this.scrollRightA} >&#10094;</a>
                    </div>
                    <div className="comedyContainer" onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover}>
                    <p className="genre" >Comedy</p>
                    
                    <div className="comedy" id="comedyScroll">
                        <div className="pixelSpace" />
                        {
                            comedy.map((video, i) => (     
                                <Video clsNameBut="addButton hidden" playButCls="vidPage hidden" muteButCls="muteBut hidden"
                                src={video.video_url} img={video.photo_url} key={i} action={this.props.addToList}
                                del={this.props.deleteFromList} id={video.id}/>     
                            )) 
                        }
                    </div>
                    <a className="next hidden" onClick={this.scrollLeftC} >&#10095;</a>
                    <a className="prev hidden" onClick={this.scrollRightC} >&#10094;</a>
                </div>
                <div className="dramaContainer" onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover}>
                    <p className="genre" >Drama</p>
                    <div className="drama" id="dramaScroll">
                        <div className="pixelSpace" />
                        {
                            drama.map((video, i) => (     
                                <Video clsNameBut="addButton hidden" playButCls="vidPage hidden" muteButCls="muteBut hidden" 
                                src={video.video_url} img={video.photo_url} key={i} action={this.props.addToList} 
                                del={this.props.deleteFromList} id={video.id}/>     
                            )) 
                        }
                    </div>
                    <a className="next hidden" onClick={this.scrollLeftD} >&#10095;</a>
                    <a className="prev hidden" onClick={this.scrollRightD} >&#10094;</a>
                </div>
                <div className="logos"></div>
            </div>
            )
        }
        

    } 

}

export default TypeShowPage;