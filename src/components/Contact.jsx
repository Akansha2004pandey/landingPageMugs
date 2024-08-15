import React from 'react'
import styles from "@/styles/Contact.module.css"
const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20 pb-20'>
       <div className='text-[65px] font-Poppins leading-97.5px tracking-3percent text-center font-semibold mb-3'>
           Lets Design Together
       </div>
       <div className='max-w-[800px] font-normal text-[21px] tracking-3percent leading-31.5px pb-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex dolor. Consequuntur repellat soluta f.</div>
       <form className={`${styles.form} flex items-center`}>
        <input type="email" id="email" className="bg-gray-50 border  border-gray-300 text-gray-500 mr-3 text-[20px] rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-3 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 min-w-[400px] max-w-[800px] h-[24px] py-7" placeholder="Enter Your Email"  />
            <button className="py-3 px-5 my-4 bg-[#FD6F00] rounded-lg text-white font-semibold text-[24px]">Responsive</button>
       </form>
    </div>
  )
}

export default Contact
