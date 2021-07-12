import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <div>
            <NavLink to="/">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
        </div>
    )
}

export default Nav
