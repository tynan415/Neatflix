import React from 'react';
import Video from '../home_page/video'

class MyList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchList()
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

        return (
            <div className="myList">
                <p className="genre" >My List</p>
                <div className="pixelSpace" />
                    {
                    my_vids.map((video, i) => (
                        <Video img={video.photo_url} key={i} id={video.id} action={this.props.deleteFromList} />
                    ))
                    }
            </div>
        )
    }
}

export default MyList;