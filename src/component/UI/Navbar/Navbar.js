import React from 'react';
import classes from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

const navbar = (props) => {
    return (
        <nav className={classes.Navbar}>
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