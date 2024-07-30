import { useRef, useEffect } from "react";
import gsap from "gsap";
import CarouselComponent from "./Carousel";

const Hero = () => {
  const introductionRef = useRef(null);
  const firstBoxRef = useRef(null);
  const secondBoxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      firstBoxRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: firstBoxRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // ScrollTrigger for second box
    gsap.fromTo(
      secondBoxRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: secondBoxRef.current,
          start: "top center",
          end: "50% center",
          // markers: true,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className='relative isolate'>
      <div className='flex flex-col items-center max-w-full overflow-hidden'>
        <CarouselComponent />
        <div
          className='relative flex justify-center items-center w-full h-[100vh] bg-gray-100'
          ref={introductionRef}
        >
          <div
            className='absolute w-[22vw] max-w-xs h-auto p-4 bg-white bg-opacity-90 rounded-lg shadow-lg flex flex-col items-center justify-center'
            ref={firstBoxRef}
            style={{ top: "5%", left: "5%" }}
          >
            <img
              src='images/logo.png'
              alt='Springdale Public School'
              className='w-full max-h-full mb-2'
            />
            <h2 className='text-center text-base md:text-xl lg:text-3xl font-bold text-teal-800'>
              Springdale Public School
            </h2>
          </div>
          <div
            className='absolute inset-0 lg:left-[25vw] lg:top-[23vh] w-full h-full lg:w-[66vw] lg:h-[66vh] bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex items-center justify-center'
            ref={secondBoxRef}
          >
            <video
              src='https://cdn.pixabay.com/video/2016/09/13/5157-183300197_large.mp4'
              muted
              loop
              autoPlay
              className='h-full w-full object-cover rounded-lg'
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
