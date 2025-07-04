import Image from "next/image";
import React from "react";
const Footer = () => {
    return (
        <footer className="w-full h-[400px] ">
            <div className="w-full h-[350px] flex justify-center xl:space-x-10 lg:space-x-8 items-center bg-gray-700 text-gray-100">
                <div className="w-1/5 h-full  flex justify-center items-center ">
                    <div className="w-[75%] h-3/4  flex justify-center  items-start">
                        <Image src="/images/companylogo.png" alt="" fill className="w-max h-max object-contain"/>
                    </div>
                </div>
                <div className=" w-1/5 h-full flex  justify-center items-center ">
                    <div className="w-3/4 h-3/4  flex flex-col space-y-5  text-center  ">
                        <h1 className="font-bold text-white">QUICK LINKS</h1>
                        <ul className="flex  flex-col space-y-5 text-gray-100 text-[13px] ">
                            < li><a href="" className="hover:underline ">HOME</a></ li>
                            < li><a href="" className="hover:underline ">ABOUT US</a></ li>
                            < li><a href="" className="hover:underline ">GROUPS</a></ li>
                            < li><a href="" className="hover:underline ">PROJECTS</a></ li>
                        </ul>

                    </div>

                </div>
                <div className="w-1/5 h-full flex flex-col justify-center items-center ">
                  
                    <div className="w-3/4 h-3/4  flex flex-col space-y-5  text-center  ">
                    <h1 className="font-bold text-white">SPECIALIZATION IN</h1>                       
                     <a href="" className="text-[13px] hover:underline" >MECHANICAL SPECILIZATION</a>
                        <a href="" className="text-[13px] hover:underline">PLUMBING SPECILIZATION</a>
                        <a href="" className="text-[13px] hover:underline">ELECTRICAL SPECILIZATION</a>
                        <a href="" className="text-[13px] hover:underline">PRECAST SPECILIZATION</a>
                    </div>

                </div>

                <div className="w-1/5 h-full flex flex-col justify-center items-center ">
                    <div className=" w-3/4 h-3/4 space-y-2">
                        <h3 className="text-[15px] font-bold text-white">CONTACT US</h3>
                        <div className="">
                            
                            <h4 className="font-bold  text-[14px]  ">We Are Here</h4>
                            <p className="text-[12px] max-w-full   ">Big Four Building Flat
                                No:112(1st Floor)

                                P.O Box:67411,Al Nabba,
                                Sharjah-U.A.E
                            </p>
                        </div>
                        <div className="">
                             <h4 className="font-bold text-[14px]">CALL US</h4>
                                    <a href="tel:+971-50975442" className="text-[12px] hover:underline">+971-50975442 <span>,</span></a>
                                    <a href="tel:+971-556038444" className="text-[12px] hover:underline">+971-556038444</a>
                        </div>
                    <div className="" >
                          <h4 className="font-bold text-[14px]">MAIL US</h4>
                                    <a href="mailto:info@petraoasis.com" className="text-[12px] hover:underline">info@petraoasis.com<span>,</span></a>

                                <a href="mailto:raju@petraoasis.com" className="text-[12px] hover:underline">raju@petraoasis.com</a>
                    </div>
                    </div>

                </div>


            </div>

            <div className="w-full h-[50px] bg-orange-200 flex justify-between px-30 items-center">
             <p className="text-center">&copy;copyright2025</p>
             <p>powered by </p>
            </div>
        </footer>
    )
}
export default Footer



