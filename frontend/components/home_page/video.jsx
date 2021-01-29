import React from 'react';


class Video extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleUnhover = this.handleUnhover.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.action(this.props.id)
    }

    handleHover(e) {
        e.currentTarget.children[1].classList.remove('hidden')
    }

    handleUnhover(e) {
        e.currentTarget.children[1].classList.add('hidden')
    }

    render() {
        let sym = "+"
        if (this.props.onList) {
            sym = "-"
        }
        return (
            <div className="videoComp" onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover}>
                <img src={this.props.img}  />
                {/* <video controls>
                    <source src={this.props.src} type="video/mp4" />
                </video> */}
                <a className="addButton hidden" onClick={this.handleClick} >{sym}</a>
            </div>
        )
    }
}

export default Video;