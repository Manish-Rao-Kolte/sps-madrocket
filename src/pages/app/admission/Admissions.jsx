import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { admissionData } from "../../../data";
import { useLayoutEffect } from "preact/hooks";

const Admission = () => {
  const sectionTitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    // animate title section
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

    // animate for cards
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
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#f0f4f8] to-[#d0e5f0] relative overflow-hidden'>
      {/* title-info section */}
      <section className='relative py-24 bg-gradient-to-b from-[#d0e5f0] to-[#b3e5fc]'>
        <div className='container mx-auto px-6'>
          <div className='text-center'>
            <h2
              ref={sectionTitleRef}
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#004d40] mb-8'
            >
              Admission Process
            </h2>
            <p className='text-lg md:text-xl lg:text-2xl text-[#003f5c] mb-12'>
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office.
            </p>
            <a
              href='/documents/admission-form.docx'
              download
              className='inline-block px-6 py-3 bg-[#004d40] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#003f5c] transition-colors'
            >
              Download Admission Form
            </a>
          </div>
        </div>
      </section>
      {/* cards section */}
      <section className='relative py-20'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div
              className='bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#004d40] mb-4'>
                Criteria
              </h3>
              <p className='text-lg md:text-xl text-[#003f5c]'>
                Admission is based on merit and availability of seats. Entrance
                tests may be conducted for certain grades.
              </p>
            </div>

            <div
              className='bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#004d40] mb-4'>
                Important Dates
              </h3>
              <ul className='space-y-4 text-lg md:text-xl text-[#003f5c]'>
                {admissionData.importantDates.map((date, index) => (
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
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#004d40] mb-4'>
                Contact Us
              </h3>
              <p className='text-lg md:text-xl text-[#003f5c] mb-4'>
                For questions or assistance, please reach out to our admissions
                team:
              </p>
              <p className='text-lg md:text-xl text-[#003f5c]'>
                <strong>Email:</strong> admissions@school.com
              </p>
              <p className='text-lg md:text-xl text-[#003f5c]'>
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
