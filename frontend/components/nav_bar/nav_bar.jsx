import React from 'react';
import { Link, Route } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleHome = this.handleHome.bind(this)
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
            <div className="navBar" >
                <div id="logo" onClick={this.handleHome} />

                <form onChange={this.handleSearch} className="search">
                    <input type="text"  placeholder={placeholder} onChange={this.handleUpdate} value={this.props.search} />
                </ form>
                
                <Link id="logOutBut" onClick={this.handleSubmit} to="/">logout</Link>
            </div>
        )
    }
}

export default NavBar;