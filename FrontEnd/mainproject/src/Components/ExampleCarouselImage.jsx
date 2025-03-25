import React from 'react';
import '../Css/Common.css';

const ExampleCarouselImage = ({ imageUrl, altText = "Carousel Image" }) => {
  return (
    <div className="carousel-setup">
      {imageUrl ? (
        <img src={imageUrl} alt={altText} className="carousel-image" />
      ) : (
        <p className="carousel-placeholder">Carousel Image Placeholder</p>
      )}
    </div>
  );
};

export default ExampleCarouselImage;

