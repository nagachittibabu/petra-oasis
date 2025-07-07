"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { projects } from "../export";
import ProjectCard from "../cards/projectCard";
import Image from "next/image";

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
      className="w-full flex flex-col items-center justify-center bg-cover bg-center h-max py-5 space-y-8 b"
    >

      <div className="w-[90%] flex flex-col items-center justify-center bg-cover bg-center h-max py-5 space-y-8 rounded-lg shadow-lg bg-white">
      <div className="w-full h-[590px] xl:h-[350px] lg:h-[350px] sm:h-[350px] flex flex-col
      xl:flex-row lg:flex-row md:flex-row sm:flex-row bg-gray-50 jusify-center items-center">
        <div className="w-[90%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[40%] h-[90%] flex justify-center items-center">
            <div className="w-[80%] h-[80%] relative rounded-lg overflow-hidden">
              <Image src="/images/construction-banner.png" alt="customers" fill />
            </div>
        </div>
        <div className="w-[90%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[60%]  h-[90%] flex flex-col justify-evenly items-center  ">
          <h1 className="text-[16px] xl:text-[26px] lg:text-[25px] md:text-[23px] sm:text-[20px] font-bold text-center"> We are working for thousands satisfied customers</h1>
          <div className="w-[90%]">
            <p className="text-[10px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] leading-[25px] xl:leading-[25px] lg:leading-[24px] md:leading-[23px] sm:leading-[22px]">Customer satisfaction is a vital indicator of how well a companys products, services, and overall experience align with customer expectations. Its not merely about making customers happy—a key driver of business success. High satisfaction levels help retain customers, reduce churn, and foster brand loyalty, while also boosting revenue and profitability. Ultimately, effective customer service isnt based on assumptions; its about delivering what the customer truly values and experiences.</p>
          </div>
        </div>
      </div>

        <h1
          data-aos="zoom-in"
          className="text-2xl sm:text-2xl lg:text-4xl md:text-[3xl] text-black text-center font-bold "
        >
          We Are Specialized In Projects
        </h1>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-full  flex flex-wrap  space-y-8  items-center justify-center"
        >
          {projects.map((item) => (
            <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-[45%] h-[270px]  flex items-center justify-center width90" key={item.title}>
              <ProjectCard imageurl={item.image} title={item.title} description={item.about} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;