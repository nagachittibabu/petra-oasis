import React from 'react'

const ContactSection = () => {
  return (
    <div className='w-[full] h-[300px] bg-white flex justify-center mx-30  rounded-lg shadow-lg'>
        <div className='w-[60%] h-full flex flex-col pt-12'>
            <div className='w-full text-[29px] text-center  font-bold'>
              <h1>Feel Free To Reach Us</h1>
            </div>
            <div className='w-full text-center pt-4 font-medium'> 
              <p>We are any time here to provide you the excellent service </p>
            </div>
        <div className='w-full flex justify-center space-x-50 pt-5'>
          <div>
           <h1> Call us on</h1>
           <label htmlFor="" className='font-semibold'><i>i</i> +971-556038444</label>
          </div>
          <div>
            <h1>Email us on</h1>
            <label htmlFor="" className='font-semibold'><i>j</i>info@petraoasis.com</label>
          </div>
        </div>
        </div>
        <div className='w-[40%] h-full flex justify-center items-center'>
            <img src="https://www.petraoasis.com/images/contact-with-petraoasis.webp" alt="contact-us" className='w-[80%] h-[90%] rounded-[30px]' />
        </div>
    </div>
  )
}

export default ContactSection