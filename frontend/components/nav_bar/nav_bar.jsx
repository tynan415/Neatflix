import React from 'react';
import { Link, Route } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.removeToggle = this.removeToggle.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }
   
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
    }

    handleSearch(e) {
        e.preventDefault()
        setTimeout(() => {
            if (this.state.search === "") {
                this.props.history.push("/browse");
            } else {
                this.props.history.push(`/search/${this.state.search}`);
            }
        }, 300)
    }

    handleSearchClick(e) {
        let elem = document.getElementById("input")
        elem.classList.add("toggle")
        document.addEventListener('click', this.removeToggle)
    }

    removeToggle(e) {
        if (e.target !== document.getElementById("input")) {
            document.getElementById("input").classList.remove("toggle")
            document.removeEventListener('click', this.removeToggle);
        }
    }

    handleScroll(e) {
        let scrollpos = window.pageYOffset;
        let opacity = Math.ceil(scrollpos / 4) * 0.01
        document.getElementById("navBar").style.backgroundColor = `rgba(10, 10, 10, ${opacity})`;
    }
     
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleHome(e) {
        e.preventDefault()
        this.props.history.push("/browse")
    }

    handleUpdate(e) {
        this.setState({
            search: e.currentTarget.value
        })
    }

    render() {
        let placeholder = 'Title';
        if(this.state.search) {
            placeholder = this.state.search
        }
        return(
            <div className="navBar" id="navBar" >
                <div id="logo" onClick={this.handleHome} />
                <div onClick={this.handleHome} className="homeLink">Home</div>
                <div className="movieLink">Movies</div>
                <div className="tvLink">TV Shows</div>
                <div className="listLink">My List</div>
                
                <div className="searchGlass">
                    <div className="search"  onChange={this.handleSearch}>
                        <input className="input" id="input" type="text" placeholder={placeholder} onChange={this.handleUpdate} value={this.props.search} />
                        <img className="img" onClick={this.handleSearchClick}
                            src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg" alt=""></img>
                    </div>
                </div>
                
                <Link id="logOutBut" onClick={this.handleSubmit} to="/">logout</Link>
            </div>
        )
    }
}

export default NavBar;