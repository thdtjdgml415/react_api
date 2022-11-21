import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
function YoutubeListCont({ index, lists }) {
  return (
    <img
      src={lists.snippet.thumbnails.medium.url}
      alt={lists.snippet.description}
    />
  );
}

function YoutubeSlider({ youtubeLists }) {
  return (
    <div className="youtubelist__inner">
      <div className="container">
        <ul className="youtube__list">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {youtubeLists.map((youtubelists, index) => (
              <SwiperSlide key={index}>
                <YoutubeListCont key={index} lists={youtubelists} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default YoutubeSlider;
