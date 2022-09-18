import React from "react";
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <header >
            <nav className='navbar'>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/search'>Search</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/adaptive'>Adaptive list</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/widget'>Element widget</NavLink>
            </nav>
        </header>
    )
}