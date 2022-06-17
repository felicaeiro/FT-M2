import {
  GET_MOVIES,
  // GET_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_POST,
  RECEIVE_POST,
} from '../actions/index';

export function getMovies(title) {
  return function (dispatch) {
    fetch('http://www.omdbapi.com/?apikey=9256ad9&type=movie&s=' + title)
      .then((r) => r.json())
      .then((movies) => {
        dispatch({ type: GET_MOVIES, movies: movies.Search });
      });
  };
}

export function getPost() {
  return {
    type: GET_POST,
  };
}

export function receivePost(detail) {
  return {
    type: RECEIVE_POST,
    detail,
  };
}

export function getMovieDetail(movieId) {
  return function (dispatch) {
    dispatch(getPost());
    fetch(`https://www.omdbapi.com/?&apikey=9256ad9&i=${movieId}`)
      .then((r) => r.json())
      .then((detail) => {
        dispatch(receivePost(detail));
      });
  };
}

export function addMovieFavorite(movieTitle) {
  return { type: ADD_MOVIE_FAVORITE, movieTitle };
}

export function removeMovieFavorite(movieTitle) {
  return { type: REMOVE_MOVIE_FAVORITE, movieTitle };
}