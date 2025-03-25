// change the whole code to neat and change the mistake
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Css/Common.css';

const CarouselComponent = () => {
  const slides = [
    {
      image: "./src/assets/about_img/a7.jpg",
      title: "Best Sales",
      description: "We welcome you to our best sales."
    },
    {
      image: "./src/assets/about_img/a2.avif",
      title: "Best Quality",
      description: "We provide high-quality products with guaranteed satisfaction."
    },
    {
      image: "./src/assets/about_img/a3.avif",
      title: "Better Durability",
      description: "Our products ensure long-lasting performance and reliability."
    }
  ];

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img src={slide.image} className="d-block w-100" alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
