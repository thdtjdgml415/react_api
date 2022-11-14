import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import { useState, useEffect } from "react";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashBtn from "../include/UnsplashBtn";
import Contact from "../layout/Contact";

function Unsplash() {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=bdVnXh11IobT8sA4GyQCDUTan0ung1hDAaeb1vW3tJE&per_page=1&language=ko`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=bdVnXh11IobT8sA4GyQCDUTan0ung1hDAaeb1vW3tJE&count=30"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setImages(result))
      .catch((error) => console.log(error));

    fetch(
      "https://api.unsplash.com/photos/random?client_id=bdVnXh11IobT8sA4GyQCDUTan0ung1hDAaeb1vW3tJE&count=30"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setRandom(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "reference api"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Unsplash;
