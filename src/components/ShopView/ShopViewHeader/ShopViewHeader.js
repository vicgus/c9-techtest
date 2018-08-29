import React from 'react';

import RatingImg from './RatingImg';
import whitestatus from '../../../assets/images/Status Bar/white_status.png';
import like from '../../../assets/images/like.png';
import back_white from '../../../assets/images/back_white.png';
import classes from '../ShopView.css';

const shopViewHeader = (props) => {
  return (
    <div className={classes.ImgDiv}>
      <img src={whitestatus} alt='Statusbar'/>
      <img className={classes.left} src={back_white} alt='Back' onClick={props.clickBack}/>
      <img className={classes.right} src={like} alt='Back'/>
      <header className={classes.Header}>{props.name}</header>
      <RatingImg rating={props.rating}/>
      <p className={classes.Rates}>({props.rates})</p>
    </div>
  )
};

export default shopViewHeader;
