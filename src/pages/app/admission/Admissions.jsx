import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { admissionData } from "../../../data";

const Admission = () => {
  const sectionTitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
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
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#e8f4f8] to-[#d0e5f0] relative overflow-hidden'>
      <section className='relative py-32 bg-[#d0e5f0]'>
        <div className='container mx-auto px-6'>
          <div className='text-center'>
            <h2
              ref={sectionTitleRef}
              className='text-4xl font-bold text-[#003366] mb-8'
            >
              Admission Process
            </h2>
            <p className='text-lg text-[#004080] mb-12'>
              Learn about the steps to join our esteemed institution and become
              part of our community.
            </p>
          </div>
        </div>
      </section>

      <section className='relative py-20'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div
              className='bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <h3 className='text-2xl font-semibold text-[#003366] mb-4'>
                Admission Steps
              </h3>
              <ol className='list-decimal list-inside space-y-4 text-lg text-[#004080]'>
                {admissionData.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            <div
              className='bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <h3 className='text-2xl font-semibold text-[#003366] mb-4'>
                Important Dates
              </h3>
              <ul className='space-y-4 text-lg text-[#004080]'>
                {admissionData.dates.map((date, index) => (
                  <li key={index}>
                    <strong>{date.label}:</strong> {date.date}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className='bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
              ref={(el) => (cardRefs.current[2] = el)}
            >
              <h3 className='text-2xl font-semibold text-[#003366] mb-4'>
                Contact Us
              </h3>
              <p className='text-lg text-[#004080] mb-4'>
                For questions or assistance, please reach out to our admissions
                team:
              </p>
              <p className='text-lg text-[#004080]'>
                <strong>Email:</strong> admissions@school.com
              </p>
              <p className='text-lg text-[#004080]'>
                <strong>Phone:</strong> (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
