import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    <li className={classes.NavigationItem} style={{display: 'inline'}}>
        <NavLink 
            to={props.link} 
            exact={props.exact}
            activeClassName={classes.active}
            style={{color: 'black'}}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;