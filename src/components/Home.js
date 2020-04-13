import React from 'react';
import Header from './Header';

import movieApi from '../api/movieApi';
import MovieList from './MovieList';

const mapData = results => {
  const mappedData = [];
  results.forEach(result => {
    mappedData.push({
      id: result.id,
      title: result.original_title,
      rating: result.vote_average,
      posterPath: `http://image.tmdb.org/t/p/w185${result.poster_path}`,
      description: result.overview ? result.overview : null,
      releaseDate: result.release_date
    })
  });
  return mappedData.sort((a, b) => {
    return b.releaseDate.localeCompare(a.releaseDate);;
  });
}

class Home extends React.Component {
  state = { movies: []};
  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getUpcomingMovies();
  }
  getUpcomingMovies = () => {
    movieApi.getUpcomingMovies()
      .then((res) => {
        if (this.isAlreadyMounted) {
          const mappedData = mapData(res.data.results);
          this.setState({
            movies: mappedData
          });
        }
      })
      .catch((error) => {
        if (this.isAlreadyMounted) {
          console.log(error)
          this.setState({
            error: true,
          });
        }
      });
  }
  onTermSubmit = (term) => {
    movieApi.search(term)
      .then(res => {
        if (Object.entries(res.data).length) {
          const mappedData = mapData(res.data.results);
          this.setState({ movies: mappedData });
        }
      }
      )
      .catch(err => new Error('Error ' + err.message));
  }
  render() {
    return (
      <div className='ui container'>
        <Header onTermSubmit={this.onTermSubmit} page='Home'/>
        <MovieList movies={this.state.movies} />
      </div>);
  }
}

export default Home; 