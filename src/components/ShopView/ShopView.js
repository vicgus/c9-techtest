import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import back_white from '../../assets/images/back_white.png';
import ratingzero from '../../assets/images/rating_zero.png';
import ratingone from '../../assets/images/rating_one.png';
import ratingtwo from '../../assets/images/rating_two.png';
import ratingthree from '../../assets/images/rating_three.png';
import ratingfour from '../../assets/images/rating_four.png';
import ratingfive from '../../assets/images/rating_five.png';
import ratFive from './images/5.png';
import like from '../../assets/images/like.png';
import InfoDiv from './InfoDiv/InfoDiv';
import ControlBar from './ControlBar/ControlBar';
import ShopViewHeader from './ShopViewHeader/ShopViewHeader'
import Schedule from './Schedule/Schedule';

class ShopView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ratingImg: '',
            showSchedule: false
    };
}
    toggleInfoHandler = () => {
        this.setState({showSchedule: false})
        console.log(this.state.showSchedule)
    }

    toggleScheduleHandler = () => {
        this.setState({showSchedule: true})
        console.log(this.state.showSchedule)
    }

    render() {
        let view = null;
        if (!this.state.showSchedule) {
            view = (
                <InfoDiv shops={this.props.showShop}/>
            );
        }

        if (this.state.showSchedule) {
            view = (
                <Schedule shops={this.props.showShop}/>
            );
        }

        return (
            <Aux>
                <ShopViewHeader 
                    clickBack={this.props.backClick}
                    name= {this.props.showShop.name}
                    rating= {this.props.showShop.rating}
                    rates= {this.props.showShop.rates} />
                <ControlBar 
                    text='Info' 
                    clicked={() => this.toggleInfoHandler()} 
                    showBar={this.state.showSchedule} />
                <ControlBar 
                    text='Schema'
                    clicked={() => this.toggleScheduleHandler()}
                    showBar={this.state.showSchedule} />
                {view}
            </Aux>
            
        ) 
    }
}

export default ShopView;

        // const ratingImg = {ratingfive};

        // if (this.props.showShop.rating === 0) {
        //     this.setState({ratingImg: {ratingfive}})
        // };
        // if (this.props.showShop.rating === 0) {
        //     return ratingImg = {rating_zero}
        // if (this.props.showShop.rating === 1) {
        //     return ratingImg = {ratingone}
        // };
        // if (this.props.showShop.rating === 2) {
        //     return ratingImg = {ratingtwo}
        // };
        // if (this.props.showShop.rating === 3) {
        //     return ratingImg = {ratingthree}
        // };
        // if (this.props.showShop.rating === 4) {
        //     return ratingImg = {ratingfour}
        // };
        // if (this.props.showShop.rating === 5) {
        //     this.setState({ratingImg: ratingfive})
        // };
        // let picture = "./images/"+this.props.showShop.rating+".png";
        // console.log(picture);
        // console.log("./images/"+this.props.showShop.rating+".png");

        // if (this.props.showShop.rating === 0) {
        //     return ratingImg = {rating_zero}
        // };
        // if (this.props.showShop.rating === 1) {
        //     return ratingImg = {rating_one}
        // };
        // if (this.props.showShop.rating === 2) {
        //     return ratingImg = {rating_two}
        // };
        // if (this.props.showShop.rating === 3) {
        //     return ratingImg = {rating_three}
        // };
        // if (this.props.showShop.rating === 4) {
        //     return ratingImg = {rating_four}
        // };
        // if (this.props.showShop.rating === 5) {
        //     return ratingImg = {rating_five}
        // };


        // if (this.props.showShop.rating === 0) {
        //     return ratingImg = {rating_zero};
        // } else if (this.props.showShop.rating === 1) {
        //     return ratingImg = {rating_one};
        // } else if (this.props.showShop.rating === 2) {
        //     return ratingImg = {rating_two};
        // } else if (this.props.showShop.rating === 3) {
        //     return ratingImg = {rating_three};
        // } else if (this.props.showShop.rating === 4) {
        //     return ratingImg = {rating_four};
        // } else if (this.props.showShop.rating === 5) {
        //     return ratingImg = {rating_five};
        // };
