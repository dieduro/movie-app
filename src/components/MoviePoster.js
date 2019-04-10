import React from 'react';
import '../App.css';
import baseImageUrl  from '../utils/imageURL'

function MoviePoster(props) {
    const fullPosterUrl = baseImageUrl + props.posterSize + props.poster_path;
    const style = props.style;
    return (
      <div>
        <img style={style} src={fullPosterUrl} alt={props.alt} />
      </div>
    );
}

export default MoviePoster;
