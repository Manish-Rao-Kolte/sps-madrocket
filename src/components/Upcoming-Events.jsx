import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CarouselComponent from "./Carousel";

const events = [
  {
    date: "2024-08-01",
    title: "School Orientation",
    schedule: "August 1st, 9:00 AM - 12:00 PM",
    venue: "Main auditorium, ground floor",
    details: [
      {
        heading: "Welcome Address",
        content:
          "Join us for a warm welcome from our principal and staff, who will introduce the school's mission, values, and key programs.",
      },
      {
        heading: "Introduction to Faculty",
        content:
          "Meet your child's teachers and learn about their teaching philosophies and the curriculum for the upcoming year.",
      },
      {
        heading: "Campus Tour",
        content:
          "A guided tour of the campus will be provided, highlighting key areas such as classrooms, the library, and recreational facilities.",
      },
      {
        heading: "Q&A Session",
        content:
          "Participate in a Q&A session with school administrators to address any questions or concerns you may have about the school year.",
      },
    ],
    image: "https://via.placeholder.com/300",
  },
  {
    date: "2024-08-15",
    title: "First Day of Classes",
    schedule: "August 15th, 8:00 AM - 3:00 PM",
    venue: "Classrooms throughout the campus",
    details: [
      {
        heading: "Day’s Schedule",
        content:
          "Start the first day with a brief orientation session, followed by a full day of classes. Be sure to check your assigned class schedule and room numbers.",
      },
      {
        heading: "Meet and Greet",
        content:
          "Participate in a meet and greet session with your teachers and classmates to set the tone for a collaborative and engaging year ahead.",
      },
      {
        heading: "Campus Facilities",
        content:
          "Familiarize yourself with important campus facilities including the cafeteria, health office, and recreational areas.",
      },
      {
        heading: "Student Support",
        content:
          "Learn about the various student support services available, including counseling, tutoring, and extracurricular activities.",
      },
    ],
    image: "https://via.placeholder.com/300",
  },
  {
    date: "2024-09-10",
    title: "Parent-Teacher Conference",
    schedule: "September 10th, 4:00 PM - 7:00 PM",
    venue: "Conference rooms, second floor",
    details: [
      {
        heading: "Conference Overview",
        content:
          "Discuss your child's academic progress, behavior, and goals with their teachers. Each meeting is scheduled in advance to ensure adequate time for discussion.",
      },
      {
        heading: "Appointment Schedule",
        content:
          "Check your email for your scheduled appointment time. Be punctual to ensure you meet with all the teachers you need to.",
      },
      {
        heading: "Campus Navigation",
        content:
          "Maps and directions will be provided to help you locate the conference rooms and other key areas of the school.",
      },
      {
        heading: "Additional Resources",
        content:
          "Information on additional resources such as academic support, extracurricular activities, and parent involvement opportunities will be available.",
      },
    ],
    image: "https://via.placeholder.com/300",
  },
];

const UpcomingEvents = () => {
  const eventsRef = useRef(null);
  const eventRefs = useRef([]);
  const detailsRef = useRef(null);
  const closeBtnRef = useRef(null);
  const detailsBgRef = useRef(null);
  const carouselRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: eventsRef.current,
        start: "top 50%",
        end: "45% 50%",
        scrub: 2,
        // markers: true,
      },
    });
    eventRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "a"
      );
    });

    tl.fromTo(
      carouselRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "a"
    );
  });

  const handleClose = () => {
    if (detailsRef.current) {
      gsap.to([detailsRef.current, detailsBgRef.current], {
        opacity: 0,
        y: 50,
        duration: 1,
        onComplete: () => setExpandedIndex(null),
      });
    } else {
      setExpandedIndex(null);
    }
  };

  useEffect(() => {
    if (expandedIndex !== null) {
      gsap.fromTo(
        [detailsRef.current, detailsBgRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [expandedIndex]);

  return (
    <div
      className='relative flex gap-2 bg-gradient-to-br from-gray-50 to-gray-100 px-11 py-4 lg:gap-4 rounded-lg shadow-lg min-h-screen'
      ref={eventsRef}
    >
      <div className='flex flex-col w-full lg:w-[50%]'>
        <h2 className='text-3xl font-bold mb-4 text-teal-800'>
          Upcoming Events
        </h2>
        <div className='relative flex-1 flex flex-wrap flex-col gap-4'>
          {events.map((event, index) => (
            <div
              key={event.schedule}
              ref={(el) => (eventRefs.current[index] = el)}
              onClick={() => setExpandedIndex(index)}
              className={`relative bg-white rounded-lg shadow-lg transform transition-transform cursor-pointer overflow-hidden flex-grow`}
            >
              <div className='relative z-10 p-6'>
                <p className='text-xl font-semibold'>{event.title}</p>
                <p className='text-gray-500'>{event.schedule}</p>
                <p className='text-gray-500'>{event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='hidden lg:flex lg:flex-1 flex-col rounded-lg'>
        <h2 className='text-2xl font-bold mb-4 opacity-0'>Upcoming Events</h2>
        <div className='rounded-lg overflow-hidden' ref={carouselRef}>
          <CarouselComponent />
        </div>
      </div>
      <div
        className={`${
          expandedIndex !== null ? "absolute" : "hidden"
        } inset-0 h-full w-full px-4 py-6`}
      >
        <div
          className='relative flex flex-col gap-1 w-full h-full bg-slate-900 bg-opacity-80 rounded-lg'
          ref={detailsBgRef}
        >
          <div
            className='absolute inset-0 flex flex-col gap-1 w-full h-full rounded-lg justify-center items-center p-6'
            ref={detailsRef}
          >
            <span
              className='flex opacity-0 justify-center items-center h-7 w-7 p-1 text-base lg:text-xl font-semibold rounded-full bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
              onClick={handleClose}
              ref={closeBtnRef}
            >
              X
            </span>
            <div className='w-full h-full flex gap-2 flex-col lg:flex-row shadow-lg rounded-lg px-4 lg:p-6 overflow-auto'>
              {events[expandedIndex]?.details?.map((detail, index) => {
                return (
                  <div
                    className='basis-1/2 bg-slate-200 p-4 rounded-lg shadow-sm h-full hover:scale-105'
                    key={index}
                  >
                    <h3 className='text-xl font-semibold text-gray-800'>
                      {detail.heading}
                    </h3>
                    <p className='text-gray-600'>{detail.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <span
            className='absolute right-2 top-2 flex justify-center items-center h-6 w-6 p-1 text-base lg:text-xl font-semibold rounded-full bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            onClick={handleClose}
            ref={closeBtnRef}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
