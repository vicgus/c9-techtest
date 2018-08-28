import React, {Component} from 'react';
import classes from '../MainView.css';
import FilterButton from './FilterButton';


class Filter extends Component {
    render () {
        return (
        // const rangeList = 
        //     [this.props.firstRange,
        //     this.props.secondRange,
        //     this.props.thirdRange,
        //     this.props.fourthRange
        //     ];
        // const btnText = [
        //     '-', '0-250', '250-500', 'Över 500'
        // ];

        // return( rangeList.map((p) => {
        //     return <FilterButton className={btnClass} range={p} />
        // })
        <div >
            <button
                className={classes.Button}
                onClick={this.props.firstRange}>
                <p className={classes.p}>-</p>
            </button>
            <button
                className={classes.Button}
                onClick={this.props.secondRange}>
                <p className={classes.p}>0-250</p>
            </button>
            <button
                className={classes.Button}
                onClick={this.props.thirdRange}>
                <p className={classes.p}>250-500</p>
            </button>
            <button
                className={classes.Button}
                onClick={this.props.fourthRange}>
                <p className={classes.p}>Över 500</p>
            </button>
        </div>
        );
    }
}

export default Filter;

