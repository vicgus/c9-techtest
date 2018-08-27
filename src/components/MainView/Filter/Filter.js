import React, {Component} from 'react';
import classes from './Filter.css';
import FilterButton from './FilterButton';


class Filter extends Component {
    render () {
        let btnClass = classes.Button;
        return(
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
        <div>
            <button
                className={btnClass}
                onClick={this.props.firstRange}>
            -
            </button>
            <button
                className={btnClass}
                onClick={this.props.secondRange}>
                0-250
            </button>
            <button
                className={btnClass}
                onClick={this.props.thirdRange}>
                250-500
            </button>
            <button
                className={btnClass}
                onClick={this.props.fourthRange}>
                Över 500
            </button>
        </div>
        );
    }
}


export default Filter;



// import React, {Component} from 'react';
// import classes from './Filter.css';

// class Filter extends Component {
//     render () {
//         let btnClass = classes.Button;
//         return(
//         <div>
//             <button
//                 className={btnClass}
//                 onClick={this.props.firstRange}>
//             -
//             </button>
//             <button
//                 className={btnClass}
//                 onClick={this.props.secondRange}>
//                 0-250
//             </button>
//             <button
//                 className={btnClass}
//                 onClick={this.props.thirdRange}>
//                 250-500
//             </button>
//             <button
//                 className={btnClass}
//                 onClick={this.props.fourthRange}>
//                 Över 500
//             </button>
//         </div>
//         )        
//     }
// }


// export default Filter;
