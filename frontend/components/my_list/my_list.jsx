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
        return (
            <div className="myList">
                <p className="genre" >My List</p>
                
            </div>
        )
    }
}

export default MyList;