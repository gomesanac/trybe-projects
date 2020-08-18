import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movie: null,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) =>
      this.setState({
        isLoading: true,
        movie,
      }),
    );
  }

  handleDelete() {
    const movieId = this.props.match.params.id;
    movieAPI.deleteMovie(movieId);
  }

  render() {
    const { isLoading, movie } = this.state;

    if (!isLoading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.handleDelete}>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
