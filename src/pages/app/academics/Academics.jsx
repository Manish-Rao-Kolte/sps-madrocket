import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { academicCardsData, academicSectionData } from "../../../data";

const Academics = () => {
  // References for the section title and cards
  const sectionTitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animation for the section title
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
          start: "top 10%",
          end: "center 10%",
          markers: false, // Set to true to debug scroll trigger positions
        },
      }
    );

    // Animations for each card
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "10% center+=100",
            end: "center center",
            markers: false, // Set to true to debug scroll trigger positions
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#f9f9f9] to-[#e0e0e0] relative overflow-hidden pt-4'>
      <section className='relative pt-20 pb-20'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='lg:w-1/2 lg:pr-10'>
              {/* Section title and description */}
              <h2
                ref={sectionTitleRef}
                className='text-4xl font-extrabold text-center lg:text-left mb-8'
              >
                {academicSectionData.title}
              </h2>
              {academicSectionData.description.map((paragraph, index) => (
                <p key={index} className='text-lg text-gray-800 mb-6'>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className='relative lg:w-1/2 lg:pl-10 mt-12 lg:mt-0'>
              {/* Academic Programs card */}
              <div className='bg-white p-6 rounded-lg shadow-lg relative z-20'>
                <h3 className='text-2xl font-semibold text-center mb-4'>
                  {academicCardsData[0].title}
                </h3>
                <p className='text-lg text-gray-700'>
                  {academicCardsData[0].content}
                </p>
              </div>
              {/* Decorative circles */}
              {academicCardsData[0].decorative.map((decor, index) => (
                <div
                  key={index}
                  className={`absolute ${decor.position} bg-gradient-to-br ${decor.color} rounded-full opacity-50 ${decor.size} ${decor.transform} z-10`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-extrabold text-center mb-12'>
            Academic Levels
          </h2>
          <div className='flex flex-wrap -mx-4'>
            {academicCardsData.slice(1, 3).map((card, index) => (
              <div
                key={index}
                className={`w-full lg:w-1/2 px-4 mb-6 ${card.position}`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className='bg-white p-6 rounded-lg shadow-lg h-full flex flex-col relative z-20'>
                  <h3 className='text-xl font-semibold mb-4'>{card.title}</h3>
                  <p className='text-gray-700 mb-4'>{card.content}</p>
                  {card.list && (
                    <ul className='list-disc list-inside text-gray-700'>
                      {card.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {card.decorative &&
                    card.decorative.map((decor, i) => (
                      <div
                        key={i}
                        className={`absolute ${decor.position} bg-gradient-to-br ${decor.color} rounded-full opacity-50 ${decor.size} ${decor.transform}`}
                      ></div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 bg-gradient-to-b from-[#f9f9f9] to-[#e0e0e0]'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-extrabold text-center mb-12'>
            Extracurricular Activities
          </h2>
          <div className='flex flex-wrap -mx-4'>
            {academicCardsData.slice(3).map((card, index) => (
              <div
                key={index}
                className={`w-full lg:w-1/3 px-4 mb-6 ${card.position}`}
                ref={(el) => (cardRefs.current[index + 2] = el)}
              >
                <div className='bg-white p-6 rounded-lg shadow-lg h-full flex flex-col relative z-20'>
                  <h3 className='text-xl font-semibold mb-4'>{card.title}</h3>
                  <p className='text-gray-700 mb-4'>{card.content}</p>
                  {card.decorative &&
                    card.decorative.map((decor, i) => (
                      <div
                        key={i}
                        className={`absolute ${decor.position} bg-gradient-to-br ${decor.color} rounded-full opacity-50 ${decor.size} ${decor.transform}`}
                      ></div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
