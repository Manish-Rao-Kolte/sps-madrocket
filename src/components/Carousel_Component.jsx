import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = ({ images, captions, height }) => {
  return (
    <Carousel
      className='w-full rounded-lg'
      controls={true}
      indicators={true}
      interval={3000}
      pause='hover'
    >
      {images.map((image, index) => (
        <Carousel.Item key={index} className='relative'>
          <img
            className={`d-block w-100 h-[${height}] img-fluid mx-auto object-cover`}
            src={image.src}
            alt={image.alt || `Slide ${index}`}
          />
          {captions && captions[index] && (
            <Carousel.Caption className='bg-gradient-to-t from-black/50 via-transparent to-transparent bg-opacity-45 p-4 rounded-lg'>
              <h5 className='font-bold text-white text-3xl mb-2'>
                {captions[index].title}
              </h5>
              <p className='text-white text-lg'>{captions[index].detail}</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
