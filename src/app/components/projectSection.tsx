"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { projects } from "../export";
import ProjectCard from "../cards/projectCard";

const ProjectSection = () => {
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
      className="w-full flex flex-col items-center justify-center bg-cover bg-center h-max py-5 space-y-8"
    >
      <h1
        data-aos="zoom-in"
        className="text-2xl sm:text-2xl lg:text-4xl md:text-[3xl] text-black text-center font-bold "
      >
        We Are Specialized In Projects
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full  flex flex-wrap  space-y-2  items-center justify-center"
      >
        {projects .map((item, index) => (
          <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-[45%] h-[270px]  flex items-center justify-center width90" key={item.title}>
          <ProjectCard imageurl={item.image} title={item.title} description={item.about} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;