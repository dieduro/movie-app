import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Spinner from "./Spinner";
import '../App.css';

const apiKey = "208ca80d1e219453796a7f9792d16776";
const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  apiKey +
  "&language=en-US&page=1";

function MovieContainer(props) {
    
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    async function fecthMovies() {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    }

    useEffect(() => {
      fecthMovies()
    },[]);

    function handleClick(movie) {
      props.handleClick(movie)
    };
    
    let filteredMovies = movies.filter(movie => {
      return movie.title.toLowerCase().indexOf(props.search) !== -1;
    })
    
    return (
      <div className="movie-container app-margins">
        { loading ? ( <Spinner/> ) : 
        (
        <div>
            <h3 className="filter">Todas</h3>
            <ul className="movie-list">
              {filteredMovies.map(movie => (
                <li
                  key={movie.id}
                  className="movie-item"
                  onClick={() => handleClick(movie)}
                >
                  <Movie movie={movie} />
                </li>
              ))}
            </ul>
        </div>
        )}
      </div>
    );
}

export default MovieContainer;
