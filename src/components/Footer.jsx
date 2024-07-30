import React from "react";
import QuickLinks from "./Quick_Links";
import { useRef } from "preact/hooks";

const Footer = () => {
  const footerRef = useRef(null);
  return (
    <div
      className='w-full h-fit lg:max-h-[35vh] text-center py-2 lg:py-4 px-2 lg:px-16 backdrop-blur-md bg-slate-700'
      ref={footerRef}
    >
      <QuickLinks />
    </div>
  );
};

export default Footer;
