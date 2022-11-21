import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
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
        <div className="movie__vote">평점: {props.lists.vote_average}</div>
      </em>
    </a>
  );
}

function MovieList(props) {
  return (
    <div className="movielist__inner">
      <div className="container">
        <h1>인기영화 순위</h1>
        <ul className="movie__list">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={"3"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {props.lists.map((lists, idx) => (
              <SwiperSlide key={idx}>
                <MovieListCont key={idx} rank={idx} lists={lists} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default MovieList;
