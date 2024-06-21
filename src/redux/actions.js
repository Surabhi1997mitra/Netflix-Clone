import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_ID = process.env.REACT_APP_OBDB_ID;

const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    };
};

const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    };
};

const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    };
};

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(`http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`)
            .then(response => {
                const movies = response.data.Search;
                console.log(movies, response)
                dispatch(fetchMoviesSuccess(movies));
            })
            .catch(error => {
                dispatch(fetchMoviesFailure(error.message));
            });
    };
};
