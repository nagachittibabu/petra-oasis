"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [closeBtn,setCloseBtn]=useState(false);
  const [menuButton,setMenuButton]=useState(false);
  const [slideText, setSlideText] = useState("")
  useEffect(() => {
    setCloseBtn(false)
    const handleResize = () => {
      const mobile = window.innerWidth < 642;
      setIsMobile(mobile);
      setMenuButton(true);
      setIsNavVisible(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeNav = () => {
    setIsNavVisible(false);
    setIsMobile(true)
    setCloseBtn(false)
  };
  useEffect(() => {
    if (closeBtn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [closeBtn]);
  
  return (
    <header className="w-full h-[100px] flex justify-center  bg-transparent absolute left-0 top-0 z-50 text-white">
      <div className="w-1/4 h-full flex items-center justify-start companylogo">
        <a href="/">
          <img
            src="/images/companylogo.png"
            alt="Company Logo"
            className="w-full h-full "
          />
        </a>
      </div>

      {menuButton && (
        <button onClick={() => {setIsNavVisible(true);setCloseBtn(true);setIsMobile(false);setSlideText("slide-left")}} className="menu_button cursor:pointer">
          <i className="bx bx-menu"></i>
        </button>
      )}

      {isNavVisible && (
        <nav className={`w-3/4 width50 h-full flex justify-center items-center ${slideText}`}onMouseLeave={() => setViewProjects(false)} id="navbar"
        >
          <ul className="navbar w-full h-full flex justify-end pr-8 items-center space-x-4 xl:space-x-20 lg:space-x-12 md:space-x-6 sm:space-x-8 text-8px  xl:text-[15px] lg:text-[15px]  md:text-[13px] sm:text-[11px] text-white font-semibold "
            onMouseLeave={() => setViewProjects(false)}
          >
          {closeBtn &&(
            <li className="w-full closebtn text-[22px] flex justify-end pr-10 " onClick={() => {
              closeNav();
              setSlideText("slide-right");
            }}
          >
              &times;
            </li>
          )}
            <li className="h-full flex justify-center items-center"><a href="/" style={{ "--delay": 1 } as React.CSSProperties} >HOME</a></li>
            <li className="h-full flex justify-center items-center "><a href="/about-us" style={{ "--delay": 2 } as React.CSSProperties}>ABOUT US</a></li>
            <li className="h-full flex justify-center items-center "
              onMouseLeave={() => setViewProjects(false)}>
              <div
                className="more_features relative "
                onMouseEnter={() => setViewProjects(true)}
                onClick={()=>setViewProjects(!viewProjects)}
              >
                <button className="mr-0 pr-2">PROJECTS</button>
                <i className={viewProjects ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i>
                {viewProjects && (
                  <div className="w-max absolute top-8  flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-4 text-gray-200 left-0  text-black text-[8px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[8px] rounded-lg
                  xl:top-8 md:top-6 sm:top-4 space-y-1 lg:spaace-y-4 md:space-y-3 sm:space-y-2 ">
                    <a href="" className="" >ONGOING PROJECTS</a>
                    <a href="" className="">COMPLETED PROJECTS</a>
                  </div>
                )}
              </div>
            </li>
            <li className="h-full flex justify-center items-center "><a href="/services" style={{ "--delay": 3 } as React.CSSProperties}>SERVICES</a></li>
            <li className="h-full flex justify-center items-center " 
                onMouseLeave={() => setMoreDetails(false)}>
              <div
                className="more_features relative "
                onMouseEnter={() => setMoreDetails(true)}
                onClick={() => setMoreDetails(!moreDetails)}
              >
                <button className="mr-0 pr-2 " >MORE</button>
                <i className={moreDetails ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i>
                {moreDetails && (
                  <div className="w-max absolute top-8  flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-4 text-gray-200 left-0  text-black text-[8px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[8px] rounded-lg
                  xl:top-8 md:top-6 sm:top-4 space-y-1 lg:spaace-y-4 md:space-y-3 sm:space-y-2 ">
                    <a href="" className="" >GROUPS</a>
                    <a href="" className="">CAST</a>
                    <a href="" className="">COMITMENT TO QUALITY</a>
                    <a href="/PETRA_PROFILE.pdf" className="">PROFILE</a>
                  </div>
                )}
          
              </div>
            </li>
            <li className="h-full flex justify-center items-center">
              <a href="/contact-us">CONTACT-US</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;