import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movies: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({
      isLoading: true,
      movies,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;

    if (!isLoading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
