import React from 'react';
import Video from '../home_page/video'

class MyList extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        this.props.requestLists()
    }


    render() {
        return (
            <div className="myList">
                 <Video 
                    src="https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.mp4" 
                    pos="videoComp"
                />
            </div>
        )
    }
}