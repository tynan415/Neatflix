import React from 'react';
import { Link } from 'react-router-dom';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            errors: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    renderErrors() {
        if (!this.props.errors) return null;
        return (<p className="errorsIn" >{this.props.errors[0]}</p>)
    }

    render() {
        return (
            <div className="signIn-div">
                <div id="gradient">
                    <div id="backGround"/>          
                </div>
                <form className="signIn-form">
                    <h1>Sign In</h1>
                    <input
                        className="signIn"
                        id="email"  
                        value={this.state.email} 
                        onChange={this.handleInput('email')}
                        placeholder="email"
                    />
                    <input
                        className="signIn"
                        id="password"
                        type="password"  
                        value={this.state.password} 
                        onChange={this.handleInput('password')}
                        placeholder="password"
                    />
                    {this.renderErrors()}
                    <button id="sifBut" onClick={this.handleSubmit}>Sign In</button>
                    <p id="newTo">New to Neatflix?</p>
                    <Link id="SignUpNow" to={"/"}>Sign Up Now</Link>
                </form>
            </div>
        )
    }
}

export default SignIn;