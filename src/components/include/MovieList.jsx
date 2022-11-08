import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function MovieListCont(props) {
  return (
    <a
      className="movie__popular"
      href={`https://www.themoviedb.org/movie/${props.lists.id}`}
    >
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
        {/* <ul className="movie__list"> */}
        <Swiper
          slidesPerView={6}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {props.lists.map((lists, idx) => (
            <SwiperSlide>
              <MovieListCont key={idx} rank={idx} lists={lists} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default MovieList;
