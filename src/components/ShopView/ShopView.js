import React, {Component} from 'react';

class ShopView extends Component {
    render() {
        return (
            <div>
                <p>Hej{this.props.testShop.name}</p>
                <p>Hej kanske{this.props.name}</p>
                <button onClick={this.props.backClick}>back</button> 
            </div>
        ) 
    }
}

export default ShopView;