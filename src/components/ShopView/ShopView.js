import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import InfoDiv from './InfoDiv/InfoDiv';
import ControlBar from './ControlBar/ControlBar';
import ShopViewHeader from './ShopViewHeader/ShopViewHeader'
import Schedule from './Schedule/Schedule';

class ShopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchedule: false
    };
  }

  toggleHandler = (show) => {
    // Tog bort toggle-funktionerna och ersatte med en som tar argument
    this.setState({showSchedule: show})
  };

  render() {
    // Bryt ut variabler från props och state
    const {backClick, shop} = this.props;
    const {showSchedule} = this.state;

    return (
      <Aux>
        <ShopViewHeader
          clickBack={backClick}
          name={shop.name}
          rating={shop.rating}
          rates={shop.rates}/>
        <ControlBar
          text='Info'
          clicked={() => this.toggleHandler(false)}
          showBar={showSchedule}/>
        <ControlBar
          text='Schema'
          clicked={() => this.toggleHandler(true)}
          showBar={showSchedule}/>
        {
          // För lite mindre kod tog jag bort view-variabeln och kör en lite kortare conditional
          showSchedule
            ? <Schedule shop={shop}/>
            : <InfoDiv shop={shop}/>
        }
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
