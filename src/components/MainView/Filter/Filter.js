import React, {Component} from 'react';
import classes from '../MainView.css';

class Filter extends Component {
  render() {
    const {filterPrice} = this.props;

    // propen filterPrice är en funktion som tar lägsta och högsta pris

    return (
      <div>
        <button
          className={classes.Button}
          onClick={() => filterPrice(0, 0)}>
          <p className={classes.p}>-</p>
        </button>
        <button
          className={classes.Button}
          onClick={() => filterPrice(0, 250)}>
          <p className={classes.p}>0-250</p>
        </button>
        <button
          className={classes.Button}
          onClick={() => filterPrice(250, 500)}>
          <p className={classes.p}>250-500</p>
        </button>
        <button
          className={classes.Button}
          onClick={() => filterPrice(500, 0)}>
          <p className={classes.p}>Över 500</p>
        </button>
      </div>
    );
  }
}

export default Filter;

