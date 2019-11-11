import React from 'react'
import { Link } from 'react-router-dom';

class UserMenu extends React.Component {

    render() {

        let visibility = 'hide'

        if (this.props.menuVisible) visibility = 'show'

        return (
            <div id="userMenu" className={visibility}>

                <h2><Link
                    className="menu-link"
                    to="/profile"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Profile</Link></h2>

                <h2><Link
                    className="menu-link"
                    to="/my-account"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.hideMenu}

                >My Account</Link></h2>
                <h2><Link
                    className="menu-link"
                    to="/login"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                    onClick={this.props.logout}

                >Log Out</Link></h2>
            </div>
        )
    }

}

export default UserMenu