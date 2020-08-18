import React, { Component } from 'react';

import Rating from '../components/Rating';
import HandleQuantityButton from '../components/HandleQuantityButton';
import CartButton from '../components/CartButton';

class DetailsPage extends Component {
  render() {
    const { location: { state: product }, updateSize, cartSize } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <CartButton cartSize={cartSize} />
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <HandleQuantityButton
          updateSize={updateSize}
          product={product}
          testidAdd="product-detail-add-to-cart"
          testidSubtract="product-decrease-quantity"
          testidQuantity="shopping-cart-product-quantity"
        />
        <Rating />
      </div>
    );
  }
}

export default DetailsPage;
