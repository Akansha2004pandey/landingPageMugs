import React from 'react'
import Image from 'next/image'
import About from "../../public/images/about.png"
import  styles from "@/styles/Contact.module.css"

const AboutMe = () => {
  return (
    <div className={`flex mx-auto justify-center my-20 ${styles.form}`} >
    
   
    

      <Image src={About} alt="Logo" width={500} className='min-w-[400px] mr-10'/>

  



      <div className="w-1/2 flex flex-col  min-w-[400px] pt-10">
          < div className="text-[65px] font-semibold tracking-3percent leading-97.5px font-poppins">About Me</div>
          <div className='w-4/5 tracking-3percent text-[21px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium repellat facere aut nesciunt 
             Nesciunt?</div>
             <div className='text-[24px] font-semibold tracking-3percent leading-31.5px font-poppins py-3 min-w-[400px]'>UX</div>
             <input type="range" min={0} max="100" value="90" className="range range-warning " disabled />
             <div className='text-[24px] font-semibold tracking-3percent leading-31.5px font-poppins py-3 min-w-[400px]' >Website Design</div>
             <input type="range" min={0} max="100" value="80" className="range range-warning" disabled/>
             <div className='text-[24px] font-semibold tracking-3percent leading-31.5px font-poppins py-3 min-w-[400px]'>Graphic Design</div>
             <input type="range" min={0} max="100" value="95" className="range range-warning" disabled/>
             <div className='text-[24px] font-semibold tracking-3percent leading-31.5px font-poppins py-3 min-w-[400px]'>App Design</div>
             <input type="range" min={0} max="100" value="77" className="range range-warning" disabled/>




      </div>
    </div>
  )
}

export default AboutMe
