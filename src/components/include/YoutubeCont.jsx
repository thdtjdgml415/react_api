import React from "react";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${youtube.id.videoid}`}>
        <img src={youtube.snippet.thumbnails.medium.url} alt="" />
        <div className="title">{youtube.snippet.title}</div>
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <div className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {youtubes.map((youtube, idx) => (
              <YoutubeItem key={idx} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCont;
