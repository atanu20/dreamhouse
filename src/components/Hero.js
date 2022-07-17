import React from 'react';
import { hero } from '../data';
import Stats from './Stats';
const Hero = () => {
  return (
    <section className="h-[100vh] w-full bg-hero  bg-right lg:bg-center bg-cover bg-no-repeat pt-[225px] pb-[254px] ">
      <div className="container mx-auto text-center   flex flex-col gap-5">
        <h1 className="text-2xl font-semibold  text-slate-100 lg:text-4xl ">
          {hero.title}
        </h1>
        <h2 className="text-slate-100 md:max-w-[70%] mx-auto text-center">
          {hero.subtitle}
        </h2>
        <div>
          <button className="py-2 px-[40px] bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.8)]  rounded-md">
            {hero.buttonText}
          </button>
        </div>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
