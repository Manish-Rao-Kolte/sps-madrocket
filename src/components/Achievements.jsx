import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const data = [
  {
    src: "https://img.freepik.com/free-photo/young-adult-with-down-syndrome-graduation-surrounded-by-proud-family-friends-marking-significant-academic-achievement_73899-27521.jpg?uid=R119428408&ga=GA1.1.1433261757.1721969497&semt=ais_user",
    alt: "Academic Excellence",
    text: [
      "Congratulations to our students who achieved top ranks in the National Mathematics Olympiad!",
      "Jane Doe and John Smith secured first place in their respective categories.",
    ],
  },
  {
    src: "https://img.freepik.com/free-photo/football-trainer-teaching-his-pupils_23-2149707968.jpg?uid=R119428408&ga=GA1.1.1433261757.1721969497&semt=ais_user",
    alt: "Sports Victory",
    text: [
      "Our soccer team won the regional championship last weekend!",
      "The final match saw an impressive 3-1 victory against our local rivals.",
    ],
  },
  {
    src: "https://img.freepik.com/free-photo/blurred-mother-daughter-painting-easter-eggs-table_23-2148066311.jpg?uid=R119428408&ga=GA1.1.1433261757.1721969497&semt=ais_user",
    alt: "Art Competition",
    text: [
      "Emily Johnson, a talented artist from Grade 10, won first place in the statewide Art and Design competition.",
      "Her stunning painting titled “Harmony in Nature” was a standout!",
    ],
  },
];

const Achievements = () => {
  const achievmentRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const dataRef = useRef(null);

  useEffect(() => {
    // Animation for text elements
    textRefs.current?.forEach((ref, i) => {
      gsap.from(ref, {
        yPercent: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRefs.current[i],
          start: "20% 80%",
          end: "center 30%",
          scrub: true,
          // markers: true,
        },
      });
    });

    // Animation for background text
    gsap.to(dataRef.current, {
      backgroundPositionX: "0%",
      stagger: 0.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: dataRef.current,
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className='relative flex flex-wrap  flex-col gap-4 justify-center lg:flex-row bg-gradient-to-r from-gray-100 to-gray-300 p-4 overflow-hidden'
      ref={achievmentRef}
    >
      <h1 className='hidden lg:flex overflow-hidden basis-1/4 items-end whitespace-pre-wrap text-5xl break-all font-bold text-teal-800 text-center -rotate-90'>
        Our Achievements
      </h1>
      {data.map((image, index) => (
        <div
          className='relative overflow-hidden h-[50vh] lg:max-w-[48%] rounded-lg shadow-lg border border-gray-300'
          key={index}
        >
          <img
            src={image.src}
            alt={image.alt}
            className='w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110'
            ref={(el) => (imageRefs.current[index] = el)}
          />
          <div
            className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white bg-slate-700 bg-opacity-45 p-4 text-center backdrop-blur-md'
            ref={(el) => (textRefs.current[index] = el)}
          >
            <p className='text-lg font-semibold'>{image.text.join(" ")}</p>
          </div>
        </div>
      ))}

      <div className='flex-1 lg:basis-1/2 p-4 border border-gray-300 rounded-lg shadow-lg'>
        <p className='font-serif text-xl text-gray-700' ref={dataRef}>
          A dream becomes a goal when action is taken toward its achievement.
          Happiness lies in the joy of achievement and the thrill of creative
          effort. Don't give up, no matter how hard it is. Things are going to
          be tough down the road, but the more work you put in, the more
          achievement you're going to get out of it.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
