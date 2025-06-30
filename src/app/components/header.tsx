"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 642;
      setIsMobile(mobile);
      setIsNavVisible(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeNav = () => {
    setIsNavVisible(false);
  };

  return (
    <header className="w-full h-[100px] flex justify-evenly border bg-white z-50">
      <div className="w-1/4 h-full flex items-center justify-start companylogo">
        <a href="/">
          <img
            src="/images/companylogo.png"
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </a>
      </div>

      {isMobile  && (
        <button onClick={() => setIsNavVisible(true)} className="menu_button">
          <i className="bx bx-menu"></i>
        </button>
      )}

      {isNavVisible && (
        <nav
          className="navbar w-3/4 h-full flex lg:space-x-18 md:space-x-12 sm:space-x-8 justify-center items-center lg:text-[17px] md:text-[12px] sm:text-[12px] text-gray-800 font-semibold"
            onMouseLeave={() => setMoreDetails(false)}
            id="navbar" 
        >
          {isMobile && (
            <button className="w-full closebtn text-[22px] flex justify-end pr-10 " onClick={closeNav}>
              &times;
            </button>
          )}
          <a href="/" style={{ "--delay": 1 } }>HOME</a>
          <a href="" style={{ "--delay": 2 } }>ABOUT US</a>
          <a href="" style={{ "--delay": 3 } }>SERVICES</a>
          <a href="" style={{ "--delay": 4 } }>PROJECT</a>
          <a href="" style={{ "--delay": 5 } }>CONTACT-US</a>

          <div
            className="more_features relative "
            onMouseEnter={() => setMoreDetails(true)}
          >
            <button className="mr-0 pr-2 " onClick={()=>setMoreDetails(!moreDetails)}>MORE</button>
            <i className={moreDetails ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i>
            {moreDetails && (
              <div className="w-max absolute top-full mt-2 flex flex-col bg-white rounded p-2 shadow-md space-y-4 text-[inherit] right-0 lg:left-0 md:right-0 sm:right-0 ">
                <a href="" >GROUPS</a>
                <a href="">PRE-CAST</a>
                <a href="">COMMITMENT TO QUALITY</a>
                <a href="">PROFILE</a>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;