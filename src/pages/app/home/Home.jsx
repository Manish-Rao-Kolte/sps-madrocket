import React from "react";
import Hero from "../../../components/Hero";
import Achievements from "../../../components/Achievements";
import UpcomingEvents from "../../../components/Upcoming-Events";
import Testimonials from "../../../components/Testimonials";
import { useEffect } from "preact/hooks";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='h-full relative'>
      <Hero />
      <Achievements />
      <UpcomingEvents />
      <Testimonials />
    </div>
  );
};
// bg-gradient-to-br from-pink-50 via-red-50 via-30% to-slate-50 to-90%
export default Home;
