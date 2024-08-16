import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <main>
      <div>   
              
              <Navbar/>
              <Introduction/>
              <AboutMe/>
              <Services/>
              <Contact/>
              <Footer/>
      </div>
   </main>
   
  );
}
