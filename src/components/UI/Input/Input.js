import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case ('input'):
            inputElement = <input 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
            break;
        case ('select'):
            inputElement = (<select>

            </select>);
            break;
        default:
            inputElement = <input />
    }  

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label> <br />
             {inputElement} 
            
        </div>
    );
};


export default input;