import React from 'react'
import { NavLink } from 'react-router-dom';

class MainMenuSlider extends React.Component {

    render() {

        let visibility = 'hide'

        if (this.props.menuVisible) visibility = 'show'

        return (
            <div id="flyoutMenu" className={visibility}>
                <h2><NavLink
                    className="menu-link"
                    to="/"
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}
                >Home</NavLink></h2>

                <h2><NavLink
                    className="menu-link"
                    to="/activities"
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >All Activities</NavLink></h2>
                <h2><NavLink
                    className="menu-link"
                    to="/skills"
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >All Skills</NavLink></h2>

                <h2><NavLink
                    className="menu-link"
                    to="/myskills"
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Skills</NavLink></h2>

                <h2> <NavLink
                    className="menu-link"
                    to="/myactivities"
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Activities</NavLink></h2>
            </div>
        )
    }

}

export default MainMenuSlider