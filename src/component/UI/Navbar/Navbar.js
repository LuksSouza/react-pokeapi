import React from 'react';
import './Navbar.css';

import { NavLink } from 'react-router-dom';

const navbar = (props) => {
    return (
        <nav className="Navbar">
            <ul>
                {
                    props.itemsList.map(i => (
                        <li><NavLink to={i.path}>{i.name}</NavLink></li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default navbar;