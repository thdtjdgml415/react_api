import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function UnsplashSliderlist({ lists }) {
  return <img src={lists.urls.regular} alt={lists.urls.alt_description} />;
}

function UnsplashSlider({ random }) {
  return (
    <div className="youtubelist__inner">
      <div className="container">
        <ul className="youtube__list">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
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
