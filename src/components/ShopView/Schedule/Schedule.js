import React from 'react';
import clock from "../../../assets/images/clock.png";
import phone from "../../../assets/images/phone.png";
import globe from "../../../assets/images/globe.png";
import classes from './Schedule.css';

const schedule = (props) => {
  const book = () => {
    alert(`Bokat! Du är välkommen till ${props.shop.name} klockan ${props.shop.vacantTime}.`)
  };
  return (
    <div className={classes.Container}>
      <div className={classes.StatusDiv}></div>
      <div>
        <p className={classes.p}>
          <img src={clock} alt="Clock"
               className={classes.img}/>
          Nästa lediga tid är klockan {props.shop.vacantTime}
        </p>
        <button
          className={classes.Button}
          onClick={book}>
          Boka!
        </button>
        <p className={classes.p}>
          För andra lediga tider hör av dig till oss!
        </p>
        <p className={classes.p1}>
          <img src={phone} alt="phone"
               className={classes.img}/>
          {props.shop.phone}
        </p>
        <p className={classes.p1}>
          <img src={globe} alt="Web"
               className={classes.img}/>
          {props.shop.url}
        </p>
      </div>
    </div>
  );
}

export default schedule;
