import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";
import { useEffect, useState } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);
  const [youtubeLists, setYoutubesList] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDUmGC1RORLfg0RzaEMw1VYSE0ENdlin_M&part=snippet&maxResults=30&type=video&q=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.items))
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  fetch("http://thdtjdgml415.github.io/codingclass/youtube.json")
    .then((response) => response.json())
    .then((result) => setYoutubesList(result.items))
    .catch((error) => console.log("error", error));

  useEffect(() => {
    fetch("http://thdtjdgml415.github.io/codingclass/youtube.json")
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      // .then((result) => console.log(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "reference api"]} />
        <YoutubeSlider youtubeLists={youtubeLists} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
