import React, { Component } from 'react';

import HandleQuantityButton from './HandleQuantityButton';

class CartCard extends Component {
  render() {
    const { product, updateSize } = this.props;
    const { title, thumbnail } = product;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={thumbnail} alt={title} />
        <div style={{ display: 'inline-block' }}>
          <HandleQuantityButton
            product={product}
            testidQuantity="shopping-cart-product-quantity"
            testidAdd="product-increase-quantity"
            testidSubtract="product-decrease-quantity"
            updateSize={updateSize}
          />
        </div>
      </div>
    );
  }
}

export default CartCard;
