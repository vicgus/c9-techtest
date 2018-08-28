import React from 'react';
import classes from '../ShopView.css';
import ratFive from '../../../assets/images/5.png';



const ratingImg = (props) => {
    let picture = ["./images/", props.rating, ".png"];
    picture.join('');
    console.log(picture);
    console.log("./images/"+props.rating+".png");
    console.log(ratFive);
    let pictures = "/images/5.png";
    return <img className={classes.rating} 
            src={picture}
            // src={ratFive}
            alt='Rating'/>
    
};

export default ratingImg;
