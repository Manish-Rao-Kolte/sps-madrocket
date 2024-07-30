import LinkItem from "./Link_Item";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "preact/hooks";
import gsap from "gsap";
import { createRef } from "react";
import { IoIosPaperPlane } from "react-icons/io";
import { BsInfoSquareFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi2";
import { FaIdCardClip } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const QuickLinks = () => {
  const quickSectionRef = useRef(null);
  const addressRef = useRef(null);
  const exploreRefs = useRef([]);
  const quickLinkRefs = useRef([]);
  const getInTouchRefs = useRef([]);

  useGSAP(
    () => {
      const scrollTrigger = (triggerRef) => {
        return {
          trigger: triggerRef.current,
          scrub: 2,
          // markers: true,
          scroller: "body",
          start: `30% 90%`,
          end: `50% 90%`,
        };
      };
      const createAnimation = (tl, ref) => {
        return tl.from(ref, {
          duration: 1.5,
          autoAlpha: 0,
          xPercent: "-100",
          stagger: 0.8,
          ease: "power1",
        });
      };
      const tl1 = gsap.timeline({
        scrollTrigger: scrollTrigger(exploreRefs),
      });
      const tl2 = gsap.timeline({
        scrollTrigger: scrollTrigger(quickLinkRefs),
      });
      const tl3 = gsap.timeline({
        scrollTrigger: scrollTrigger(getInTouchRefs),
      });
      exploreRefs.current?.forEach((ref, i) => {
        createAnimation(tl1, ref);
      });
      quickLinkRefs.current?.forEach((ref, i) => {
        createAnimation(tl2, ref);
      });
      getInTouchRefs.current?.forEach((ref, i) => {
        createAnimation(tl3, ref);
      });
    },
    { scope: quickSectionRef.current }
  );
  return (
    <div
      className='flex flex-col lg:flex-row justify-start gap-2 lg:gap-6 px-3 lg:px-20 py-2 lg:py-10 text-white max-w-[100%] min-h-[100%] overflow-hidden'
      ref={quickSectionRef}
    >
      {/* School address contact details */}
      <div
        className='flex flex-col gap-1 justify-start items-center w-[90%] lg:w-[25%] px-2 lg:px-8 text-sm'
        ref={addressRef}
      >
        <div className='h-14 lg:h-24 w-auto overflow-hidden p-1'>
          <img
            src='images/logo_text_white.png'
            alt='Springdale Public School'
            className='object-contain w-auto h-[100%]'
          />
        </div>
        <p className='break-words whitespace-pre-wrap text-wrap'>
          Springdale Public School
        </p>
        <p className='break-words whitespace-pre-wrap text-wrap'>
          Springdale Public School, 123 Education Lane, Cityville, State, ZIP
          Code
        </p>
        <p className='break-words whitespace-pre-wrap text-wrap'>
          +1 (123) 456-7890
        </p>
        <p className='break-words whitespace-pre-wrap text-wrap'>
          info@springdale.edu
        </p>
      </div>
      <div className='min-h-[100%] w-0.5 bg-white'></div>
      <div className='flex w-[100%] lg:w-[65%] justify-evenly items-center'>
        {/* Explore section */}
        <div className='flex flex-col gap-1'>
          <h1
            className='text-lg lg:text-xl font-bold tracking-widest mb-3'
            ref={(el) => exploreRefs.current.push(el || createRef())}
          >
            Explore
          </h1>
          <LinkItem
            icon={<BsInfoSquareFill className='h-full w-auto' />}
            text='About Us'
            ref={exploreRefs}
          />
          <LinkItem
            icon={<ImImages className='h-full w-auto' />}
            text='Gallery'
            ref={exploreRefs}
          />
          <LinkItem
            icon={<FaUsers className='h-full w-auto' />}
            text='Faculty'
            ref={exploreRefs}
          />
        </div>
        {/* Quick links sections */}
        <div className='flex flex-col gap-1'>
          <h1
            className='text-lg lg:text-xl font-bold tracking-widest mb-3'
            ref={(el) => quickLinkRefs.current.push(el || createRef())}
          >
            Quick links
          </h1>
          <LinkItem
            icon={<HiAcademicCap className='h-full w-auto' />}
            text='Academics'
            ref={quickLinkRefs}
          />
          <LinkItem
            icon={<FaIdCardClip className='h-full w-auto' />}
            text='Admissions'
            ref={quickLinkRefs}
          />
          <LinkItem
            icon={<FaUserGraduate className='h-full w-auto' />}
            text='Students'
            ref={quickLinkRefs}
          />
        </div>
        {/* Get in touch section */}
        <div className='flex flex-col gap-1'>
          <h1
            className='text-lg lg:text-xl font-bold tracking-widest mb-3'
            ref={(el) => getInTouchRefs.current.push(el || createRef())}
          >
            Get in touch
          </h1>
          <LinkItem
            icon={<IoIosPaperPlane className='h-full w-auto' />}
            text='Contact Us'
            ref={getInTouchRefs}
          />
          <LinkItem
            icon={<FaMapMarkedAlt className='h-full w-auto' />}
            text='Maps & Directions'
            ref={getInTouchRefs}
          />
          {/* Social media icons */}
          <div
            className='flex gap-1.5 w-full mt-1 px-2'
            ref={(el) => getInTouchRefs.current.push(el || createRef())}
          >
            <div className='h-8 w-8 p-1 flex justify-center items-center text-[#67bbff] border rounded-full hover:bg-sky-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <FaXTwitter />
            </div>
            <div className='h-8 w-8 p-1 flex justify-center items-center text-[#67bbff] border rounded-full hover:bg-sky-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='h-8 w-8 p-1 flex justify-center items-center text-[#67bbff] border rounded-full hover:bg-sky-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <FaFacebookF />
            </div>
            <div className='h-8 w-8 p-1 flex justify-center items-center text-[#67bbff] border rounded-full hover:bg-sky-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-0 lg:hidden'>
        &copy; {new Date().getFullYear()} Springdale Public School. All rights
        reserved.
      </div>
      <div className='absolute bottom-1 text-center w-full left-0 lg:left-[50%] lg:-translate-x-[50%]'>
        &copy; {new Date().getFullYear()} Springdale Public School. All rights
        reserved.
      </div>
    </div>
  );
};

export default QuickLinks;
