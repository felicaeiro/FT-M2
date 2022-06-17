import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actionCreators/index';

import './Movie.css';

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    // const { movie } = this.props.movie;
    return (
      <div className="movie-detail">
        <h1>{this.props.movie.Title}</h1>
        <h4>Fecha de estreno:</h4> <p>{this.props.movie.Released}</p>
        <h4>Director: </h4>
        <p>{this.props.movie.Director}</p>
        <h4>Género:</h4> <p>{this.props.movie.Genre}</p>
        <h4>Sinopsis:</h4> <p>{this.props.movie.Plot} </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
