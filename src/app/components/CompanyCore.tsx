// "use client";

// import React, { useEffect } from "react";
// import Aos from "aos";
// import Image from "next/image";
// import { corevalues } from "../src/app/export";

// const CoreValues = () => {
//     useEffect(() => {
//         Aos.init({
//             offset: 200,
//             duration: 500,
//             easing: 'ease-in-sine'
//         });
//     }, []);

//     return (

//         <section id="promises" className="w-full flex-col justify-center items-center gap-10 bg-cover h-fit py-20 lg:px-20 px-10 bg-center">
//             <h1 data-aos="zoom-in" className="text-4xl text-black text-center font-bold pb-12">Company Core Values</h1>

//             <div data-aos="zoom-in" data-aos-delay="200" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6">
//                 {corevalues.map((item, index) => (
//                     <div key={index} className="flex flex-col justify-center items-center gap-4 bg-white p-8 rounded-xl shadow-lg p-6 w-80 h-full space-y-2  transform transition-transform duration-300 hover:scale-105 cursor-pointer">
//                         <Image src={item.image} alt="promise image" width={300} height={400} className="w-24 h-24 rounded-lg transform hover:scale-100 transition-transform duration-300 cursor-pointer"
//                         />
//                         <h1 className="text-[20px] text-black text-center font-semibold">{item.title}</h1>
//                         <p className="text-center">{item.about}</p>
//                         <ul className=" text-sm space-y-2">
//                            <li>{item.points}</li>
//                         </ul>
//                     </div>
//                 ))}
//             </div>

//         </section>

//     )
// }
// export default CoreValues;

"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { corevalues } from "../export";

type CoreValueItem = {
    image: string;
    title: string;
    about: string;
    points: string[];
};

const CoreValues = () => {
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
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center pb-12"
            >
                Company Core Values
            </h1>

            <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
            >
                {(corevalues as CoreValueItem[]).map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-transform duration-300 hover:scale-105"
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

                        <p className="text-center text-sm text-gray-600 mb-4">{item.about}</p>

                        {item.points && item.points.length > 0 && (
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 text-left">
                                {item.points.map((point: string, idx: number) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreValues;