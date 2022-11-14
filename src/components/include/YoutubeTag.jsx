import React from "react";

const YoutubeTagList = [
  {
    text: "javascript",
  },
  {
    text: "html",
  },
  {
    text: "css",
  },
  {
    text: "react",
  },
];

const YoutubeTag = ({ onSearch }) => {
  const handleSearch = (key) => {
    console.log(key);
    onSearch(key);
  };

  const onClick = (e) => {
    let TagClick = e.target.innerHTML;
    handleSearch(TagClick);
  };

  const YoutubeKeyword = ({ keyword }) => {
    return (
      <button className="youtubebutton" onClick={onClick}>
        {keyword.text}
      </button>
    );
  };

  return (
    <div className="container">
      <div className="youtube__taginner">
        {YoutubeTagList.map((youtubekeyword, idx) => (
          <YoutubeKeyword key={idx} keyword={youtubekeyword} />
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
