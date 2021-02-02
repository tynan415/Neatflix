import React from 'react';
import Video from '../home_page/video'

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
        let video_ids = [];
        let my_vids = [];
        if (this.props.myList[0]) {
            Object.values(this.props.myList).forEach((ele) => {
                video_ids.push(ele.video_id)
            
                if (this.props.videos) {
                    my_vids.push(this.props.videos[ele.video_id])
                }
            })
        }
        if (this.props.myList[0]) {
            return (
                <div className="myListContainer"  onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover} >
                <div className="myList" id="listScroll" >
                    <p className="genre" >My List</p>
                    <div className="pixelSpace" />
                        {
                            my_vids.map((video, i) => (
                                <Video clsNameBut="addButton hidden" img={video.photo_url} key={i} id={video.id} action={this.props.deleteFromList} onList={true} />
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