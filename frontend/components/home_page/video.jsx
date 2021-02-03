import React from 'react';
import { Link } from 'react-router-dom'


class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            muted: true,
        }
        this.ref = React.createRef()
        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleUnhover = this.handleUnhover.bind(this)
        this.mute = this.mute.bind(this)
    }
    
    handleClick(e) {
        e.preventDefault()
       
        if (this.props.onList) {
            this.props.del(this.props.id)
        } else  {
            this.props.action(this.props.id)
        }
    }

    mute(e) {
        e.preventDefault()
        let newMuteVal = !this.state.muted
        this.setState({
            muted: newMuteVal
        })
        this.ref.current.muted = !this.ref.current.muted
    }

    handleHover(e) {
        let addBut = e.currentTarget.children[2]
        if (addBut) {
            addBut.classList.remove('hidden')   
        } 
        
        let muteBut = e.currentTarget.children[3]
        if (muteBut) {
            muteBut.classList.remove('hidden')  
        }
        let pageBut = e.currentTarget.children[4]
        if (pageBut) {
            pageBut.classList.remove('hidden')  
        }
        let vid = e.currentTarget.children[1]
        if (vid) {
            vid.play().catch(e => {
                return
            })

        }
    }
    
    handleUnhover(e) {
        let video = e.currentTarget.children[1];
        video.pause();
        video.currentTime = 0;
        video.load();
        e.currentTarget.children[2].classList.add('hidden')
        e.currentTarget.children[3].classList.add('hidden')
        e.currentTarget.children[4].classList.add('hidden')
    }
    
    render() {
        let sound = String.fromCharCode(55357, 56583)
        if (this.state.muted) {
            sound = String.fromCharCode(55357, 56586)
        }

        let sym = "+"
        if (this.props.onList) {
            sym = "-"
        }
        
        return (
            <div className="videoComp" onMouseOver={this.handleHover} onMouseLeave={this.handleUnhover}>
                <img src={this.props.img}  />
                <video onMouseOver={this.handleHover} muted ref={this.ref} >
                    <source src={this.props.src} type="video/mp4" />
                </video>
                <a className={this.props.clsNameBut} onClick={this.handleClick} >{sym}</a>
                <a className={this.props.muteButCls} onClick={this.mute} >{sound}</a>
                <Link className={this.props.playButCls} to={`/browse/${this.props.id}`} >&#9654;</Link>
            </div>
        )
    }
}

export default Video;