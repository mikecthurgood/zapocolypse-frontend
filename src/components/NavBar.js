import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'


const NavBar = (props) =>
    <div className="navbar">
        {props.user ?
            <div className="links">
                <div className="nav-links">
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
                </div>
                <div className='user-links'>
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
                    <Button color='orange' onClick={props.logOut}>Log Out</Button>
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
                    >Login</NavLink>
                    <NavLink
                        className='user-link'
                        to="/create-account"
                        exact
                        activeStyle={{
                            color: 'gold'
                        }}
                    >Create Account</NavLink>
                </div>
            </div>
        }
    </div >

export default NavBar