import React from 'react';
import { Link, Route } from 'react-router-dom';


class NavBar extends React.Component {

    render() {
        return(
            <div className="navBar" >
                <div id="logo" />
                <input type="text" 
                    id="search"
                    placeholder="Titles, Genres"
                />
                <div className="usersPic" />

            </div>
        )
    }
}

export default NavBar;