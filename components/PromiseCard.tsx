"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { ourpromises } from "../src/app/export";

type PromiseItem = {
  image: string;
  title: string;
  desc: string;
};

const PromiseCard = () => {
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
        {(ourpromises as PromiseItem[]).map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center bg-white p-6 sm:p-8 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.image}
              alt="promise image"
              width={300}
              height={200}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-black text-center">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-center text-gray-600 mt-2">
              {item.desc}
            </p>
            <button className="mt-4 border-2 border-red-200 text-red-400 rounded-full px-6 py-2 text-sm font-semibold uppercase transition-transform hover:scale-105">
              Read more..
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseCard;