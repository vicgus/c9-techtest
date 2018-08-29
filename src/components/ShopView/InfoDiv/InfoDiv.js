import React from 'react';
import geo from "../../../assets/images/geo.svg";
import clock from "../../../assets/images/clock.png";
import phone from "../../../assets/images/phone.png";
import globe from "../../../assets/images/globe.png";
import classes from './InfoDiv.css'

const infoDiv = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.StatusDiv}></div>
            <p className={classes.p}>
                <img src={geo} alt="Address"
                className={classes.img} />
                {props.shop.address}
            </p>
            <p className={classes.p}>
                <img src={clock} alt="Clock"
                className={classes.img} />
                Öppet till: {props.shop.closingTime}
            </p>
            <p className={classes.p}>
                <img src={phone} alt="phone"
                className={classes.img} />
                {props.shop.phone}
            </p>
            <p className={classes.p2}>
                <img src={globe} alt="Address"
                className={classes.img} />
                {props.shop.url}
            </p>
            <p className={classes.p1}>
                {props.shop.description}
            </p>
        </div>
    )      
}

export default infoDiv;
