import React from 'react';
import '../App.css';

import { getCategories } from '../services/api';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import ApiRequest from '../components/ApiRequest';
import MainContent from '../components/MainContent';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: null,
      searchInput: '',
      categories: [],
      results: null,
      isLoading: false,
      notFound: false,
    };
    this.onHandleRadio = this.onHandleRadio.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  onHandleRadio(categoryId, searchInput) {
    this.setState({ categoryId }, () => this.updateResults(categoryId, searchInput));
  }

  onHandleChange(event) {
    const { value } = event.target;
    this.setState({ searchInput: value });
  }

  updateResults(categoryId, searchInput) {
    ApiRequest(categoryId, searchInput).then(({ results }) => {
      this.setState({
        results,
        isLoading: true,
        notFound: results.length === 0,
      });
    });
  }

  render() {
    const { categoryId, results, categories, searchInput, isLoading, notFound } = this.state;
    const { updateSize, cartSize } = this.props;
    const mainProps = { results, isLoading, notFound, updateSize };
    return (
      <div>
        <div className="category-list">
          <CategoryList categories={categories} onHandleRadio={this.onHandleRadio} />
        </div>
        <Search
          onHandleChange={this.onHandleChange}
          updateResults={this.updateResults}
          searchInput={searchInput}
          categoryId={categoryId}
          isLoading={isLoading}
          cartSize={cartSize}
        />
        <main role="main" className="container">
          <MainContent {...mainProps} updateSize={updateSize} />
        </main>
      </div>
    );
  }
}

export default MainPage;
