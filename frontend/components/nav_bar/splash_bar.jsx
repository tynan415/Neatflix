import React from 'react';
import { Link } from 'react-router-dom'


class splashBar extends React.Component {

  render() {
    let butId;
    if (this.props.location.pathname !== "/"){
      butId = "button";
    } else {
      butId = "siBut";
    }

    let button;
    if (this.props.location.pathname !== "/login"){
      button = <Link id={butId} to="/login">Sign In</Link>
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