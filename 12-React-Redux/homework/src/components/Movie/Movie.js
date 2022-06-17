import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actionCreators/index';
import MovieDetails from '../MovieDetails/MovieDetails';


class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    // const { movie } = this.props.movie;
    return (
      <div className="movie-detail">
        {this.props.loading ? 'loading...' : 
        <MovieDetails 
          title={this.props.movie.Title} 
          poster={this.props.movie.Poster}
          director={this.props.movie.Director}
          rating={this.props.movie.imdbRating}
          awards={this.props.movie.Awards}
          genre={this.props.movie.Genre}
          released={this.props.movie.Released} 
          runtime={this.props.movie.Runtime}
          plot={this.props.movie.Plot}/>
        } 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
