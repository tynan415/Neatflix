import React from 'react';
import { Link, Route } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
    }

    render() {
        return(
            <div className="navBar" >
                <div id="logo" />
                <input type="text" 
                    id="search"
                    placeholder="Titles, Genres"
                />
                <div className="usersPic" />
                <Link id="logOutBut" onClick={this.handleSubmit} to="/">logout</Link>
            </div>
        )
    }
}

export default NavBar;