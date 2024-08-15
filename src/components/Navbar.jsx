import React from 'react'
import Image from 'next/image'
import image from "../../public/images/Logo.png"

const Navbar = () => {
  return (
    <div className=''>
         <div className='flex items-center w-5/6 mx-auto mt-10 justify-between'>
             <div className='flex'>
               <Image src={image} alt="Logo" width={279} height={67} />
             </div>
             
                <ul className='flex items-center'>
                    <li className='text-[21px] font-normal tracking-3percent px-2 mx-1'>Home</li>
                    <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 '>About Me</li>
                    <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 '>Services</li>
                    <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 '>Projects</li>
                    <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 '>Testimonials</li>
                    <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 '>Contact</li>
                    <li className='text-[21px] font-normal tracking-3percent px-2 mx-3 text-white py-1 bg-[#FD6F00] rounded-sm'>Download CV</li>
                </ul>
             
         </div>
    </div>
  )
}

export default Navbar
