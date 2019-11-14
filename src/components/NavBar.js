import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = (props) =>
    <div className="navbar">
        <div className='zapocalypse'>
            <h1>ZAPOCALYPSE</h1>
        </div>
        {props.user ?

            <div className="links">
                <div className="nav-links">
                    <button onClick={props.toggleMenu} className='menu-button'>Menu</button>
                </div>
                <div className='user-links'>
                    <span className='user-link'>
                        {props.totalZaps}⚡
                    </span>
                    <button onClick={props.toggleUserMenu} className='menu-button'>{props.user}</button>
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