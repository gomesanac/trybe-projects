import React, { Component } from 'react';

class AddCartButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product, updateQuantity, updateSize } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const itemRepetido = cartItems && cartItems.find((item) => item.id === product.id);
    const indexOfItemInCart = cartItems && cartItems.indexOf(itemRepetido);
    switch (true) {
      case (!!itemRepetido):
        cartItems[indexOfItemInCart].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateSize();
        return updateQuantity && updateQuantity();
      case (itemRepetido === undefined):
        product.quantity = 1;
        localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
        updateSize();
        return updateQuantity && updateQuantity();
      default:
        product.quantity = 1;
        localStorage.setItem('cartItems', JSON.stringify([{ ...product }]));
        updateSize();
        return updateQuantity && updateQuantity();
    }
  }

  render() {
    const { children, testid } = this.props;
    return (
      <button type="button" data-testid={testid} onClick={this.addToCart}>
        {children}
      </button>
    );
  }
}

export default AddCartButton;
