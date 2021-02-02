import React from 'react';


class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            muted: true,
            sound: String.fromCharCode(55357, 56586)
        }
        this.ref = React.createRef()
        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleUnhover = this.handleUnhover.bind(this)
        this.mute = this.mute.bind(this)
    }
    

    handleClick(e) {
        e.preventDefault()
        this.props.action(this.props.id)
    }

    mute(e) {
        e.preventDefault()
        this.state.muted = !this.state.muted
        // console.log(this.state.muted)
        this.ref.current.muted = !this.ref.current.muted
        this.state.sound = String.fromCharCode(55357, 56586)
        if (this.state.muted) {
            this.state.sound = String.fromCharCode(55357, 56583)
        }
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
    }
    
    render() {

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
                <a className="muteBut hidden" onClick={this.mute} >{this.state.sound}</a>
                <a className='vidPage'>&#9654;</a>
            </div>
        )
    }
}

export default Video;