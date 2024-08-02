import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { facultyData } from "../../../data";
import { useLayoutEffect } from "preact/hooks";

const Faculty = () => {
  const sectionTitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      sectionTitleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 15%",
          end: "center 10%",
          markers: false,
        },
      }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "center center",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#e8f4f8] to-[#d0e5f0] relative overflow-hidden py-14'>
      {/* heading section */}
      <section className='relative py-10 flex flex-col items-center'>
        <div className='container mx-auto px-6'>
          <div
            ref={sectionTitleRef}
            className='bg-gradient-to-r from-[#00796b] to-[#004d40] py-10 px-6 rounded-lg shadow-md text-center mb-10 relative overflow-hidden'
          >
            <h2 className='text-5xl font-bold text-white mb-4'>
              Meet Our Faculty
            </h2>
            <p className='text-lg text-white'>
              Our faculty members are experienced professionals dedicated to
              providing the best education to our students.
            </p>
          </div>
        </div>
      </section>

      {/* faculty info section */}
      <section className='relative py-16'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {facultyData.map((faculty, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden'
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className='absolute inset-0 bg-gradient-to-t from-[#00796b] to-transparent opacity-20'></div>
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className='w-32 h-32 rounded-full mx-auto mb-6 relative z-10'
                />
                <h3 className='text-2xl font-semibold text-[#00796b] mb-2 relative z-10'>
                  {faculty.name}
                </h3>
                <p className='text-lg text-[#004d40] mb-2 relative z-10'>
                  {faculty.title}
                </p>
                <p className='text-lg text-[#004d40] relative z-10'>
                  {faculty.description}
                </p>
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00796b] to-[#004d40]'></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div className='absolute w-60 h-60 bg-[#004d40] rounded-full opacity-30 top-14 left-20 animate-pulse'></div>
        <div className='absolute w-40 h-40 bg-[#00796b] rounded-full opacity-30 bottom-20 right-1/4 animate-pulse'></div>
        <div className='absolute w-48 h-48 bg-[#d0e5f0] rounded-full opacity-30 top-1/2 left-1/3 animate-pulse'></div>
        <div className='absolute w-32 h-32 bg-[#e8f4f8] rounded-full opacity-30 bottom-10 left-10 animate-pulse'></div>
      </div>
    </div>
  );
};

export default Faculty;
