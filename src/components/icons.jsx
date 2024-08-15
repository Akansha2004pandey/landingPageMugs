import React from 'react'
import Image from 'next/image'
import img1 from "../../public/images/insta.png"
import img2 from "../../public/images/facebook.png"
import img3 from "../../public/images/twitter.png"
import img4 from "../../public/images/linkedin.png"

const Icons = () => {
  return (
    <div className='flex'>
         <Image src={img1} alt="Logo" width={60} className="m-2"/>
         <Image src={img2} alt="Logo" width={60} className='m-2'/>
         <Image src={img3} alt="Logo" width={60} className="m-2"/>
         <Image src={img4} alt="Logo" width={60} className="m-2" />
    </div>
  )
}

export default Icons
