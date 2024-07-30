import React from "react";
import Navbar from "../../../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "preact/hooks";

gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  return (
    <main className='min-h-screen flex flex-col bg-[#fcfbfb] scroll-smooth'>
      <Navbar />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
