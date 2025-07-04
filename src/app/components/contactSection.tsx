import React from 'react'

const ContactSection = () => {
  return (
    <div className='w-full xl:h-[350px] lg:h-[340px] md:h-[320px] sm:h-[300px] h-[240px] bg-white flex xl:justify-evenly lg:justify-evenly md:justify-center rounded-lg shadow-lg py-2 contact_section p2'>
      <div className='w-1/2 xl:w-[40%] lg:w-[50%] md:w-[50%]
      sm:w-[50%] h-full flex flex-col justify-center items-center  '>
        <div className='w-full xl:text-[29px] lg:text-[29px] md:text-[26px] sm:text-[22px] text-center  font-bold font14'>
          <h1>Feel Free To Reach Us</h1>
        </div>
        <div className='w-full text-center pt-4 font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[13px] font10'>
          <p>We are any time here to provide you the excellent service </p>
        </div>
        <div className='w-full flex justify-center items-center xl:space-x-18 lg:space-x-17  md:space-x-8 sm:space-x-4  center'>
          <div className='w-max space-y-1  xl:space-y-3 lg:space-y-3 md:space-y-2 sm:space-y-1 '>
            <h1 className='xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-center font12'> Call us on</h1>
            <div className='w-max font-semibold flex items-center space-x-2 '>
              <i className='bx bxs-phone xl:text-[40px]
              lg:text-[38px] md:text-[30px] sm:text-[24px] font-bold text-orange-600  contact-icon'></i>
              <a href="tel:+971509754442" className='hover:text-blue-500 text-[14px]
              xl:text-[14px] lg:text-[13px]
              md:text-[12px] sm:text-[11px] font10'>+971-556038444</a >
            </div>
          </div>
          <div className='w-max space-y-1 xl:space-y-3 lg:space-y-3 md:space-y-2 sm:space-y-1'>
            <h1 className='xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-center font12'>Email us on</h1>
            <div className='font-semibold flex items-center space-x-2 '>
              <i className='bx bxs-envelope xl:text-[40px]
              lg:text-[38px] md:text-[30px] sm:text-[24px] font-bold text-orange-600  contact-icon'></i>
              <a href="mailto:info@petraoasis.com" className='hover:text-blue-500 text-[14px]
              xl:text-[14px] lg:text-[13px]
              md:text-[12px] sm:text-[11px] font10'>info@petraoasis.com</a >
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 xl:w-[40%] lg:w-[50%] md:w-[50%]
      sm:w-[50%] h-full flex justify-center items-center  '>
        <img src="https://www.petraoasis.com/images/contact-with-petraoasis.webp" alt="contact-us" className='w-[80%] h-[80%] rounded-[20px] width75 height75' />
      </div>
    </div>
  )
}

export default ContactSection