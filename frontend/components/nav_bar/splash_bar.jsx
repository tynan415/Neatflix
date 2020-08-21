import React from 'react';
import { Link } from 'react-router-dom'


class splashBar extends React.Component {

  render() {
    
    let button;
    if (this.props.location.pathname !== "/login"){
      button = <Link id="button" to="/login">Sign In</Link>
    }

    return (
      <header className="splash-bar">
        <div id="logo" />
        {button}
      </header>
    )
  }
}

export default splashBar;