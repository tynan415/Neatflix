import React from 'react';
import { Link } from 'react-router-dom'

class SplashPage extends React.Component {


    render() {

        let welcome;
        if (this.props.location.pathname === "/") {
            welcome = <div className="welcome">
                <h1 id="welcomeH1">Unlimited movies, TV shows, and more.</h1>
                <h3 id="welcomeH3">Watch anywhere. Cancel anytime.</h3>
                <div id="line">
                    <p id="welcomeP">Ready to watch? Enter your email to create a membership, or try our
                    </p>
                    <input type="submit" value="demo Login!" id="demoBut" />
                </div>
                <div id="line2 ">
                    <input 
                    id="getStarted"
                    type="text"
                    placeholder="Email adress"
                    /> 
                    <Link id="getBut" to="/signup">GET STARTED</Link>
                </div>
            </div>
        } 

        let backId;
        if (this.props.location.pathname === "/signup") {
            backId = "plain"
        } else {
            backId = "backGround"
        }

        return(
            <div id="gradient">
                <div id={backId}/>
                {welcome}
            </div>
        )
    }
}

export default SplashPage;