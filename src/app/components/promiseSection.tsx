"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { ourpromises } from "../export";
import PromiseCard from "../cards/promisecard";

const PromiseSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="promises"
      className="w-full flex flex-col items-center justify-center gap-10 bg-cover bg-center py-20 px-6 sm:px-10 lg:px-20"
    >
      <h1
        data-aos="zoom-in"
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black pb-12"
      >
        Our Promise as a contractor is to build your project
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {ourpromises.map((item, index) => (
          <PromiseCard imageurl={item.image} title={item.title} description={item.description} key={item.title}/>
        ))}
      </div>
    </section>
  );
};

export default PromiseSection;