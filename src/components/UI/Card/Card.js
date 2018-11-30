import React from 'react';
import classes from './Card.module.css'

const card = (props) => {
    return (
        <div className={classes.Card}>
            <h2>Name:{props.name}</h2>
            <h4>UserId:{props.userid}</h4>
        </div>
    );
}

export default card;    