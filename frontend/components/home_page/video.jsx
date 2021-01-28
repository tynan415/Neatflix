import React from 'react';


class Video extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.action(this.props.id)
    }

    render() {
        return (
            <div className="videoComp" >
                <img src={this.props.img} onClick={this.handleClick} />
                {/* <video controls>
                    <source src={this.props.src} type="video/mp4" />
                </video> */}

            </div>
        )
    }
}

export default Video;