import React from 'react'
import { Link } from 'react-router-dom';

class MainMenuSlider extends React.Component {

    render() {

        let visibility = 'hide'

        if (this.props.menuVisible) visibility = 'show'

        return (
            <div id="flyoutMenu" className={visibility}>
                <h2><Link
                    className="menu-link"
                    to="/"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}
                >Home</Link></h2>

                <h2><Link
                    className="menu-link"
                    to="/activities"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >All Activities</Link></h2>
                <h2><Link
                    className="menu-link"
                    to="/skills"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >All Skills</Link></h2>

                <h2><Link
                    className="menu-link"
                    to="/myskills"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Skills</Link></h2>

                <h2> <Link
                    className="menu-link"
                    to="/myactivities"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Activities</Link></h2>
            </div>
        )
    }

}

export default MainMenuSlider