import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { gallerySections } from "../../../data";
import CarouselComponent from "../../../components/Carousel_Component";
import { useLayoutEffect } from "preact/hooks";

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const albumRefs = useRef([]);
  const carouselContainerRef = useRef(null);
  const carouselRef = useRef(null);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    gsap.fromTo(
      [carouselContainerRef.current, carouselRef.current],
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
      }
    );
  };

  const handleCloseCarousel = () => {
    gsap.fromTo(
      [carouselContainerRef.current, carouselRef.current],
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.7,
        onComplete: () => setSelectedAlbum(null),
      }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    albumRefs.current.forEach((album, index) => {
      gsap.fromTo(
        album,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: album,
            start: "top 70%",
            end: "top+=20% 55%",
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-[100vh] bg-[#f9f9f9]'>
      {/* different album sections */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl lg:text-5xl font-bold text-center text-[#1e3a8a] mb-8'>
            Gallery
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {gallerySections.map((section, sectionIndex) => (
              <div key={sectionIndex} className='mb-12'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-center text-[#1e3a8a] mb-4'>
                  {section.title}
                </h3>
                <div className='p-6 rounded-lg shadow-lg bg-white border border-gray-200'>
                  {section.albums.map((album, albumIndex) => (
                    <div
                      key={albumIndex}
                      className='cursor-pointer mb-6'
                      onClick={() => handleAlbumClick(album)}
                      ref={(el) =>
                        (albumRefs.current[albumRefs.current?.length] = el)
                      }
                    >
                      <h4 className='text-base md:text-xl lg:text-2xl font-medium text-[#1e3a8a] mb-2'>
                        {album.title}
                      </h4>
                      <div className='grid grid-cols-3 gap-2'>
                        {album.images.slice(0, 3).map((image, imageIndex) => (
                          <img
                            key={imageIndex}
                            src={image}
                            alt={`${album.title} ${imageIndex + 1}`}
                            className='w-full h-24 object-cover rounded-lg'
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* caraousel when any album is clicked */}
      <section
        className={`${
          selectedAlbum ? "fixed" : "hidden"
        } h-[100vh] inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center overflow-hidden p-4`}
        ref={carouselContainerRef}
      >
        <button
          className='absolute top-4 right-4 h-8 w-8 flex justify-center items-center text-white text-3xl p-1 bg-[#1e3a8a] hover:bg-[#3b82f6] overflow-hidden rounded-full'
          onClick={handleCloseCarousel}
        >
          &times;
        </button>
        <div
          className='w-3/4 h-auto bg-white rounded-lg shadow-lg'
          ref={carouselRef}
        >
          {selectedAlbum && (
            <CarouselComponent
              images={selectedAlbum.images.map((src) => ({ src }))}
              height={"80vh"}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
