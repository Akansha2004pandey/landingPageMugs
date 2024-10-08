"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";
import { useRef } from "react";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
export default function Home() {
  const aboutref= useRef(null);
  const introductionref = useRef(null);
  const serviceref= useRef(null);
  const  contactref= useRef(null);
  const testimonialsref=useRef(null);
  const projectsref=useRef(null);
  const handleScrollToSection = (ref) => {
  
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  
  };
  return (
   <main>
      <div>   
              
              <Navbar handleScrollToSection={handleScrollToSection}
              serviceref={serviceref} 
        aboutref={aboutref} 
        introductionref={introductionref} 
        contactref={contactref}
        testimonialsref={testimonialsref}
        projectsref={projectsref}/>
              <Introduction ref={introductionref}/>
              <AboutMe ref={aboutref}/>
              <Services ref={serviceref}/>
              <Projects ref={projectsref}/>
              <Testimonials ref={testimonialsref}/>
              <Contact ref={contactref}/>
              <Footer/>
      </div>
   </main>
   
  );
}
