import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import CarouselComponent from "../../../components/Carousel_Component";
import { useLayoutEffect } from "preact/hooks";
import { gallerySections, galleryVideos } from "../../../data";

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
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
        onComplete: () => {
          setSelectedAlbum(null);
          setSelectedVideo(null);
        },
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
            start: "top 75%",
            end: "top 50%",
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center bg-gradient-to-br from-[#e0f7fa] to-[#80deea] relative overflow-hidden'>
      {/* Different album sections */}
      <section className='py-14 lg:py-20 h-full flex flex-col'>
        <div className='w-full flex flex-wrap justify-center gap-6 px-3 lg:px-6 py-5 lg:py-10'>
          {gallerySections?.albums?.map((album, albumIndex) => (
            <div
              key={albumIndex}
              className='cursor-pointer flex flex-col gap-2 p-4 rounded-lg shadow-lg bg-gradient-to-tr from-[#ffffff] to-[#e0f7fa] hover:scale-105 transform transition-transform duration-300'
              onClick={() => handleAlbumClick(album)}
              ref={(el) => (albumRefs.current[albumRefs.current?.length] = el)}
            >
              <h4 className='text-base md:text-xl lg:text-2xl text-center font-semibold text-[#00796b] mb-2'>
                {album.title}
              </h4>
              <div className='grid grid-cols-3 gap-2'>
                {album.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`${album.title} ${imageIndex + 1}`}
                    className='w-full h-48 object-cover rounded-lg'
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className='py-6 w-full bg-gradient-to-t from-[#ffffff] to-[#b2ebf2]'>
        <div className='container w-full mx-auto px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {galleryVideos.map((video, videoIndex) => (
              <div
                key={videoIndex}
                className='cursor-pointer mb-6'
                onClick={() => setSelectedVideo(video)}
              >
                <h4 className='text-base md:text-xl text-center lg:text-2xl font-medium text-[#00796b] mb-2'>
                  {video.description}
                </h4>
                <video
                  controls
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                >
                  <source
                    src={`https://via.placeholder.com/600x400?text=Video+Thumbnail+${
                      videoIndex + 1
                    }`}
                    type='video/*'
                  />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel when any album or video is clicked */}
      <section
        className={`${
          selectedAlbum || selectedVideo ? "absolute" : "hidden"
        } h-[100vh] inset-0 top-16 bg-black bg-opacity-75 z-50 flex flex-col items-center gap-10 overflow-hidden px-4 `}
        ref={carouselContainerRef}
      >
        <div className='relative w-full flex justify-end'>
          <button
            className='absolute top-4 z-50 right-0 h-8 w-8 flex justify-center items-center text-white text-3xl p-1 bg-[#1e3a8a] hover:bg-[#3b82f6] overflow-hidden rounded-full cursor-pointer'
            onClick={handleCloseCarousel}
          >
            &times;
          </button>
        </div>
        <div className='w-full bg-white rounded-lg shadow-lg' ref={carouselRef}>
          {selectedAlbum && (
            <CarouselComponent
              images={selectedAlbum.images.map((src) => ({ src }))}
              height={"80vh"}
            />
          )}
          {selectedVideo && (
            <div className='flex items-center justify-center h-[80vh]'>
              <video
                src={selectedVideo.src}
                controls
                className='w-full h-full'
              />
            </div>
          )}
        </div>
      </section>

      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div className='absolute w-40 h-40 bg-[#6dd5ed] rounded-full opacity-50 -top-20 -left-20 animate-pulse'></div>
        <div className='absolute w-24 h-24 bg-[#004d40] rounded-full opacity-50 top-32 right-32 animate-pulse'></div>
        <div className='absolute w-16 h-16 bg-[#00796b] rounded-full opacity-50 bottom-[50%] left-32 animate-pulse'></div>
        <div className='absolute w-32 h-32 bg-[#004d40] rounded-full opacity-50 bottom-[50%] right-16 animate-pulse'></div>
      </div>
    </div>
  );
};

export default Gallery;
