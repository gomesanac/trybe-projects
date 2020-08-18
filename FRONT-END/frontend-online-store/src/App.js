import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    const cartItems = localStorage.getItem('cartItems') === null ? [] : JSON.parse(localStorage.getItem('cartItems'));
    this.state = {
      cartSize: cartItems.reduce(
        (acc, { quantity }) => acc + quantity, 0,
      ),
    };
    this.updateSize = this.updateSize.bind(this);
    this.rendeRouter = this.rendeRouter.bind(this);
  }

  updateSize() {
    this.setState({
      cartSize: JSON.parse(localStorage.cartItems).reduce(
        (acc, { quantity }) => acc + quantity, 0,
      ),
    });
  }

  rendeRouter() {
    const { cartSize } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            path="/product/:id"
            render={
            (props) => <DetailsPage {...props} cartSize={cartSize} updateSize={this.updateSize} />
            }
          />
          <Route
            path="/cart"
            render={
            (props) => <CartPage {...props} cartSize={cartSize} updateSize={this.updateSize} />
            }
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <MainPage {...props} cartSize={cartSize} updateSize={this.updateSize} />
            )}
          />
        </Switch>
      </Router>
    );
  }

  render() {
    return this.rendeRouter();
  }
}

export default App;
