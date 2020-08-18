import React, { Component } from 'react';
import CartCard from './CartCard';

class CartList extends Component {
  render() {
    const { updateSize } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        {cartItems.map((item) => (
          <CartCard updateSize={updateSize} key={item.id} product={item} />
        ))}
      </div>
    );
  }
}

export default CartList;
