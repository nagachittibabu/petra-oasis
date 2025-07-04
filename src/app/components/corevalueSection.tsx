"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { corevalues } from "../export";
import CoreValueCard from "../cards/coreValueCard";


const CoreValueSection= () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        });
    }, []);

    return (
        <section
            id="core-values"
            className="w-full flex flex-col items-center justify-center bg-cover bg-center py-20 px-6 sm:px-10 lg:px-20"
        >
            <h1
                data-aos="zoom-in"
                className="text-2xl sm:text-2xl lg:text-4xl md:text-[3xl] font-bold text-black text-center pb-12 "
            >
                Company Core Values
            </h1>

            <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl core_section"
            >
                {corevalues .map((item) => (
                    <CoreValueCard imageurl={item.image} title={item.title} description={item.about} key={item.title}/>
                ))}
            </div>
        </section>
    );
};

export default CoreValueSection;