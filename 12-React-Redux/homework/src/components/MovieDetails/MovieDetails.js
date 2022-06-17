import React from "react";
import './MovieDetails.css'

export default function MovieDetails({title, poster, director, rating, awards, genre, released, runtime, plot }) {

        return (
            <div className="movie-detail movie-card">
                <h2 className="title"><span>{title}</span></h2>          
                <img src={poster} alt='poster' className="img" width='200px'/>
                <div className="container column">
                <span><h4>Director: </h4> <p>{director}</p></span>
                <span><h4>IMDb Rating: </h4> <p>{rating}</p></span>
                <span><h4>Awards: </h4> <p>{awards}</p></span>
                <span><h4>Género:</h4> <p>{genre}</p></span>
                <span><h4>Fecha de estreno:</h4> <p>{released}</p></span>
                <span><h4>Duración:</h4> <p>{runtime}</p></span>
                <span><h4>Sinopsis:</h4> <p>{plot}</p></span>
                </div>
            </div>
        )
}
