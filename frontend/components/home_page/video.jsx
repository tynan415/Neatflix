import React from 'react';


class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            muted: true
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleUnhover = this.handleUnhover.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.action(this.props.id)
    }

    handleHover(e) {
        let addBut = e.currentTarget.children[2]
        if (addBut) {
            addBut.classList.remove('hidden')
        }
        let vid = e.currentTarget.children[1]
        if (vid) {
            vid.play().catch(e => {
                console.log(e)
            })

        }
    }

    handleUnhover(e) {
        let video = e.currentTarget.children[1];
        video.pause();
        video.currentTime = 0;
        video.load();
        e.currentTarget.children[2].classList.add('hidden')
    }
    
    render() {

        let sym = "+"
        if (this.props.onList) {
            sym = "-"
        }

        return (
            <div className="videoComp" onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover}>
                <img src={this.props.img}  />
                <video onMouseOver={this.handleHover} muted>
                    <source src={this.props.src} type="video/mp4" />
                </video>
                <a className={this.props.clsNameBut} onClick={this.handleClick} >{sym}</a>
                <button className='play'></button>
            </div>
        )
    }
}

export default Video;