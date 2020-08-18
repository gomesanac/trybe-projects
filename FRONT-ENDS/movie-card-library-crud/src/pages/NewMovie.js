import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MovieForm } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() =>
      this.setState({
        shouldRedirect: true,
      }),
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    const { history } = this.props;

    if (shouldRedirect) {
      history.push('/');
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewMovie;
