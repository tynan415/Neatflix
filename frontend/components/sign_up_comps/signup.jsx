import React from 'react';

class SignUp extends React.Component {

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
            <div className="SignUp">
                <form className="signUp-form">
                    <h1>choose a password</h1>
                    <input
                        id="password"
                        type="password"  
                        value={this.state.password} 
                        onChange={this.handleInput('password')}
                        placeholder="password"
                    />
                    <button id="suBut" onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }

}

export default SignUp;