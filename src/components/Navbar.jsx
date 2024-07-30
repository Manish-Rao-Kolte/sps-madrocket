import { useState, useEffect, useRef } from "preact/hooks";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import gsap from "gsap";
import { createRef } from "preact";

const Navbar = () => {
  const navLinkRefs = useRef([]);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    // GSAP timeline for navlinks
    const tl = gsap.timeline();
    navLinkRefs.current?.forEach((ref) => {
      tl.fromTo(
        ref,
        {
          y: -50,
          x: -50,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.15,
          stagger: 2,
          ease: "power2.out",
        }
      );
    });
  }, [menuClicked]);

  return (
    <header className='min-h-[8vh] w-full bg-slate-100 shadow-sm shadow-slate-50'>
      <nav
        className='flex items-center w-full justify-between p-6 py-2 lg:py-2 lg:px-8'
        aria-label='Global'
      >
        {/* Logo */}
        <div className='flex lg:flex-1'>
          <NavLink to={"/"} className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              className='h-16 w-auto'
              src='images/logo.png'
              alt='Springdale Public School'
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 hover:bg-slate-200'
            onClick={() => setMenuClicked(!menuClicked)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden lg:flex lg:gap-x-4 xl:gap-x-8'>
          {[
            "about-us",
            "academics",
            "admission",
            "faculty",
            "students",
            "gallery",
            "contact-us",
          ].map((route, index) => (
            <NavLink
              ref={(el) => (navLinkRefs.current[index] = el || createRef())}
              to={route}
              key={route}
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-lg ${
                  isActive ? "bg-sky-200" : ""
                }`
              }
              style={({ isActive }) => isActive && { scale: "1.25" }}
            >
              {route.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </NavLink>
          ))}
        </div>

        {/* Login Link */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <NavLink
            to=''
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Log in <span aria-hidden='true'>&rarr;</span>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <Drawer menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </header>
  );
};

export default Navbar;
