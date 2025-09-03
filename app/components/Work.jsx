import { workData } from "@/assets/assets";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Work = () => {
  return (
    <div id='work' className='w-full px-4 sm:px-[16%] py-10 scroll-mt-20'>
      <div className='grid grid-cols-1 gap-10 mt-5'>
        {workData.map((project, index) => (
          <Card
            key={index}
            className='flex flex-col-reverse xl:flex-row justify-between gap-8 p-8 bg-primary/10 border border-white/10 h-auto xl:h-[500px]'
          >
            {/* Left Side - Text */}
            <CardContent className='flex flex-col p-0 xl:w-[50%] justify-between'>
              <div>
                <h2 className='text-2xl md:text-3xl font-semibold text-white/90'>
                  {project.title}
                </h2>
                <p className='mt-4 text-sm text-white/60 leading-relaxed'>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mt-4'>
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-800 rounded-md font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className='flex gap-6 mt-6'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:underline font-medium'
                >
                  Live
                </a>
                <a
                  href={project.git}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:underline font-medium'
                >
                  GitHub
                </a>
              </div>
            </CardContent>

            {/* Right Side - Image */}
            <div className='relative w-full xl:w-[50%] h-64 xl:h-full'>
              <Image
                className='object-cover rounded-lg'
                src={project.bgImage}
                alt={project.title}
                fill
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Work;
