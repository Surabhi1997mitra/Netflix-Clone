import React from 'react';
import './Movie.css';

const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
        </div>
    );
};

export default Movie;
