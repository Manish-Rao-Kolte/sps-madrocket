import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createRef } from "preact";

const Achievements = () => {
  const achievmentRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const dataRef = useRef(null);
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

  useGSAP(
    () => {
      textRefs.current?.forEach((ref, i) => {
        gsap.from(ref, {
          yPercent: "100",
          opacity: 0,
          duration: 2,
          ease: "power1",
          scrollTrigger: {
            trigger: imageRefs.current[i],
            // pin: true,
            scrub: 2,
            scroller: "body",
            start: `5% 50%`,
            end: `30% 50%`,
          },
        });
      });

      gsap.to(dataRef.current, {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
          trigger: dataRef.current,
          // markers: true,
          scrub: 2,
          start: "30% center",
          end: "50% center",
        },
      });
    },
    { scope: achievmentRef.current }
  );

  return (
    <div
      className='flex flex-wrap flex-col gap-2 justify-center lg:flex-row bg-slate-200 bg-blend-hard-light w-full lg:h-[100vh] p-4 overflow-hidden'
      ref={achievmentRef}
    >
      {data.map((image, index) => (
        <div
          className='flex-1 lg:basis-1/2 relative overflow-hidden h-[50%] lg:max-w-[48%] brightness-90 rounded-md bg-slate-800'
          key={index}
        >
          <img
            src={image.src}
            alt={image.alt}
            className='block w-full h-full object-cover'
            ref={(el) => (imageRefs.current[index] = el || createRef())}
          />
          <p
            className='absolute h-[40%] font-semibold p-2 bottom-0 text-center text-slate-800 bg-white bg-opacity-75 overflow-hidden text-ellipsis backdrop-blur-lg '
            ref={(el) => (textRefs.current[index] = el || createRef())}
          >
            {image.text}
          </p>
        </div>
      ))}

      <div className='flex-1 lg:basis-1/2 overflow-hidden h-[50%] lg:max-w-[48%] rounded-md p-2 border-1 border-slate-400'>
        <p
          className='font-semibold h-full w-full flex justify-center items-center p-2 lg:text-2xl text-justify font-serif text-slate-700'
          ref={dataRef}
        >
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
