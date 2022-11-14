import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
function UnsplashSliderlist({ unsplashslide }) {
  return (
    <img
      src={unsplashslide.urls.regular}
      alt={unsplashslide.urls.alt_description}
    />
  );
}

function UnsplashSlider({ random }) {
  return (
    <div className="movielist__inner">
      <div className="container">
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
            {random.map((unsplashslide, idx) => (
              <SwiperSlide>
                <UnsplashSliderlist key={idx} lists={unsplashslide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default UnsplashSlider;
