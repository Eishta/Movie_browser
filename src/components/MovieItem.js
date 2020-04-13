import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie, onMovieSelect }) => {
    return (
        <Link className="ui card" to={`/details/${movie.id}`}>
                <div className="image">
                    <img src={movie.posterPath} alt={movie.title} />
                </div>
                <div className="extra">
                    <span className="left-floated header">{movie.title}</span>
                    <span className="right floated">{movie.rating}</span>
                </div>
            
        </Link>
    );
}

export default MovieItem;