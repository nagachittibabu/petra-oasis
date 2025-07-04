"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { completedprojects } from "../export";
import ProjectCard from "../cards/projectCard";

const CompletedProjectSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center bg-cover bg-center py-20 px-6 sm:px-10 lg:px-20"
    >
      <h1
        data-aos="zoom-in"
        className="text-2xl sm:text-3xl lg:text-4xl text-black text-center font-bold pb-10"
      >
      Completed Projects
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {completedprojects .map((item) => (
          <ProjectCard imageurl={item.image} title={item.title} description={item.about} key={item.title}/>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjectSection;