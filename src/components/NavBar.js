import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = (props) =>
    <div className="navbar">
        {props.user ?
            <div className="links">
                <NavLink
                    className='link'
                    to="/"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                >Home</NavLink>
                <NavLink
                    className='link'
                    to="/activities"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                >Activities</NavLink>
                <NavLink
                    className='link'
                    to="/skills"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                >Skills</NavLink>
                <div className='user-links'>
                    <div>
                        <NavLink
                            className='user-link'
                            to="/profile"
                            exact
                            activeStyle={{
                                color: 'gold'
                            }}
                        >Profile</NavLink>
                        <NavLink
                            className='user-link'
                            to="/my-account"
                            exact
                            activeStyle={{
                                color: 'gold'
                            }}
                        >Account</NavLink>
                    </div>
                </div>
            </div>
            :
            <div className='user-links'>
                <div>
                    <NavLink
                        className='user-link'
                        to="/login"
                        exact
                        activeStyle={{
                            color: 'gold'
                        }}
                    >Sign In</NavLink>
                </div>
            </div>
        }
    </div>

export default NavBar