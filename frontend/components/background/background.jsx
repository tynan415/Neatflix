import React from 'react';

class SplashPage extends React.Component {
    render() {

        let getStarted;
        if (this.props.location.pathname !== "/login"){
            getStarted = <input id="getStarted" type="text"/> 
        }


        return(
            <div id="gradient">
                <div id="backGround"/>
                {getStarted}
            </div>
        )
    }
}

export default SplashPage;