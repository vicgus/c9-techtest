import React from 'react';
import clock from "../../../assets/images/clock.png";
import classes from './Schedule.css';

const schedule = (props) => {
    const book = () => {
        alert(`Bokat! Du är välkommen till ${props.shops.name} klockan ${props.shops.vacantTime}.`)
    };
    return (
        <div className={classes.Container}>
            <div className={classes.StatusDiv}></div>
            <div>
                <p className={classes.p}>
                    <img src={clock} alt="Clock"
                    className={classes.img} />
                    Nästa lediga tid är klockan {props.shops.vacantTime}
                </p>
                <button 
                    className={classes.Button}
                    onClick={book}>
                    Boka!
                </button>
                
            </div>
        </div> 
    );
}

export default schedule;