import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  perksData,
  lifeAtSpringdale,
  studentAchievements,
  studentCouncil,
} from "../../../data";
import { useLayoutEffect } from "preact/hooks";

gsap.registerPlugin(ScrollTrigger);

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
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 70%",
            // markers: true,
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
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-br from-[#e0f7fa] to-[#80deea] relative overflow-hidden'>
      {/* Life at Springdale Section */}
      <section className='relative py-16 lg:py-24 bg-gradient-to-t from-[#ffffff] to-[#e0f7fa]'>
        <div className='container mx-auto px-6 text-center'>
          <h2
            ref={(el) => (sectionRefs.current[0] = el)}
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#00796b] mb-10'
          >
            Life at Springdale
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#00796b] mb-4'>
                Extracurricular Activities
              </h3>
              <p className='text-lg text-[#004d40]'>
                {lifeAtSpringdale.extracurricularActivities}
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#00796b] mb-4'>
                Clubs and Societies
              </h3>
              <p className='text-lg text-[#004d40]'>
                {lifeAtSpringdale.clubsAndSocieties}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className='relative py-20 bg-gradient-to-t from-[#ffffff] to-[#b2ebf2]'>
        <div className='container mx-auto px-6 text-center'>
          <h2
            ref={(el) => (sectionRefs.current[1] = el)}
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#00796b] mb-10'
          >
            Achievements
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {studentAchievements.map((achievement, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <p className='text-lg text-[#004d40]'>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Council Section */}
      <section className='relative py-20 bg-gradient-to-t from-[#ffffff] to-[#4dd0e1]'>
        <div className='container mx-auto px-6 text-center'>
          <h2
            ref={(el) => (sectionRefs.current[2] = el)}
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#00796b] mb-10'
          >
            Student Council
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#00796b] mb-4'>
                President
              </h3>
              <p className='text-lg text-[#004d40]'>
                {studentCouncil.president.name}, Grade{" "}
                {studentCouncil.president.grade}
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#00796b] mb-4'>
                Vice President
              </h3>
              <p className='text-lg text-[#004d40]'>
                {studentCouncil.vicePresident.name}, Grade{" "}
                {studentCouncil.vicePresident.grade}
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#00796b] mb-4'>
                Secretary
              </h3>
              <p className='text-lg text-[#004d40]'>
                {studentCouncil.secretary.name}, Grade{" "}
                {studentCouncil.secretary.grade}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks of Studying at Our School Section */}
      <section className='relative py-20 bg-gradient-to-t from-[#ffffff] to-[#00acc1]'>
        <div className='container mx-auto px-6 text-center'>
          <h2
            ref={(el) => (sectionRefs.current[3] = el)}
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffffff] mb-10'
          >
            Perks of Studying at Our School
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {perksData.map((perk, index) => (
              <div
                key={index}
                className='bg-gradient-to-r from-[#ffffff] to-[#e0f7fa] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden'
                ref={(el) =>
                  (cardRefs.current[index + studentAchievements.length + 3] =
                    el)
                }
              >
                <div className='flex items-center justify-center mb-4 relative z-10'>
                  <span className='text-4xl text-[#00796b]'>{perk.icon}</span>
                </div>
                <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#00796b] mb-2 relative z-10'>
                  {perk.title}
                </h3>
                <p className='text-md text-[#004d40] relative z-10'>
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* decorative circles */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div className='absolute w-40 h-40 bg-[#6dd5ed] rounded-full opacity-50 -top-20 -left-20 animate-pulse'></div>
        <div className='absolute w-24 h-24 bg-[#004d40] rounded-full opacity-50 top-32 right-32 animate-pulse'></div>
        <div className='absolute w-16 h-16 bg-[#00796b] rounded-full opacity-50 bottom-16 left-32 animate-pulse'></div>
        <div className='absolute w-32 h-32 bg-[#004d40] rounded-full opacity-50 bottom-20 right-16 animate-pulse'></div>
      </div>
    </div>
  );
};

export default Students;
