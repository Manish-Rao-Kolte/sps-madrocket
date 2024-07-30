import React from "react";
import Hero from "../../../components/Hero";
import Achievements from "../../../components/Achievements";

const Home = () => {
  return (
    <div className='h-full relative'>
      <Hero />
      <Achievements />
    </div>
  );
};
// bg-gradient-to-br from-pink-50 via-red-50 via-30% to-slate-50 to-90%
export default Home;
