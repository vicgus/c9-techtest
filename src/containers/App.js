import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import classes from './App.css';

import Aux from '../hoc/Aux';
import MainView from '../components/MainView/MainView';
import Shop from '../components/Shops/Shop/Shop';
import ShopView from '../components/ShopView/ShopView';
import withClass from '../hoc/withClass';

import {shopsData} from '../assets/shops.json'

const shopsServerData = shopsData;

class App extends PureComponent {
  constructor(props) {
    super(props);

    // Byt range till min och max
    this.state = {
      shops: [...shopsServerData],
      showMenu: false,
      listView: true,
      rangeMin: 0,
      rangeMax: 0,
      selectedShop: null,
    };

    // Binda this i constuctorn så vi kan skicka argument till funktionen nere i render
    this.filterPrice = this.filterPrice.bind(this);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  toggleFilterHandler = () => {
    const filterShow = this.state.showMenu;
    this.setState({showMenu: !filterShow});
  };

  filterPrice = (min, max) => {
    // Slå ihop filter-funktionerna till en funktion som tar argument
    this.setState({
      rangeMin: min,
      rangeMax: max,
      showMenu: false
    });
  };

  toggleShopViewHandler = (shopId) => {
    const shopShow = this.state.listView;
    const shop = this.state.shops.find(shop => shop.id === shopId);

    this.setState(() => {
      return {
        listView: !shopShow,
        selectedShop: shop
      }
    });
    console.log(this.state.selectedShop, this.state.listView)
  };

  render() {
    console.log('[App.js] Inside render()');

    // Bryt ut variabler från state
    const {listView, rangeMin, rangeMax, shops, showMenu} = this.state;

    if (listView) {
      return (
        <Aux>
          <div>
            <MainView
              showMenu={showMenu}
              clickMenu={this.toggleFilterHandler}
              filterPrice={this.filterPrice}
              rangeMin={rangeMin}
              rangeMax={rangeMax} />
            <div>
              {shops
              .filter((shop) => {
                // Ist för att byta ut salongerna i state filtreras de här, state innehåller alltså alltid alla salonger.
                return (shop.price >= rangeMin || !rangeMin) && (shop.price <= rangeMax || !rangeMax);
              })
              .map((shop) => {
                // För lite renare kod skickas salongen in som en prop som sedan deconstructas i <Shop>

                // Ist för att gå på index i en array (som kan vara lite farligt om man till exempel vill lägga på sortering)
                // går clicked-functionen på salongens id.
                return <Shop key={shop.id} shop={shop} clicked={() => this.toggleShopViewHandler(shop.id)}/>
              })}
            </div>
          </div>
        </Aux>
      );
    } else {
      return (
        <Aux>
          <div>
            <ShopView
              backClick={this.toggleShopViewHandler}
              shop={this.state.selectedShop}/>
          </div>
        </Aux>
      );
    }
  }
}

export default withClass(App, classes.App);


App.PropTypes = {
  name: PropTypes.string,
  address: PropTypes.string
}
