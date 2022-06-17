import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from '../../actionCreators/index';
import './Buscador.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className='cnt'>
        <h2>Buscador</h2>
        <form className="formContainer" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{' '}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                <button
                  onClick={() => {
                    if (this.props.favorites.length === 0)
                      this.props.addMovieFavorite({
                        title: movie.Title,
                        id: movie.imdbID,
                      });
                    else if (
                      this.props.favorites.some((el) => el.id === movie.imdbID)
                    ) {
                      alert('Ya está en favoritas');
                    } else {
                      this.props.addMovieFavorite({
                        title: movie.Title,
                        id: movie.imdbID,
                      });
                    }
                  }}
                >
                  Fav
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    favorites: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

/* export default function Buscador({}) {
  const [title, setTitle] = useState('');

  let handleChange(e) {
    setTitle(title: event.target.value)
  };

  let handleSubmit (e) {
    e.preventDefault()
  };

  return() 
  <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
        </ul>
         </div>
         
}*/
