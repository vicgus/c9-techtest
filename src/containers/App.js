import React, { PureComponent } from 'react';

import classes from './App.css';

import Aux from '../hoc/Aux';
import MainView from '../components/MainView/MainView';
import Shop from '../components/Shops/Shop/Shop';
import ShopView from '../components/ShopView/ShopView';
import withClass from '../hoc/withClass';

import {shopsData} from '../assets/shops.json'

const shopsServerData = shopsData;

class App extends PureComponent {
  constructor( props ) {
    super( props );

    console.log( '[App.js] Inside Constructor', props );
    this.state = {
      shops: [...shopsServerData],
      showMenu: false,
      listView: true,
      range: '-',
      selectedShop: null
    };
  }

  componentWillMount () {
    console.log( '[App.js] Inside componentWillMount()' );
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }

  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
  }

  toggleFilterHandler = () => {
    const filterShow = this.state.showMenu;
    this.setState({showMenu: !filterShow});
  }

  toggleTextChangeHandlerOne = () => {
    const shopsCopy = [...shopsServerData];
    const filterShow = this.state.showMenu;
    this.setState( () => {
      return {
        range: '-',
        shops: shopsCopy,
        showMenu: !filterShow
      }
    });
  }

  toggleTextChangeHandlerTwo = () => {
    const shopsCopy = [...shopsServerData];
    const newState = shopsCopy.filter(sh => sh.price < 250);
    const filterShow = this.state.showMenu;
    this.setState( () => {
      return {
        range: '0-250',
        shops: newState,
        showMenu: !filterShow
      }
    });
  }
 
  toggleTextChangeHandlerThree = () => {
    const shopsCopy = [...shopsServerData];
    const firstState = shopsCopy.filter(sh => sh.price > 250);
    const secondState = firstState.filter(sh => sh.price < 500);
    const filterShow = this.state.showMenu;
    this.setState( () => {
      return {
        range: '250-500',
        shops: secondState,
        showMenu: !filterShow
      }
    });
  }

  toggleTextChangeHandlerFour = () => {
    const shopsCopy = [...shopsServerData];
    const newState = shopsCopy.filter(sh => sh.price > 500);
    const filterShow = this.state.showMenu;
    this.setState( () => {
      return {
        range: 'Över 500',
        shops: newState,
        showMenu: !filterShow
      }
    });
    console.log(this.state.shops)
  }

  toggleShopViewHandler = (shopIndex) => {
    const shopShow = this.state.listView;

    const shop = this.state.shops[shopIndex];

    this.setState( () => {
      return {
        listView: !shopShow,
        selectedShop: shop
      }
      });
    console.log(this.state.selectedShop, this.state.listView)
  }

  render () {
    console.log( '[App.js] Inside render()' );
    let view = null;
    let shopsss = null;

    if (this.state.listView) {
      shopsss = (
        <div>
          {this.state.shops.map((shop, index) => {
            return <Shop 
              name={shop.name}
              price={shop.price}
              id={shop.id}
              clicked={() => this.toggleShopViewHandler(index)}/>
          })} 
        </div>
      );
      view = (
        <div>
          <MainView
            appTitle={this.props.title}
            showMenu={this.state.showMenu}
            clickMenu={this.toggleFilterHandler}
            buttonChangeOne={this.toggleTextChangeHandlerOne.bind(this)} 
            buttonChangeTwo={this.toggleTextChangeHandlerTwo.bind(this)}
            buttonChangeThree={this.toggleTextChangeHandlerThree.bind(this)}
            buttonChangeFour={this.toggleTextChangeHandlerFour.bind(this)}
            buttonText= {this.state.range} />
          {shopsss}
      </div>
      );
    }

    if ( !this.state.listView ) {
      view = (
        <div>
          <ShopView 
            backClick={this.toggleShopViewHandler}
            testShop={this.state.selectedShop}/>
        </div>
      );   
    }
    
    return (
      <Aux>
        {view}
      </Aux>
    );
  }
}

export default withClass( App, classes.App );



