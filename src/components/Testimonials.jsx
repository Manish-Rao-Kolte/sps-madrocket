import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "Springdale has been a great place for my child to grow and learn. The teachers are wonderful and very supportive.",
    author: "Jane Doe, Parent",
  },
  {
    quote:
      "I had an amazing experience at Springdale. The programs and extracurriculars helped me develop my skills and interests.",
    author: "John Smith, Alumni",
  },
  {
    quote:
      "The supportive environment at Springdale helped me excel academically and personally. I highly recommend it to anyone.",
    author: "Emily Johnson, Student",
  },
  {
    quote:
      "Springdale is a fantastic school with a strong sense of community and a focus on student success.",
    author: "Michael Brown, Parent",
  },
];

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current?.forEach((ref) => {
      gsap.from(ref, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref,
          start: "top 70%",
          end: "top 60%",
          // scrub: true,
          //   markers: true,
        },
      });
    });
  }, []);

  return (
    <div
      className='w-full min-h-[100vh] flex items-center p-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300'
      ref={testimonialsRef}
    >
      <div className='max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold text-center mb-6 text-teal-800'>
          What Our Community Says
        </h2>
        <div className='flex flex-wrap gap-6 justify-center'>
          {testimonials.map((testimonial, index) => (
            <div
              className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm'
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <blockquote className='italic text-gray-700 mb-4'>
                "{testimonial.quote}"
              </blockquote>
              <p className='font-semibold text-gray-900 text-right'>
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
