import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onClick = this.onClick.bind(this);
  }

  onChange(event, chave) {
    this.setState({ [chave]: (chave === 'bookmarkedOnly' ? event.target.checked : event.target.value) });
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  movieFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtredMovies = [...movies];
    if (searchText) {
      filtredMovies = filtredMovies.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText),
      );
    }
    if (bookmarkedOnly) {
      filtredMovies = filtredMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filtredMovies = filtredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.onChange(event, 'searchText')}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.onChange(event, 'bookmarkedOnly')}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) =>
            this.onChange(event, 'selectedGenre')
          }
        />
        <MovieList movies={this.movieFilter()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
