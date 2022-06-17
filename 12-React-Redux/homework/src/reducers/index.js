import {
  GET_MOVIES,
  // GET_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_POST,
  RECEIVE_POST
} from '../actions/index';

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
  loading: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.movies,
      };
    // case GET_MOVIE_DETAIL:
    //   return {
    //     ...state,
    //     movieDetail: action.detail,
    //   };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.movieTitle),
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (movie) => movie.title !== action.movieTitle
        ),
      };
    case GET_POST:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_POST:
      return {
        ...state,
        loading: false,
        movieDetail: action.detail,
      };
    default:
      return state;
  }
}
