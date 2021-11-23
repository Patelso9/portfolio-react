import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
// import 'bootstrap/dist/css/bootstrap.css';



const Nav = () => {

    return (

        <div className="nav-bar">
            <h1 class="my-name">Sonali P.</h1>
            <div class="nav-item">
                <NavLink to="/">About Me</NavLink>
                <NavLink to="/portfolio"> | Portfolio</NavLink>
                <NavLink to="/contact"> | Contact Me</NavLink>
                {/* <NavLink to="/insta">| Instagram</NavLink> */}
            </div>
        </div>

        
        //-------------BOOTSTRAP TRIAL ---------------------//
        // <div className="nav-bar">
        //     <nav className="navbar">
        //     <ul className="nav nav-pills nav-fill">
        //         <li className="nav-item"><NavLink to="/">About Me</NavLink></li>
        //         <li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
        //         <li className="nav-item"><NavLink to="/contact">Contact Me</NavLink></li>
        //     </ul>
        //     </nav>
        // </div>
    )
}

export default Nav
