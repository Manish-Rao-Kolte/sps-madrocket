import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { createRef } from "preact";

const data = [
  {
    title: "School Mission",
    text: "To foster a diverse and inclusive community dedicated to academic excellence and personal growth.",
  },
  {
    title: "School Vision",
    text: "To cultivate lifelong learners who contribute to a global society.",
  },
  {
    title: "Core Values",
    text: "Integrity, Respect, Responsibility, Excellence, and Innovation.",
  },
  {
    title: "Principal’s Message",
    text: "Welcome to our school, where we prioritize the holistic development of every student.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Excellence in Academics",
    text: "Our students consistently achieve top rankings in national examinations.",
  },
  {
    title: "Innovative Learning",
    text: "We embrace technology and innovative teaching methods to enhance learning.",
  },
  {
    title: "Community Engagement",
    text: "We encourage students to participate in community service and outreach programs.",
  },
];

const AboutTheSchool = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Clear the previous animations
    gsap.killTweensOf(cardRefs.current);

    // Create animations for each card
    cardRefs.current.forEach((ref) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "-20% 70%",
            end: "0% 50%",
            // scrub: true,
            // pin: true,
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      className='flex flex-wrap gap-8 justify-center lg:overflow-auto items-center p-8 bg-gradient-to-r from-gray-100 to-gray-300 w-full min-h-[100vh] relative'
      ref={sectionRef}
    >
      {/* Heading */}
      <h1 className='text-4xl font-bold text-center text-teal-800 w-full mb-8'>
        About the School
      </h1>

      {/* Map over the data to create cards */}
      {data?.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el || createRef())}
          className='flex flex-col items-center bg-white p-4 rounded-lg shadow-lg max-w-sm w-full transform transition-transform'
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className='w-32 h-32 rounded-full mb-4'
            />
          )}
          <h2 className='text-2xl font-semibold text-gray-700 mb-2'>
            {item.title}
          </h2>
          <p className='text-gray-600 text-center'>{item.text}</p>
          {item.title === "Principal’s Message" && (
            <div className='mt-4 flex space-x-1'>
              {[...Array(5)].map((_, i) => (
                <span key={i} className='text-yellow-500'>
                  ★
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default AboutTheSchool;
