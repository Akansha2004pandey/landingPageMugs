import React, {useRef, forwardRef } from 'react'
import Image from 'next/image'
import Logo from "../../public/images/Logo.png"
import Icons from './icons'
import styles from "@/styles/Contact.module.css"
const Footer = React.forwardRef((props,ref) => {
  return (
    <div className='flex flex-col items-center justify-center pt-10 mt-10 bg-[#F8F8F8]' ref={ref} id="footer">
                <Image src={Logo} alt="Logo" width={279} height={67} className='min-w-[160px]' />
                <div className={`flex  flex-wrap justify-center my-7`}>
                    <div className='text-[21px] font-normal tracking-3percent px-2 '>Home</div>
                    <div className='text-[21px] font-normal tracking-3percent px-2 '>About Me</div>
                    <div className='text-[21px] font-normal tracking-3percent px-2 '>Projects</div>
                    <div className='text-[21px] font-normal tracking-3percent px-2 '>Testimonials</div>
                    <div className='text-[21px] font-normal tracking-3percent px-2 '>Contact</div>
                </div>
                <Icons/>
                <div className='text-[21px] font-semibold text-white bg-[#545454]  mt-7 w-full text-center py-3 tracking-3percent'>© 2023 <span className='text-orange-500'>Mumair</span> All Rights Reserved , Inc.</div>

       
    </div>
  )
})
Footer.displayName="Footer"
export default Footer
