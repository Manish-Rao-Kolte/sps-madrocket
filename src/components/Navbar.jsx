import { useState, useEffect, useRef } from "preact/hooks";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import gsap from "gsap";
import { navLinks } from "../data";
import mainLogo from "../assets/images/logo.png";

const Navbar = () => {
  const navRef = useRef(null);
  const navLinksRef = useRef([]);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(navLinksRef.current, {
          scale: 1.05,
          duration: 0.1,
          margin: "0 1",
          // ease: "power4.in",
          // stagger: 0.1,
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0)",
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(navLinksRef.current, {
          scale: 1,
          duration: 0.1,
          margin: "0 0",
          // ease: "power1.out",
          // stagger: 0.1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className='fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm'
    >
      <nav
        className='flex items-center justify-between px-6 py-1 lg:py-2 lg:px-8'
        aria-label='Global'
      >
        {/* Logo */}
        <div className='flex lg:flex-1'>
          <NavLink to={"/"} className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              className='h-12 lg:h-16 w-auto'
              src={mainLogo}
              alt='Springdale Public School'
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center p-2.5 text-gray-700 hover:bg-slate-200 rounded-full'
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
        <div className='hidden lg:flex lg:gap-x-6 xl:gap-x-8'>
          {navLinks?.map((route, index) => (
            <NavLink
              to={route}
              key={route}
              ref={(el) => (navLinksRef.current[index] = el)}
              className={({ isActive }) =>
                `text-lg font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-sky-200" : "bg-white bg-opacity-10"
                }`
              }
            >
              {route.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </NavLink>
          ))}
        </div>

        {/* Login Link */}
        {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `text-lg font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-lg transition-all duration-300 bg-white bg-opacity-10`
            }
          >
            Log in <span aria-hidden='true'>&rarr;</span>
          </NavLink>
        </div> */}
      </nav>

      {/* Mobile Menu Drawer */}
      <Drawer menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </header>
  );
};

export default Navbar;
