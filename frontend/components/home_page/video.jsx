import React from 'react';


class Video extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className={this.props.pos}>
                <video controls>
                    <source src={this.props.src} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Video;