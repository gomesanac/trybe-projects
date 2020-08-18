import React, { Component } from 'react';
import ProductList from './ProductList';

class MainContent extends Component {
  render() {
    const { results, isLoading, notFound, updateSize } = this.props;

    return (
      <div className="jumbotron">
        {!isLoading && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        <ProductList
          updateSize={updateSize}
          products={results}
          notFound={notFound}
        />
      </div>
    );
  }
}

export default MainContent;
