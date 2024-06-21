import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './redux/actions';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const moviesData = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Netflix Clone</h1>
            {moviesData.loading ? (
                <h2>Loading...</h2>
            ) : moviesData.error ? (
                <h2>{moviesData.error}</h2>
            ) : (
                <MovieList movies={moviesData.movies} />
            )}
        </div>
    );
};

export default App;
