import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({ movies, onMovieSelect }) => {
    const renderedList = movies.map(movie => <MovieItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />);

    return (
        <div className="ui five cards">
            {renderedList}
        </div>
    );

}

export default MovieList;


