import React, { Component } from 'react';
import { FaShippingFast } from 'react-icons/fa';

class Shipping extends Component {
  render() {
    const { freeShipping } = this.props;

    return (
      <div className="shipping">
        { freeShipping &&
          (<span data-testid="free-shipping"><FaShippingFast /> Frete grátis</span>) }
      </div>
    );
  }
}

export default Shipping;
