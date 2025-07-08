'use client';

import React from 'react';
import Image from 'next/image';
import { completedProjects } from '../export';

const CompletedProjects: React.FC = () => {
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
        {completedprojects .map((item, index) => (
          <ProjectCard imageurl={item.image} title={item.title} description={item.about} key={item.title}/>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjects;