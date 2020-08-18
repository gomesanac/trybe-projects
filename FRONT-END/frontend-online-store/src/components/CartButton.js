import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    const { cartSize } = this.props;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            style={{ width: '25px', height: '20px' }}
            alt="shopping cart icon"
            src="https://cdn.onlinewebfonts.com/svg/img_290616.png"
          />
        </Link>
        <p data-testid="shopping-cart-size">{cartSize}</p>
      </div>
    );
  }
}
export default CartButton;
