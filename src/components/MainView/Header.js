import React from 'react';
import classes from './Header.css'
import settings from '../../assets/images/settings.png';
import back from '../../assets/images/back.png';

const header = () => {
  return <div>
    <h1>
      <img className={classes.left} src={back} alt='null'/>
      Hår
      <img className={classes.right} src={settings} alt='null'/>
    </h1>
  </div>
}

export default header;
