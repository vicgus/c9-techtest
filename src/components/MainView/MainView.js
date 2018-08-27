import React, {Component} from 'react';

import classes from './Filter/Filter.css';
import Aux from '../../hoc/Aux';
import Header from './Header';
import Filter from './Filter/Filter';
import blackstatus from '../../assets/images/black_status.png';

class MainView extends Component {
    render() {
        let btnClass = classes.Button;
        return (
            <Aux>
                <img src={blackstatus} alt='Statusbar' />
                <Header />
                <p  
                    className={btnClass}
                    onClick={this.props.clickMenu}>
                    Pris: {this.props.buttonText}
                </p>
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