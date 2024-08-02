import React, { useRef } from "react";
import { IoIosPaperPlane } from "react-icons/io";
import { BsInfoSquareFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { FaIdCardClip, FaUsers, FaXTwitter } from "react-icons/fa6";
import {
  FaUserGraduate,
  FaMapMarkedAlt,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import LinkItem from "./Link_Item";
import whiteLogo from "../assets/images/logo_text_white.png";

const QuickLinks = () => {
  const quickSectionRef = useRef(null);
  const addressRef = useRef(null);
  const exploreRefs = useRef([]);
  const quickLinkRefs = useRef([]);
  const getInTouchRefs = useRef([]);

  // useEffect(() => {
  //   const handleAnimation = () => {
  //     if (quickSectionRef.current) {
  //       const quickSectionTop =
  //         quickSectionRef.current.getBoundingClientRect().top;
  //       const quickSectionHeight =
  //         quickSectionRef.current.getBoundingClientRect().height;
  //       if (window.innerHeight > quickSectionTop + quickSectionHeight * 0.8) {
  //         const createAnimation = (tl, ref) => {
  //           return tl.from(ref, {
  //             duration: 0.3,
  //             autoAlpha: 0,
  //             xPercent: "-100",
  //             stagger: 0.2,
  //             ease: "power1.out",
  //           });
  //         };

  //         const tl1 = gsap.timeline();
  //         const tl2 = gsap.timeline();
  //         const tl3 = gsap.timeline();

  //         exploreRefs.current.forEach((ref) => {
  //           createAnimation(tl1, ref);
  //         });
  //         quickLinkRefs.current.forEach((ref) => {
  //           createAnimation(tl2, ref);
  //         });
  //         getInTouchRefs.current.forEach((ref) => {
  //           createAnimation(tl3, ref);
  //         });
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleAnimation);

  //   return () => window.removeEventListener("scroll", handleAnimation);
  // }, []);

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
            src={whiteLogo}
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
            ref={(el) => exploreRefs.current.push(el)}
          >
            Explore
          </h1>
          <LinkItem
            icon={<BsInfoSquareFill className='h-full w-auto' />}
            route={"about-us"}
            text='About Us'
            ref={(el) => exploreRefs.current.push(el)}
          />
          <LinkItem
            icon={<ImImages className='h-full w-auto' />}
            route={"gallery"}
            text='Gallery'
            ref={(el) => exploreRefs.current.push(el)}
          />
          <LinkItem
            icon={<FaUsers className='h-full w-auto' />}
            route={"faculty"}
            text='Faculty'
            ref={(el) => exploreRefs.current.push(el)}
          />
        </div>
        {/* Quick links sections */}
        <div className='flex flex-col gap-1'>
          <h1
            className='text-lg lg:text-xl font-bold tracking-widest mb-3'
            ref={(el) => quickLinkRefs.current.push(el)}
          >
            Quick links
          </h1>
          <LinkItem
            icon={<HiAcademicCap className='h-full w-auto' />}
            route={"academics"}
            text='Academics'
            ref={(el) => quickLinkRefs.current.push(el)}
          />
          <LinkItem
            icon={<FaIdCardClip className='h-full w-auto' />}
            route={"admission"}
            text='Admissions'
            ref={(el) => quickLinkRefs.current.push(el)}
          />
          <LinkItem
            icon={<FaUserGraduate className='h-full w-auto' />}
            route={"students"}
            text='Students'
            ref={(el) => quickLinkRefs.current.push(el)}
          />
        </div>
        {/* Get in touch section */}
        <div className='flex flex-col gap-1'>
          <h1
            className='text-lg lg:text-xl font-bold tracking-widest mb-3'
            ref={(el) => getInTouchRefs.current.push(el)}
          >
            Get in touch
          </h1>
          <LinkItem
            icon={<IoIosPaperPlane className='h-full w-auto' />}
            route={"contact-us"}
            text='Contact Us'
            ref={(el) => getInTouchRefs.current.push(el)}
          />
          <LinkItem
            icon={<FaMapMarkedAlt className='h-full w-auto' />}
            text='Maps & Directions'
            ref={(el) => getInTouchRefs.current.push(el)}
          />
          {/* Social media icons */}
          <div
            className='flex gap-1.5 w-full mt-1 px-2'
            ref={(el) => getInTouchRefs.current.push(el)}
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
