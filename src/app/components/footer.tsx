import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white">
      <div className="w-full flex flex-wrap justify-evenly gap-8 py-10 px-4 sm:px-6 lg:px-20">
        <div className="w-full sm:w-[45%] md:w-[40%] lg:w-[20%] flex justify-center items-start">
          <div className="relative w-40 h-24 sm:w-48 sm:h-28 md:w-52 md:h-32">
            <Image
              src="/images/companylogo.png"
              alt="Company Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full sm:w-[45%] md:w-[25%] lg:w-[20%]">
          <h3 className="text-sm sm:text-base font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="hover:underline">HOME</a></li>
            <li><a href="#" className="hover:underline">ABOUT US</a></li>
            <li><a href="#" className="hover:underline">GROUPS</a></li>
            <li><a href="#" className="hover:underline">PROJECTS</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-[45%] md:w-[25%] lg:w-[20%]">
          <h3 className="text-sm sm:text-base font-bold mb-4">SPECIALIZATION IN</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="hover:underline">MECHANICAL</a></li>
            <li><a href="#" className="hover:underline">PLUMBING</a></li>
            <li><a href="#" className="hover:underline">ELECTRICAL</a></li>
            <li><a href="#" className="hover:underline">PRECAST</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-[45%] md:w-[40%] lg:w-[25%] space-y-4 text-xs sm:text-sm">
          <h3 className="text-sm sm:text-base font-bold">CONTACT US</h3>

          <div>
            <h4 className="font-semibold">We Are Here</h4>
            <p>Big Four Building, Flat No:112 (1st Floor),<br />P.O Box: 67411, Al Nabba, Sharjah - U.A.E</p>
          </div>

          <div>
            <h4 className="font-semibold">CALL US</h4>
            <a href="tel:+971-50975442" className="hover:underline block">+971-50975442</a>
            <a href="tel:+971-556038444" className="hover:underline block">+971-556038444</a>
          </div>

          <div>
            <h4 className="font-semibold">MAIL US</h4>
            <a href="mailto:info@petraoasis.com" className="hover:underline block">info@petraoasis.com</a>
            <a href="mailto:raju@petraoasis.com" className="hover:underline block">raju@petraoasis.com</a>
          </div>
        </div>
      </div>

      <div className="bg-orange-400 text-black text-xs sm:text-sm text-center py-3 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>&copy; All rights reserved.</p>
        <p>Powered by </p>
      </div>
    </footer>
  );
};

export default Footer;



