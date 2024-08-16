"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import image from "../../public/images/Logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ handleScrollToSection, serviceref, aboutref, introductionref, contactref,testimonialsref,projectsref }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className=''>
      <div className='flex items-center w-5/6 mx-auto mt-10 justify-between'>
        <div className='flex'>
          <Image src={image} alt="Logo" width={279} height={67} className='min-w-[160px]' />
        </div>

        <div className='lg:hidden'>
          <button onClick={toggleNav}>
            {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        <ul className={`lg:flex items-center ${navOpen ? 'block' : 'hidden'} absolute lg:static left-0 top-[120px] z-10 w-full lg:w-auto lg:bg-transparent bg-white lg:p-0 p-4 lg:shadow-none shadow-md lg:rounded-none rounded-lg`}>
          <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 cursor-pointer'><a href="#" onClick={() => handleScrollToSection(introductionref)}>Home</a></li>
          <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 cursor-pointer'><a href="#about" onClick={() => handleScrollToSection(aboutref)}>About Me</a></li>
          <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 cursor-pointer'><a href="#service" onClick={() => handleScrollToSection(serviceref)}>Services</a></li>
          <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 cursor-pointer'><a href="#projects" onClick={() => handleScrollToSection(projectsref)}>Projects</a></li>
          <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 cursor-pointer'><a href="#testimonials" onClick={() => handleScrollToSection(testimonialsref)}>Testimonials</a></li>
          <li className='text-[21px] font-normal tracking-3percent px-2 mx-1 cursor-pointer'><a href="#contact" onClick={() => handleScrollToSection(contactref)}>Contact</a></li>
          <li className='text-[21px] font-normal tracking-3percent px-2 mx-3 cursor-pointer text-white py-1 bg-[#FD6F00] rounded-sm'>Download CV</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
