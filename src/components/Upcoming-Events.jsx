import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { events } from "../data";
import { heroCarouselData } from "../data";
import CarouselComponent from "./Carousel_Component";

const UpcomingEvents = () => {
  const eventsRef = useRef(null);
  const eventRefs = useRef([]);
  const detailsRef = useRef(null);
  const closeBtnRef = useRef(null);
  const detailsBgRef = useRef(null);
  const carouselRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: eventsRef.current,
        start: "top 50%",
        end: "45% 50%",
        // scrub: 2,
        // markers: true,
      },
    });
    eventRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "a"
      );
    });

    tl.fromTo(
      carouselRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "a"
    );
  });

  const handleClose = () => {
    if (detailsRef.current) {
      gsap.to([detailsRef.current, detailsBgRef.current], {
        opacity: 0,
        y: 50,
        duration: 1,
        onComplete: () => setExpandedIndex(null),
      });
    } else {
      setExpandedIndex(null);
    }
  };

  useEffect(() => {
    if (expandedIndex !== null) {
      gsap.fromTo(
        [detailsRef.current, detailsBgRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [expandedIndex]);

  return (
    <div
      className='relative flex gap-2 bg-gradient-to-br from-gray-50 to-gray-100 px-11 py-4 lg:gap-4 rounded-lg shadow-lg min-h-screen'
      ref={eventsRef}
    >
      <section className='flex flex-col w-full lg:w-[50%]'>
        <h2 className='text-3xl font-bold mb-4 text-teal-800'>
          Upcoming Events
        </h2>
        <div className='relative flex-1 flex flex-wrap flex-col gap-4'>
          {events?.map((event, index) => (
            <div
              key={event.schedule}
              ref={(el) => (eventRefs.current[index] = el)}
              onClick={() => setExpandedIndex(index)}
              className={`relative bg-white rounded-lg shadow-lg transform transition-transform cursor-pointer overflow-hidden flex-grow`}
            >
              <div className='relative z-10 p-6'>
                <p className='text-xl font-semibold'>{event.title}</p>
                <p className='text-gray-500'>{event.schedule}</p>
                <p className='text-gray-500'>{event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='hidden lg:flex lg:flex-1 flex-col rounded-lg'>
        <h2 className='text-2xl font-bold mb-4 opacity-0'>Upcoming Events</h2>
        <div className='rounded-lg overflow-hidden' ref={carouselRef}>
          <CarouselComponent
            images={heroCarouselData.images}
            captions={heroCarouselData.captions}
            height={"100vh"}
          />
        </div>
      </section>
      <section
        className={`${
          expandedIndex !== null ? "absolute" : "hidden"
        } inset-0 h-full w-full px-4 py-6`}
      >
        <div
          className='relative flex flex-col gap-1 w-full h-full bg-slate-900 bg-opacity-80 rounded-lg'
          ref={detailsBgRef}
        >
          <div
            className='absolute inset-0 flex flex-col gap-1 w-full h-full rounded-lg justify-center items-center p-6'
            ref={detailsRef}
          >
            <span
              className='flex opacity-0 justify-center items-center h-7 w-7 p-1 text-base lg:text-xl font-semibold rounded-full bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
              onClick={handleClose}
              ref={closeBtnRef}
            >
              X
            </span>
            <div className='w-full h-full flex gap-2 flex-col lg:flex-row shadow-lg rounded-lg px-4 lg:p-6 overflow-auto'>
              {events[expandedIndex]?.details?.map((detail, index) => {
                return (
                  <div
                    className='basis-1/2 bg-slate-200 p-4 rounded-lg shadow-sm h-full hover:scale-105'
                    key={index}
                  >
                    <h3 className='text-xl font-semibold text-gray-800'>
                      {detail.heading}
                    </h3>
                    <p className='text-gray-600'>{detail.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <span
            className='absolute right-2 top-2 flex justify-center items-center h-6 w-6 p-1 text-base lg:text-xl font-semibold rounded-full bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            onClick={handleClose}
            ref={closeBtnRef}
          >
            x
          </span>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
