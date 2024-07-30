import React from "react";
import { NavLink } from "react-router-dom";

const Drawer = ({ menuClicked, setMenuClicked }) => {
  return (
    <div
      className={`lg:hidden overflow-hidden ${
        menuClicked ? "block" : "hidden"
      }`}
      role='dialog'
      aria-modal='true'
    >
      {/* Background backdrop, show/hide based on slide-over state. */}
      <div className='fixed inset-0 z-50'></div>
      <div
        className={`absolute right-0 top-0 z-50 h-full bg-white sm:max-w-sm px-6 py-6 sm:ring-1 sm:ring-gray-900/10 ${
          menuClicked ? "w-full" : "w-0"
        }`}
      >
        <div className='flex items-center justify-between'>
          <NavLink to={"/"} className='-m-1.5 p-1.5'>
            <span className='sr-only'>Springdale Public School</span>
            <img
              className='h-16 w-auto'
              src='src/assets/logo.png'
              alt='Springdale Public School'
            />
          </NavLink>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-700 hover:bg-slate-100 rounded-full'
            onClick={() => setMenuClicked(false)}
          >
            <span className='sr-only'>Close menu</span>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <div className='space-y-2 py-6'>
              <NavLink
                to={"/about-us"}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                onClick={() => setMenuClicked(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to={"/academics"}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                onClick={() => setMenuClicked(false)}
              >
                Academics
              </NavLink>
              <NavLink
                to={"/admission"}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                onClick={() => setMenuClicked(false)}
              >
                Admission
              </NavLink>
              <NavLink
                to={"/faculty"}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                onClick={() => setMenuClicked(false)}
              >
                Faculty
              </NavLink>
              <NavLink
                to={"/students"}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                onClick={() => setMenuClicked(false)}
              >
                Students
              </NavLink>
              <NavLink
                to={"/gallery"}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                onClick={() => setMenuClicked(false)}
              >
                Gallery
              </NavLink>
              <NavLink
                to={"/contact-us"}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                onClick={() => setMenuClicked(false)}
              >
                Contact Us
              </NavLink>
            </div>
            <div className='py-6'>
              <NavLink
                to={""}
                className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
