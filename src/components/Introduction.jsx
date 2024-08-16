import React, { useRef,forwardRef } from 'react'
import  styles from "@/styles/Contact.module.css"
import Image from 'next/image'
import About from "../../public/images/man.png"
import Icons from './icons'
const Introduction = forwardRef((props,ref) => {
  return (
    <div className={`flex mx-auto justify-center items-center my-20 ${styles.form}`} ref={ref} id="introduction">
      <div className='w-2/5 flex flex-col  min-w-[400px] pb-10'>
         <div className='text-[24px] font-semibold tracking-3percent leading-31.5px font-poppins'>Hi I am</div>
         <div className='text-[32px] font-semibold tracking-3percent leading-31.5px font-poppins pt-2 text-orange-500'>Muhammad Umair</div>
         <div className='text-[65px] font-bold font-poppins'>UI & UX</div>
         <span className='text-[65px] font-bold   font-poppins relative left-24 mt-[-40px] pt-2'>Designer
         </span>
         <div className='max-w-[500px] text-[21px] font-normal tracking-3percent leading-31.5px font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos 
            reprehenderit, quidem dolores hic odit cumque vitae facere neque veritatis quisquam.</div>
            <button className="py-3 px-5 my-4 bg-[#FD6F00] rounded-lg text-white font-semibold text-[24px] w-[250px]">Hire Me</button>
        
      </div>
      <div className='flex flex-col items-center'>

      <Image src={About} alt="Logo" width={500} className='min-w-[400px] mb-4'/>
      <Icons/>
      </div>
    </div>
  )
})

export default Introduction
