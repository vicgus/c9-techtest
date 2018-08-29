import React, {Component} from 'react';

import classes from './MainView.css';
import Aux from '../../hoc/Aux';
import Header from './Header';
import Filter from './Filter/Filter';
import blackstatus from '../../assets/images/Status Bar/black_status.png';
import down from '../../assets/images/down.png';

class MainView extends Component {
  render() {
    const {clickMenu, filterPrice, rangeMin, rangeMax} = this.props;

    return (
      <Aux>
        <img src={blackstatus} alt='Statusbar'/>
        <Header/>
        <div onClick={clickMenu}>
          <p className={classes.p1}>
            {/* Priset tas från min-max värdena, om 0 visas tomt */}
            Pris: {`${rangeMin || ''} - ${rangeMax || ''}`}
            <img
              className={classes.right}
              src={down}
              alt='Down'/>
          </p>

        </div>
        {this.props.showMenu ?
          <Filter filterPrice={filterPrice}/>
          : null
        }
      </Aux>
    );
  };
}

export default MainView;
