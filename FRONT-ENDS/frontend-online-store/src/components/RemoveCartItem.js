import React, { Component } from 'react';

class RemoveCartItem extends Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart() {
    const { product, updateQuantity, updateSize } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const itemWithUniqueQuantity = cartItems.find((
      item,
    ) => item.id === product.id && item.quantity === 1);
    if (itemWithUniqueQuantity) {
      const indexOfUnique = cartItems.indexOf(itemWithUniqueQuantity);
      cartItems.splice(indexOfUnique, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      updateSize();
      return updateQuantity && updateQuantity();
    }
    const indexToSubtract = cartItems.indexOf(cartItems.find((item) => item.id === product.id));
    if (indexToSubtract !== -1)cartItems[indexToSubtract].quantity -= 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateSize();
    return updateQuantity && updateQuantity();
  }

  render() {
    const { children, testid } = this.props;
    return (
      <button type="button" data-testid={testid} onClick={this.removeFromCart}>
        {children}
      </button>
    );
  }
}

export default RemoveCartItem;
