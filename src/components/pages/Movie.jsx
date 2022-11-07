import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";
import Contact from "../layout/Contact";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [lists, setLists] = useState([]);

  //검색 할때 함수(자바스크립트에서 데이터 가져올때)
  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  // const list = (popularlist) => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1"
  //   )
  //     .then((response) => response.json())
  //     .then((result) => console.log(result.results))
  //     .then((result) => setMovies(result.results))
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1&&total_results=4"
    )
      .then((response) => response.json())
      .then((result) => setLists(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=0466376d0c5ab578b755f58c7beec394&language=ko-KOR&page=1&include_adult=false&query=마블"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieList lists={lists} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
