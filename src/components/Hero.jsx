import { useGSAP } from "@gsap/react";
import CarouselComponent from "./Carousel";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const introductionRef = useRef(null);
  const topIntroRef = useRef(null);
  const centerIntroRef = useRef(null);
  const bottomIntroRef = useRef(null);
  const topIntroDataRef = useRef(null);
  const bottomIntroDataRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introductionRef.current,
          // markers: true,
          scroller: "body",
          start: "40% 50%",
          end: "50% 50%",
          // pin: true,
          scrub: 2,
        },
      });

      tl.to(
        topIntroRef.current,
        {
          height: 0,
          duration: 2,
          ease: "power1",
        },
        "a"
      )
        .to(
          bottomIntroRef.current,
          {
            height: 0,
            duration: 2,
            ease: "power1",
          },
          "a"
        )
        .to(
          topIntroDataRef.current,
          {
            yPercent: "50",
            duration: 2,
            ease: "power1",
          },
          "a"
        )
        .to(
          bottomIntroDataRef.current,
          {
            yPercent: "-50",
            duration: 2,
            ease: "power1",
          },
          "a"
        );
    },
    { scope: introductionRef.current }
  );

  return (
    <div className='relative isolate'>
      <div className='flex flex-col items-center max-w-full  overflow-hidden'>
        <CarouselComponent />
        <div
          className='relative flex justify-center items-center w-full h-[100vh] bg-slate-900'
          ref={introductionRef}
        >
          <div className='w-full h-full overflow-hidden' ref={centerIntroRef}>
            <video
              src='https://cdn.pixabay.com/video/2016/09/13/5157-183300197_large.mp4'
              muted
              loop
              autoPlay
              className='h-full w-full object-cover'
            ></video>
          </div>
          <div
            className='absolute flex items-end justify-center w-full h-[50%] top-0 bg-white bg-opacity-25 backdrop-blur-sm overflow-hidden'
            ref={topIntroRef}
          >
            <div
              className='absolute flex items-center justify-center gap-2 translate-y-[50%]'
              ref={topIntroDataRef}
            >
              <img
                src='images/logo.png'
                alt='Springdale Public School'
                className='w-[35%] lg:w-[25%] max-h-full'
              />
              <h2 className='whitespace-pre-wrap w-[50%] text-4xl/normal lg:text-8xl/normal font-bold'>
                Springdale Public School
              </h2>
            </div>
          </div>
          <div
            className='absolute flex items-start justify-center w-full h-[50%] bottom-0 bg-white bg-opacity-25 backdrop-blur-sm overflow-hidden'
            ref={bottomIntroRef}
          >
            <div
              className='abolute flex items-center justify-center gap-2 -translate-y-[50%]'
              ref={bottomIntroDataRef}
            >
              <img
                src='images/logo.png'
                alt='Springdale Public School'
                className='w-[35%] lg:w-[25%] max-h-full'
              />
              <h2 className='whitespace-pre-wrap w-[50%] text-4xl/normal lg:text-8xl/normal font-bold text-teal-800'>
                Springdale Public School
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
