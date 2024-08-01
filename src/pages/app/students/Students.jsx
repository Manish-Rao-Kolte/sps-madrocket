import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { currentStudents, alumniData, perksData } from "../../../data";
import { useLayoutEffect } from "preact/hooks";

const Students = () => {
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "center 60%",
            // markers: false,
          },
        }
      );
    });

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
            // markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec] relative overflow-hidden'>
      {/* Current Students Section */}
      <section className='relative py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h2
            ref={(el) => (sectionRefs.current[0] = el)}
            className='text-5xl font-bold text-[#1d4e89] mb-10'
          >
            Meet Our Current Students
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {currentStudents.map((student, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden'
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className='w-32 h-32 rounded-full mx-auto mb-4 relative z-10'
                />
                <h3 className='text-2xl font-semibold text-[#1d4e89] mb-2 relative z-10'>
                  {student.name}
                </h3>
                <p className='text-lg text-[#334e68] mb-2 relative z-10'>
                  {student.achievement}
                </p>
                <p className='text-lg text-[#334e68] relative z-10'>
                  {student.description}
                </p>
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#41b883] to-[#34495e]'></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories Section */}
      <section className='relative py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h2
            ref={(el) => (sectionRefs.current[1] = el)}
            className='text-5xl font-bold text-[#1d4e89] mb-10'
          >
            Alumni Success Stories
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {alumniData.map((alumni, index) => (
              <div
                key={index}
                className='bg-gradient-to-t from-[#ffffff] to-[#f7fafc] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden'
                ref={(el) =>
                  (cardRefs.current[currentStudents.length + index] = el)
                }
              >
                <div className='flex flex-col items-center'>
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className='w-24 h-24 rounded-full mb-4 relative z-10'
                  />
                  <h3 className='text-xl font-semibold text-[#1d4e89] mb-2 relative z-10'>
                    {alumni.name}
                  </h3>
                  <p className='text-md text-[#334e68] mb-2 relative z-10'>
                    {alumni.college}
                  </p>
                  <p className='text-md text-[#334e68] relative z-10'>
                    {alumni.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks of Studying at Our School Section */}
      <section className='relative py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h2
            ref={(el) => (sectionRefs.current[2] = el)}
            className='text-5xl font-bold text-[#1d4e89] mb-10'
          >
            Perks of Studying at Our School
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {perksData.map((perk, index) => (
              <div
                key={index}
                className='bg-gradient-to-r from-[#ffffff] to-[#f7fafc] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden'
                ref={(el) =>
                  (cardRefs.current[
                    currentStudents.length + alumniData.length + index
                  ] = el)
                }
              >
                <div className='flex items-center justify-center mb-4 relative z-10'>
                  <span className='text-4xl text-[#41b883]'>{perk.icon}</span>
                </div>
                <h3 className='text-xl font-semibold text-[#1d4e89] mb-2 relative z-10'>
                  {perk.title}
                </h3>
                <p className='text-md text-[#334e68] relative z-10'>
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div className='absolute w-40 h-40 bg-[#6dd5ed] rounded-full opacity-50 -top-20 -left-20 animate-pulse'></div>
        <div className='absolute w-24 h-24 bg-[#34495e] rounded-full opacity-50 top-32 right-32 animate-pulse'></div>
        <div className='absolute w-16 h-16 bg-[#41b883] rounded-full opacity-50 bottom-16 left-32 animate-pulse'></div>
        <div className='absolute w-32 h-32 bg-[#1d4e89] rounded-full opacity-50 bottom-20 right-16 animate-pulse'></div>
      </div>
    </div>
  );
};

export default Students;
