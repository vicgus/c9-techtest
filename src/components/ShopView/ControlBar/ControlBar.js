import React from 'react';
import classes from './ControlBar.css';

const controlBar = (props) => {
    return (
        <div 
            className={classes.Switch}
            onClick={props.clicked}>
                <p className={classes.TextBar}>{props.text}</p>        
        </div>
    )
}

export default controlBar;