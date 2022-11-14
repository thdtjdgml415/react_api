import React from "react";

const unsplashTagList = [
  {
    text: "animal",
  },
  {
    text: "space",
  },
  {
    text: "forest",
  },
  {
    text: "person",
  },
  {
    text: "picture",
  },
];
const UnsplashTag = ({ onSearch }) => {
  const handleSearch = (a) => {
    console.log(a);
    onSearch(a);
  };

  const onClick = (e) => {
    let TagClick = e.target.innerHTML;
    handleSearch(TagClick);
  };

  const UnsplashKeyword = ({ keyword }) => {
    return (
      <button className="Unsplashbutton" onClick={onClick}>
        {keyword.text}
      </button>
    );
  };

  return (
    <div className="container">
      <ul className="unsplash__taginner">
        {unsplashTagList.map((keyword, idx) => (
          <UnsplashKeyword key={idx} keyword={keyword} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashTag;
