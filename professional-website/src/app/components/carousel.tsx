import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/carouselProj/catFood.png',
  '/carouselProj/burnelle.png',
  '/carouselProj/mcdo.png',
];

export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        {images.map((src, index) => {
          const slideNumber = index + 1;
          const prevSlide = slideNumber === 1 ? images.length : slideNumber - 1;
          const nextSlide = slideNumber === images.length ? 1 : slideNumber + 1;

          return (
            <div key={src} id={`slide${slideNumber}`} className="carousel-item relative w-full">
              <Image
                src={src}
                alt={`Slide ${slideNumber}`}
                layout="responsive"
                width={1280}
                height={720}
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${prevSlide}`} className="btn btn-circle">❮</a>
                <a href={`#slide${nextSlide}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Number buttons for direct slide navigation */}
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => {
          const slideNumber = index + 1;
          return (
            <Link
              key={slideNumber}
              href={`#slide${slideNumber}`}
              className="btn btn-s btn-circle "
              aria-label={`Go to slide ${slideNumber}`}
            >
              {slideNumber}
            </Link>
          );
        })}
      </div>
    </>
  );
}
