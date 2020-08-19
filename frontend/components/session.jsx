import React from 'react';


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
            <div className="signIn-form">
                <h1>Sign In</h1>
                <form >
                    <label>Email
                        <input
                            type="text"
                            value={this.state.email} 
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"  
                            value={this.state.password} 
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Session;