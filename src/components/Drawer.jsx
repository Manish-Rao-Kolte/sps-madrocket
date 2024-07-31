import React from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useRef } from "preact/hooks";
import { navLinks } from "../data";

const Drawer = ({ menuClicked, setMenuClicked }) => {
  const drawerRef = useRef(null);
  useEffect(() => {
    // GSAP animation for the drawer
    gsap.fromTo(
      drawerRef.current,
      {
        width: menuClicked ? "100%" : "0%",
      },
      {
        width: menuClicked ? "0%" : "100%",
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  }, [menuClicked]);

  return (
    <div ref={drawerRef}>
      {/* Background backdrop */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${
          menuClicked ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuClicked(false)}
      ></div>

      {/* Drawer menu */}
      <div
        className={`drawer fixed top-0 right-0 z-50 h-full w-[60%] sm:w-[50%] md:w-[40%] bg-white shadow-lg transition-transform transform ${
          menuClicked ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='flex items-center justify-between p-6'>
          <NavLink
            to={"/"}
            className='-m-1.5 p-1.5'
            onClick={() => setMenuClicked(false)}
          >
            <span className='sr-only'>Springdale Public School</span>
            <img
              className='h-16 w-auto'
              src='images/logo.png'
              alt='Springdale Public School'
            />
          </NavLink>
          <button
            type='button'
            className='p-2.5 text-gray-700 hover:bg-slate-100 rounded-full'
            onClick={() => setMenuClicked(false)}
          >
            <span className='sr-only'>Close menu</span>
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='mt-6 space-y-2 px-6'>
          {navLinks?.map((route, index) => (
            <NavLink
              to={route}
              key={route}
              className='block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              onClick={() => setMenuClicked(false)}
            >
              {route.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </NavLink>
          ))}
        </div>
        <div className='px-6 py-6'>
          <NavLink
            to={""}
            className='block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
            onClick={() => setMenuClicked(false)}
          >
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
