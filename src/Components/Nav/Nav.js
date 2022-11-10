import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return (
        <nav className='nav-bar'>
            <h1>Trivia Trials</h1>
            <span>
                <NavLink exact to='/'>Home</NavLink> | Review
            </span>
        </nav>
    )
}