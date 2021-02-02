import React from 'react';


class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.email ? this.props.email : '',
            password: '',
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHome = this.handleHome.bind(this);
        this.clearedErrors = false;
        this.renderErrors = this.renderErrors.bind(this);
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

    renderErrors(type) {
        if (!this.props.errors) return null;

        return this.props.errors.map((error, i) => {
            if (error.includes(type)) {
                return (<p className="errors" key={i}>{error}</p>)
            } else {
                return null
            }
        })
    }

    handleHome(e) {
        e.preventDefault()
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="SignUp">
                <div id="logo" onClick={this.handleHome} />
                <div id="headLine"></div>
                <form className="signUp-form">
                <h1>enter your email</h1>
                <input
                        className="passwordSu"
                        type="text"
                        value={this.state.email} 
                        onChange={this.handleInput('email')}
                        placeholder="email"
                    />
                    {this.renderErrors("Email")}
                    <h1>choose a password</h1>
                    <input
                        className="passwordSu"
                        type="password"  
                        value={this.state.password} 
                        onChange={this.handleInput('password')}
                        placeholder="password"
                    />
                    {this.renderErrors("Password")}
                    <button id="suBut" onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }

}

export default SignUp;