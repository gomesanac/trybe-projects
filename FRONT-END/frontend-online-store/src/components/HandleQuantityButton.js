import React, { Component } from 'react';

import AddCartButton from './AddCartButton';
import RemoveCartItem from './RemoveCartItem';

class HandleQuantityButton extends Component {
  constructor(props) {
    super(props);
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    const quantity = cart && cart.some((item) => item.id === props.product.id)
      ? cart.find((item) => item.id === props.product.id).quantity : 0;
    this.state = { quantity };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity() {
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    const { product } = this.props;
    if (cart.some((item) => item.id === product.id)) {
      const { quantity } = cart.find((item) => item.id === product.id);
      return this.setState({ quantity });
    }
    return this.setState({ quantity: 0 });
  }

  render() {
    const { product, testidQuantity, testidAdd, testidSubtract, updateSize } = this.props;
    const { quantity } = this.state;
    return (
      <div className="product-button">
        <AddCartButton
          product={product}
          testid={testidAdd}
          updateQuantity={this.updateQuantity}
          updateSize={updateSize}
        >
          +
        </AddCartButton>
        <label htmlFor="quantidade" data-testid={testidQuantity}>{quantity}</label>
        <RemoveCartItem
          product={product}
          updateQuantity={this.updateQuantity}
          testid={testidSubtract}
          updateSize={updateSize}
        >
          -
        </RemoveCartItem>
      </div>
    );
  }
}

export default HandleQuantityButton;
