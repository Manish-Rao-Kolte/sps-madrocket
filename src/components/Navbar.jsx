import { useState } from "preact/hooks";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <header className='min-h-[8vh] w-full bg-slate-50 shadow-sm shadow-slate-50'>
      <nav
        className='flex items-center w-full justify-between p-6 py-2 lg:py-2 lg:px-8'
        aria-label='Global'
      >
        {/* logo image here */}
        <div className='flex lg:flex-1'>
          <NavLink to={"/"} className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              className='h-16 w-auto'
              src='src/assets/logo.png'
              alt='Springdale Public School'
            />
          </NavLink>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 hover:bg-slate-100'
            onClick={() => {
              setMenuClicked(true);
            }}
          >
            <span className='sr-only'>Open main menu</span>
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
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <NavLink
            to={"about-us"}
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-md ${
                isActive && "bg-sky-100 scale-125"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"academics"}
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-md ${
                isActive && "bg-sky-100 scale-125"
              }`
            }
          >
            Academics
          </NavLink>
          <NavLink
            to={"admission"}
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-md ${
                isActive && "bg-sky-100 scale-125"
              }`
            }
          >
            Admission
          </NavLink>
          <NavLink
            to={"faculty"}
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-md ${
                isActive && "bg-sky-100 scale-125"
              }`
            }
          >
            Faculty
          </NavLink>
          <NavLink
            to={"students"}
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-md ${
                isActive && "bg-sky-100 scale-125"
              }`
            }
          >
            Students
          </NavLink>
          <NavLink
            to={"gallery"}
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-md ${
                isActive && "bg-sky-100 scale-125"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to={"contact-us"}
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 text-gray-900 py-0.5 px-2 rounded-md ${
                isActive && "bg-sky-100 scale-125"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <NavLink
            to={""}
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Log in <span aria-hidden='true'>&rarr;</span>
          </NavLink>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <Drawer menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </header>
  );
};

export default Navbar;
