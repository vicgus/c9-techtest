//Not used atm. 

import React, {Component} from 'react';
import classes from '../MainView.css';

class FilterButton extends Component {
    render() {
        let btnClass = classes.Button;
        return(
            <button
                className={btnClass}
                onClick={this.props.range}>
                {this.props.priceRange}
            </button>
        );
    }
}

export default FilterButton;