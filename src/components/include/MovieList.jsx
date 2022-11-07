import React from "react";

function MovieListCont(props) {
  return (
    <a href={`https://www.themoviedb.org/movie/${props.lists.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.lists.poster_path}`}
        alt={`${props.lists.title}`}
      />
      <em>
        <p className="movie__rank">{props.rank + 1}</p>
        <p className="popular__title">{props.lists.title}</p>
        <div className="movie__vote">{props.lists.vote_average}</div>
      </em>
    </a>
  );
}

function MovieList(props) {
  console.log(props);
  return (
    <div className="movielist__inner">
      <div className="container">
        <ul className="movie__list">
          {props.lists.map((lists, idx) =>
            idx < 5 ? (
              <MovieListCont key={idx} rank={idx} lists={lists} />
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;
