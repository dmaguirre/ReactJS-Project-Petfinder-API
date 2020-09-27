import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className='navbar'>
            <NavLink exact to="/home" activeClassName="active-tab">Home</NavLink>
            <NavLink exact to="/findapet" activeClassName="active-tab">Find A Pet</NavLink>
            <NavLink exact to="/about" activeClassName="active-tab">About Us</NavLink>
            <NavLink exact to="/contactus" activeClassName="active-tab">Contact Us</NavLink>
        </nav>
    )
}
