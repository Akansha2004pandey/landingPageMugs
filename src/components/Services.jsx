import React from 'react'
import Image from 'next/image'
import image1 from "../../public/images/image1.png"
import image2 from "../../public/images/image2.png"
import image3 from "../../public/images/image3.png"
import image4 from "../../public/images/image4.png"
import {useRef, forwardRef } from 'react'
const Services = React.forwardRef((props,ref) => {
    const data=[
        {name:"UI/UX",
         image:image1
        },
        {name:"Web Design",
        image:image2
        },
        {name:"App Design",
            image:image3
        },
        {name:"Graphic Design",
            image:image4
        },
    ]
  return (
    <div className='flex flex-col justify-center items-center pt-20' ref={ref} id="service">
        <div className='text-[65px] font-semibold tracking-3percent leading-97.5px font-poppins'>Services</div>
        <div className='text-[21px] tracking-3percent leading-31.5px font-poppins pb-10 text-center max-w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, adipisci.</div>
        <div className='flex mx-auto justify-center flex-wrap '>
            {
                data.map((card,index)=>{
                    return (
                        <>
                        <div className='px-3 py-4 w-1/5 mx-3 bg-[#F8F8F8] rounded-lg min-w-[310px] my-3'>
                            <Image src={card.image} alt="Logo" height={82} className='m-3'/>
                            <div className='font-semibold text-[32px] font-poppins'>{card.name}</div>
                            <p className='text-[19px] font-normal leading-28px font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. Ipsam numquam quas m ea possimus?</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}
)
export default Services
