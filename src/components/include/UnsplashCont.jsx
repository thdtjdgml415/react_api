import React from "react";

const UnsplashItem = ({ image }) => {
  return (
    <li>
      <a href={image.links.html}>
        <img src={image.urls.regular} alt={image.urls.alt_description} />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  // console.log(images);
  return (
    <div className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {images.map((image, idx) => (
              <UnsplashItem key={idx} image={image} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnsplashCont;
