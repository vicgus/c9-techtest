import React from 'react';
import classes from '../ShopView.css';


const ratingImg = (props) => {
    let ratePic = require(`../images/${props.rating}.svg`);
    console.log(ratePic);

    return (
        <div>
            <img className={classes.Rating} 
            src = {ratePic}
            alt='Rating'/>
        </div>   
    )
};

export default ratingImg;
