import React, { Component } from 'react';

import CartList from '../components/CartList';

class CartPage extends Component {
  render() {
    const { cartSize, updateSize } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        <p>{cartSize}</p>
        {cartItems === null || cartItems.lenght === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : <CartList updateSize={updateSize} />}
      </div>
    );
  }
}

export default CartPage;
