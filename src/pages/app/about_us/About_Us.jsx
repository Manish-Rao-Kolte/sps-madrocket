import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { createRef } from "preact";

const About_Us = () => {
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
          start: "center 20%",
          end: "center 20%",
          // markers: true,
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
            // markers: true,
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
            {/* About Us Section */}
            <div className='lg:w-1/2 lg:pr-10'>
              <h2
                ref={sectionTitleRef}
                className='text-4xl font-extrabold text-center lg:text-left mb-8'
              >
                About Us
              </h2>
              <p className='text-lg text-gray-800 mb-6'>
                Welcome to Springdale Public School, where we are dedicated to
                fostering a nurturing and dynamic environment for our students.
                Our mission is to provide quality education and holistic
                development, focusing on academic excellence, character
                building, and community involvement. With a vision to create
                future leaders and responsible citizens, we emphasize a balanced
                and inclusive approach to education.
              </p>
              <p className='text-lg text-gray-800'>
                At Springdale, we believe in the potential of every child and
                strive to cultivate their unique talents and abilities. Our
                experienced faculty, modern facilities, and supportive community
                work together to ensure that each student receives the best
                possible education and prepares them for success in their future
                endeavors.
              </p>
            </div>
            {/* Principal's Message Section */}
            <div className='relative lg:w-1/2 lg:pl-10 mt-12 lg:mt-0'>
              <div className='bg-white p-6 rounded-lg shadow-lg relative z-10'>
                <img
                  className='w-32 h-32 rounded-full mx-auto mb-4'
                  src='https://via.placeholder.com/150'
                  alt='Principal'
                />
                <h3 className='text-2xl font-semibold text-center mb-4'>
                  Principal's Message
                </h3>
                <p className='text-lg text-gray-700'>
                  I am honored to welcome you to Springdale Public School. Our
                  commitment to excellence in education is unwavering, and we
                  are dedicated to providing a supportive and enriching
                  environment for our students. Together with our dedicated
                  staff, we aim to inspire and empower each child to reach their
                  full potential. Thank you for being a part of our school
                  community.
                </p>
              </div>
              <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2'></div>
              <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-bl from-teal-300 to-blue-500 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-extrabold text-center mb-12'>
            Our Programs
          </h2>
          <div className='flex flex-wrap -mx-4'>
            {/* Card 1 */}
            <div className='w-full lg:w-1/4 px-4 mb-6'>
              <div
                ref={(el) => (cardRefs.current[0] = el || createRef())}
                className='bg-white p-6 rounded-lg shadow-lg h-full flex flex-col'
              >
                <h3 className='text-xl font-semibold mb-4'>Admission</h3>
                <p className='text-gray-700 mb-4'>
                  Discover the admission process and requirements for joining
                  our school. We welcome new students and provide all the
                  information needed for a smooth enrollment experience.
                </p>
                <Link
                  to='/admission'
                  className='text-blue-500 hover:underline mt-auto'
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className='w-full lg:w-1/4 px-4 mb-6'>
              <div
                ref={(el) => (cardRefs.current[1] = el || createRef())}
                className='bg-white p-6 rounded-lg shadow-lg h-full flex flex-col'
              >
                <h3 className='text-xl font-semibold mb-4'>Faculty</h3>
                <p className='text-gray-700 mb-4'>
                  Meet our dedicated faculty members who are committed to
                  providing quality education and support to our students. Learn
                  more about their qualifications and teaching philosophy.
                </p>
                <Link
                  to='/faculty'
                  className='text-blue-500 hover:underline mt-auto'
                >
                  Meet Our Faculty
                </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className='w-full lg:w-1/4 px-4 mb-6'>
              <div
                ref={(el) => (cardRefs.current[2] = el || createRef())}
                className='bg-white p-6 rounded-lg shadow-lg h-full flex flex-col'
              >
                <h3 className='text-xl font-semibold mb-4'>Gallery</h3>
                <p className='text-gray-700 mb-4'>
                  Explore our gallery to see highlights from various events and
                  activities at Springdale Public School. Get a glimpse of our
                  vibrant school life and student achievements.
                </p>
                <Link
                  to='/gallery'
                  className='text-blue-500 hover:underline mt-auto'
                >
                  View Gallery
                </Link>
              </div>
            </div>
            {/* Card 4 */}
            <div className='w-full lg:w-1/4 px-4 mb-6'>
              <div
                ref={(el) => (cardRefs.current[3] = el || createRef())}
                className='bg-white p-6 rounded-lg shadow-lg h-full flex flex-col'
              >
                <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
                <p className='text-gray-700 mb-4'>
                  Get in touch with us for any inquiries or support. We are here
                  to assist you and provide the information you need.
                </p>
                <Link
                  to='/contact-us'
                  className='text-blue-500 hover:underline mt-auto'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_Us;
