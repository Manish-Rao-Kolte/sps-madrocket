import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { academicCardsData, academicSectionData } from "../../../data";

const Academics = () => {
  const sectionTitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-br from-[#e0f7fa] via-[#80deea] to-[#ffffff] relative overflow-hidden'>
      <section className='relative pt-16 lg:pt-24 pb-10 bg-gradient-to-t from-[#ffffff] to-[#e0f7fa]'>
        <div className='container mx-auto px-4'>
          {/* Section Title and Description */}
          <div className='text-center mb-12'>
            <h2
              ref={sectionTitleRef}
              className='text-4xl md:text-5xl font-bold text-[#00796b] mb-6'
            >
              {academicSectionData.title}
            </h2>
            {academicSectionData.description.map((paragraph, index) => (
              <p key={index} className='text-lg md:text-xl text-[#004d40] mb-6'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className='relative py-16 bg-gradient-to-t from-[#ffffff] to-[#e0f7fa]'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-[#00796b] mb-12'>
            {academicCardsData[0].title}
          </h2>
          <div className='flex flex-wrap justify-center gap-6'>
            {academicCardsData[0].list.map((section, index) => (
              <div
                key={index}
                className={`w-full ${
                  index === 2 ? "lg:w-1/2" : "lg:w-1/3"
                } px-4 mb-6 relative`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className='bg-white p-8 rounded-lg shadow-xl relative z-20 border border-gray-200'>
                  <h3 className='text-2xl md:text-3xl font-semibold text-[#00796b] mb-4'>
                    {section.heading}
                  </h3>
                  {section.details && Array.isArray(section.details) ? (
                    <ul className='list-disc list-inside text-[#004d40] space-y-2'>
                      {section.details.map((item, i) =>
                        typeof item === "string" ? (
                          <li key={i} className='text-lg md:text-xl'>
                            {item}
                          </li>
                        ) : (
                          <div key={i}>
                            <h4 className='text-xl md:text-2xl font-semibold text-[#00796b]'>
                              {item.heading}
                            </h4>
                            <ul className='list-disc list-inside text-[#004d40] space-y-1'>
                              {item.details.map((subItem, j) => (
                                <li key={j} className='text-lg md:text-xl'>
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className='text-lg md:text-xl text-[#004d40]'>
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodologies Section */}
      <section className='relative py-16 bg-gradient-to-br from-[#ffe0b2] via-[#ffcc80] to-[#ffab91]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#00796b] mb-6'>
              {academicCardsData[1].title}
            </h2>
            <p className='text-lg md:text-xl text-[#004d40]'>
              {academicCardsData[1].content}
            </p>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className='relative py-16 bg-gradient-to-br from-[#b2dfdb] via-[#80cbc4] to-[#4db6ac]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#00796b] mb-6'>
              {academicCardsData[2].title}
            </h2>
            <p className='text-lg md:text-xl text-[#004d40]'>
              {academicCardsData[2].content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
