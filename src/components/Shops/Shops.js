import React, {PureComponent} from 'react';
import Shop from './Shop/Shop';
import ShopView from '../ShopView/ShopView';

class Shops extends PureComponent {
    constructor(props) {
        super(props);
        console.log( '[Shops.js] Inside Constructor', props );
    }

    componentWillMount () {
        console.log( '[Shops.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Shops.js] Inside componentDidMount()' );
    }

    componentWillReceiveProps ( nextProps ) {
        console.log( '[UPDATE Shops.js] Inside componentWillReceiveProps', nextProps );
    }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE Shops.js] Inside componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log( '[UPDATE Shops.js] Inside componentDidUpdate' );
    }

    render() {
        return this.props.shops.map((shop, index) => {
           return <Shop 
                name={shop.name}
                price={shop.price}
                id={shop.id}
                clicked={() => this.props.clickShop(index)} 
                />
            }
        )
    }
}

export default Shops;