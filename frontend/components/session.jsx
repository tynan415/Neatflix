import React from 'react';
import { Link } from 'react-router-dom';


class Session extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
        
    }

    render() {
        return (
            <div >
                <form className="signIn-form">
                <h1>Sign In</h1>
                    <input
                        className="signIn"
                        id="email"
                        type="text"
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
                    <button className="signIn" id="siBut" onClick={this.handleSubmit}>Sign In</button>
                    <p id="newTo">New to Neatflix?</p>
                        <Link id="SignUpNow" to={"/"}>Sign Up Now</Link>
                </form>
            </div>
        )
    }
}

export default Session;