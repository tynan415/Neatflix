import React from 'react';


class Session extends React.Component {
    constructor(props) {
        super(props);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    render() {
        return (
            <div>
                <h1>'sign in'</h1>
                <form >
                    <label>email
                        <input
                            type="text" 
                        />
                    </label>
                    <label>password:
                        <input
                            type="password"   
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default Session;