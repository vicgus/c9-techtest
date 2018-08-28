import React from 'react';
import classes from './Shop.css';
import right from '../../../assets/images/right.svg';

const shop = (props) => {
    return  <div    
                onClick={props.clicked}                
                className={classes.ShopItem}>
                    <p className={classes.VacantTime}>{props.vacantTime}</p>
                    <p className={classes.Name}>{props.name}</p>
                    <p className={classes.Rating}>Rating: {props.rating}</p>
                    <p className={classes.Rates}>({props.rates})</p>
                    <p className={classes.Address}>{props.address}</p>
                    <img className={classes.right} src={right} alt='Right'/>
                    <p className={classes.Price}>{props.price} kr</p>
                    <p className={classes.Time}>{props.time}</p>
            </div>

};

export default shop;