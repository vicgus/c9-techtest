import React, {Component} from 'react';

import classes from './MainView.css';
import Aux from '../../hoc/Aux';
import Header from './Header';
import Filter from './Filter/Filter';
import blackstatus from '../../assets/images/Status Bar/black_status.png';
import down from '../../assets/images/down.png';

class MainView extends Component {
    render() {
        return (
            <Aux>
                <img src={blackstatus} alt='Statusbar' />
                <Header />
                <div  
                    onClick={this.props.clickMenu}>
                    <p className={classes.p1}>
                        Pris: {this.props.buttonText}
                        <img 
                        className={classes.right} 
                        src={down} 
                        alt='Down' />
                    </p>
                    
                </div>
                { this.props.showMenu ? 
                    <Filter 
                        firstRange = {this.props.buttonChangeOne} 
                        secondRange = {this.props.buttonChangeTwo}
                        thirdRange = {this.props.buttonChangeThree}
                        fourthRange = {this.props.buttonChangeFour} /> 
                    : null
                }
            </Aux>
    );
};
}
export default MainView;