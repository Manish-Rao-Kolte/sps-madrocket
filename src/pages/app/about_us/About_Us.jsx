import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About_Us = () => {
  const sectionTitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          start: "center 20%",
          end: "center 20%",
        },
      }
    );

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
            start: "top center+=100",
            end: "center center",
          },
        }
      );
    });
  }, []);

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#e0f7fa] to-[#80deea] relative overflow-hidden pt-4'>
      <section className='relative pt-20 pb-20 bg-gradient-to-t from-[#ffffff] to-[#e0f7fa]'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            {/* About Us Section */}
            <div className='lg:w-1/2 lg:pr-10'>
              <h2
                ref={sectionTitleRef}
                className='text-4xl font-extrabold text-center lg:text-left mb-8 text-[#00796b]'
              >
                About Us
              </h2>
              <div className='text-lg text-[#004d40] mb-6'>
                <h3 className='text-2xl font-semibold mb-4 text-[#00796b]'>
                  History
                </h3>
                <p>
                  Founded in 1985, Springdale Public School has been dedicated
                  to providing quality education and holistic development to
                  students.
                </p>
              </div>
              <div className='text-lg text-[#004d40] mb-6'>
                <h3 className='text-2xl font-semibold mb-4 text-[#00796b]'>
                  Vision
                </h3>
                <p>
                  To create a learning environment that fosters academic
                  excellence, critical thinking, and ethical values.
                </p>
              </div>
              <div className='text-lg text-[#004d40] mb-6'>
                <h3 className='text-2xl font-semibold mb-4 text-[#00796b]'>
                  Mission
                </h3>
                <p>
                  To empower students with the knowledge, skills, and values
                  needed to thrive in a dynamic world.
                </p>
              </div>
            </div>
            {/* Principal's Message Section */}
            <div className='relative lg:w-1/2 lg:pl-10 mt-12 lg:mt-0'>
              <div className='bg-white p-6 rounded-lg shadow-lg relative z-10'>
                <img
                  className='w-32 h-32 rounded-full mx-auto mb-4'
                  src='https://via.placeholder.com/150'
                  alt='Principal'
                />
                <h3 className='text-2xl font-semibold text-center mb-4 text-[#00796b]'>
                  Principal's Message
                </h3>
                <p className='text-lg text-[#004d40]'>
                  At Springdale, we believe in nurturing the potential of every
                  student and guiding them towards a successful future.
                </p>
              </div>
              <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#6dd5ed] to-[#004d40] rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2'></div>
              <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-bl from-[#00796b] to-[#004d40] rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure and Facilities Section */}
      <section className='relative py-20 bg-gradient-to-t from-[#ffffff] to-[#e0f7fa]'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-extrabold text-center mb-12 text-[#00796b]'>
            Infrastructure and Facilities
          </h2>
          <ul className='list-disc list-inside text-[#004d40] text-lg'>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>
              Library with a vast collection of books and digital resources
            </li>
            <li>
              Sports facilities including a playground, gymnasium, and swimming
              pool
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About_Us;
