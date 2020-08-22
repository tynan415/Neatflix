import React from 'react';

class SplashPage extends React.Component {


    render() {

        let getStarted;
        if (this.props.location.pathname !== "/login") {
            getStarted = <div>
                <input 
                id="getStarted"
                type="text"
                placeholder="Email adress"
                /> 
                <button id="getBut">GET STARTED!</button>
            </div>
        }

        let welcome;
        if (this.props.location.pathname === "/") {
            welcome = <div className="welcome">
                <h1 id="welcomeH1">Unlimited movies, TV shows, and more.</h1>
                <h3 id="welcomeH3">Watch anywhere. Cancel anytime.</h3>
                <p id="welcomeP">Ready to watch? Enter your email to create a membership, or try our
                </p>
                <input type="submit" value="demo Login" id="demoBut" />
                
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
                {getStarted}
            </div>
        )
    }
}

export default SplashPage;