import React from 'react';
import { Link } from 'react-router-dom'

class SplashPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: false,
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email) {
            return this.props.history.push(`/signup/${this.state.email}`)
        } else {
            return this.setState({ ['error']: true});
        }
    }

    
    render() {
        let welcome;
        // debugger
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
                        placeholder="Email address"
                        value={this.state.email} 
                        onChange={this.handleInput('email')}
                    /> 
                    <button id="getBut" onClick={this.handleSubmit}>GET STARTED</button>
                    
                </div>
            </div>
        } 

        let backId;
        if (this.props.location.pathname === "/signup") {
            backId = "plain"
        } else {
            backId = "backGround"
        }

        let emailError;
        if (this.state.error) {
            emailError = <p className="emailError" >Email is Required!</p>
        }

        return(
            <div id="gradient">
                <div id="logo" />
                
                    <Link id="button" to="/login">Sign In</Link>
               
                <div id={backId}/>
                {welcome}
                {emailError}
            </div>
        )
    }
}

export default SplashPage;