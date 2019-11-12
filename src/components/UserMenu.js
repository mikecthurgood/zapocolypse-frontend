import React from 'react'
import { NavLink } from 'react-router-dom';

class UserMenu extends React.Component {

    render() {

        let visibility = 'hide'

        if (this.props.menuVisible) visibility = 'show'

        return (
            <div id="userMenu" className={visibility}>

                <h2><NavLink
                    className="menu-link"
                    to="/profile"
                    exact
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Profile</NavLink></h2>

                <h2><NavLink
                    className="menu-link"
                    to="/my-account"
                    exact
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Account</NavLink></h2>
                <h2><NavLink
                    className="menu-link"
                    to="/login"
                    exact
                    activestyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.logout}

                >Log Out</NavLink></h2>
            </div>
        )
    }

}

export default UserMenu