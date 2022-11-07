import React from "react";

function MovieItem(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
      </a>
      <em>
        <span className="title">{props.movie.title}</span>
        <span className="star">{props.movie.vote_average}</span>
      </em>
    </li>
  );
}

function MovieCont(props) {
  return (
    <div className="movie__wrap">
      <div className="container">
        <h1>MOVIE</h1>
        <div className="movie__inner">
          <ul>
            {props.movies.map((movies, idx) => (
              <MovieItem key={idx} movie={movies} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieCont;
