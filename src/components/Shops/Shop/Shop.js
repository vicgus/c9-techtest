import React from 'react';
import classes from './Shop.css';
import right from '../../../assets/images/right.svg';

const shop = ({shop, clicked}) => {
  let ratePic = require(`./images/${shop.rating}.svg`);
  return <div
    onClick={() => clicked()}
    className={classes.ShopItem}>
    <p className={classes.VacantTime}>{shop.vacantTime}</p>
    <p className={classes.Name}>{shop.name}</p>
    {/* <p className={classes.Rating}>Rating: {shop.rating}</p> */}
    <img className={classes.Rating}
         src={ratePic}
         alt='Rating'/>
    <p className={classes.Rates}>({shop.rates})</p>
    <p className={classes.Address}>{shop.address}</p>
    <img className={classes.right} src={right} alt='Right'/>
    <p className={classes.Price}>{shop.price} kr</p>
    <p className={classes.Time}>{shop.time}</p>
  </div>

};

export default shop;

