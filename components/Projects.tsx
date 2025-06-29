// "use client";

// import React, { useEffect } from "react";
// import Aos from "aos";
// import Image from "next/image";
// import { projects } from "../src/app/export";

// const Projects = () => {
//     useEffect(() => {
//         Aos.init({
//             offset: 200,
//             duration: 500,
//             easing: 'ease-in-sine'
//         });
//     }, []);

//     return (

//         <section id="promises" className="w-full flex-col justify-center items-center gap-10 bg-cover h-fit py-20 lg:px-20 px-10 bg-center">
//             <h1 data-aos="zoom-in" className="text-4xl text-black text-center font-bold pb-6">We Are Specialized In Projects</h1>

//             <div data-aos="zoom-in" data-aos-delay="200" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6">
//                 {projects.map((item, index) => (
//                     <div key={index} className="flex flex-wrap flex-col justify-center items-center gap-4 bg-white p-8 rounded-xl shadow-lg p-6 w-80 h-full space-y-2  transform transition-transform duration-300 hover:scale-105 cursor-pointer">
//                         <Image src={item.image} alt="target" width={300} height={400} className="w-24 h-24 rounded-lg transform hover:scale-100 transition-transform duration-300 cursor-pointer"
//                         />
//                         <h1 className="text-[20px] text-black text-center font-semibold">{item.title}</h1>
//                         <p className="text-center">{item.about}</p>
//                     </div>
//                 ))}
//             </div>

//         </section>

//     )
// }
// export default Projects;

"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { projects } from "../src/app/export";

// Define type for a project
type ProjectItem = {
  image: string;
  title: string;
  about: string;
};

const Projects = () => {
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
        We Are Specialized In Projects
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {(projects as ProjectItem[]).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={96}
              height={96}
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-black text-center mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-center text-gray-600">{item.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;