"use client";

import React, { useEffect } from "react";
import Image from "../../../node_modules/next/image";
import "aos/dist/aos.css";
import Aos from "aos";
import { contact } from "@/app/export";


const ContactPage= () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full bg-cover bg-center py-16 px-6 lg:px-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2
            data-aos="zoom-in"
            className="text-2xl sm:text-3xl font-bold text-black"
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
                  className="w-9 h-9 object-cover rounded-lg"
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

        <div className="space-y-8">
          <h2
            data-aos="zoom-in"
            className="text-3xl lg:text-[40px] font-semibold text-center text-black"
          >
            Contact Us
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-xl font-medium text-black">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-6 py-3 rounded-xl border border-slate-400 bg-white text-black text-sm"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-black">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-xl border border-slate-400 bg-white text-black text-sm"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-black">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-6 py-3 rounded-xl border border-slate-400 bg-white text-black text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black text-xl">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Ask a question here..."
                className="w-full px-6 py-3 rounded-xl border border-slate-400 bg-white text-black resize-none text-sm"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition"
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