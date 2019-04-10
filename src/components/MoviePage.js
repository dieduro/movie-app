import React from "react";
import '../App.css';
import MoviePoster from './MoviePoster'
import baseImageUrl from '../utils/imageURL'


function MoviePage(props) {
    const movie = props.movie
    const posterSize = "/w185"
    const backdropPathFullUrl = baseImageUrl + '/original' + movie.backdrop_path
    const releaseYear = movie.release_date.substr(0,4)
    const style = {
      background: {
        backgroundImage: `curl(${backdropPathFullUrl})`
      },
      poster: {
        width: "182px",
        height: "273px",
        "object-fit": "cover"
      }
    };

    function handleBack() {
      props.handleBack()
    }

    return (
      <div style={style.background}>
        <button onClick={() => handleBack()}>
          <img
            src="https://img.icons8.com/ios/50/000000/circled-left-2-filled.png"
            alt="back"
          />
        </button>
        <MoviePoster
          style={style}
          poster_path={movie.poster_path}
          posterSize={posterSize}
          alt={movie.alt}
        />
        <h1>{movie.title}</h1>
        <p>{releaseYear}</p>
        <button>Suscribirme</button>
        <div>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
}

export default MoviePage;
