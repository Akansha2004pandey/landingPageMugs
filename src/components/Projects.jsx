"use Client"
import React from 'react'
import { useState } from 'react'
import { projectData } from './utils/projects'
import Image from 'next/image'
import img from "../../public/images/image.png"
import { forwardRef,useRef } from 'react'
const Projects = forwardRef((props,ref) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClick = (category) => {
      setSelectedCategory(category);
    };
  return (
    <div className='flex flex-col items-center justify-center pt-20 pb-20' ref={ref} id="projects" >
    <div className='text-[65px] font-Poppins leading-97.5px tracking-3percent text-center font-semibold mb-3'>
        Projects
    </div>
    <div className='max-w-[800px] font-normal text-[21px] tracking-3percent leading-31.5px pb-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex dolor. Consequuntur repellat soluta f.</div>
    <div className="flex flex-wrap justify-center">
        {Object.keys(projectData).map(category => (
          <button
            key={category}
            className="mx-2 py-3 px-5 my-4 text-[#FD6F00] border-[3px] border-[#FD6F00] hover:bg-[#FD6F00] rounded-lg hover:text-white font-semibold text-[24px]"
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div >
        {selectedCategory && (
          <div className='flex justify-center flex-wrap'>
            {projectData[selectedCategory].map((project, index) => (
              <div key={index} className="m-4 p-4 border rounded-lg min-w-[360px] flex flex-col items-center bg-[#FFEBDB]">
               
                <Image
      src={img}
      alt={project.title}
      height={350}
    />
     <h3 className="text-xl font-bold pt-2">{project.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    
    </div>
    
  )
})
Projects.displayName="Projects";

export default Projects
