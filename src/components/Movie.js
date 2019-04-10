import React from 'react';
import '../App.css';
import MoviePoster from './MoviePoster'

function Movie(props) {
    const posterSize = "/w342";
    const style = {
      title: {
        color: "white",
        fontSize: "16px",
        position: "absolute",
        bottom: "10px",
        left: "10px"
      },
      poster: {
        width: "335px",
        height: "156px",
        objectFit: "cover",
        objectPosition: "100 % 40 %"
      }
    };

    return (
      <figure className="poster-container">
        <MoviePoster
            style={style.poster}
            poster_path={props.movie.poster_path}
            posterSize={posterSize}
            alt={props.movie.title}
        />
        <h3 style={style.title}>{props.movie.title}</h3>
      </figure>
    );
}

export default Movie;
