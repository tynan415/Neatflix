import React from 'react';
import NavBar from '../nav_bar/nav_bar';


class HomePage extends React.Component {
    render() {
        return (
            <div className="homePage" >
                <NavBar logout={this.props.logout} />

                <div className="topTen">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>

            </div>
        )
    }
}

export default HomePage;