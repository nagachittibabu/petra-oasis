"use client";

import React from "react";
import Image from "../../../node_modules/next/image";
import { contact } from "@/app/export";


const ContactPage = () => {

  return (
    <section
      id="contact"
      className="w-full bg-cover bg-center  px-6 lg:px-20  pt-19 "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-0"></div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-10 slide-down">
        <div className="space-y-8 pt-16 ">
          <h2
            data-aos="zoom-in"
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Get in Touch
          </h2>

          <div className="space-y-6">
            {contact.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="w-9 h-9 object-cover rounded-lg "
                />
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.about}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 h-full ">
          <h2
            data-aos="zoom-in"
            className="text-3xl lg:text-[40px] font-semibold text-center text-orange-400"
          >
            Contact Us
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-xl font-medium text-white pb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-3  py-3 rounded-xl border border-slate-400 bg-gray-100 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-white pb-2 ">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-3  py-3 rounded-xl border border-slate-400  bg-gray-100 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-white pb-2" >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full pl-3  py-3 rounded-xl border border-slate-400  bg-gray-100 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 placeholder:text-gray-500
                "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white pb-2 text-xl">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Ask a question here..."
                className="w-full pl-3 py-3 rounded-xl border border-slate-400  bg-gray-100 text-black resize-none text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 placeholder:text-gray-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300
                "
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;