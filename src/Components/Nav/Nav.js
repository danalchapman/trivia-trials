import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return (
        <nav className='nav-bar'>
            <h1 className='trivia-title'>Trivia Trials</h1>
            <span>
                <NavLink exact to='/'>Home</NavLink> | <NavLink exact to='/review'>Review</NavLink>
            </span>
        </nav>
    )
}