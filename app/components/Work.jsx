import { workData } from "@/assets/assets";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Work = () => {
  return (
    <div id='work' className='w-full px-[8%] sm:px-[16%] py-10 scroll-mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2  my-10 gap-x-16 gap-y-24'>
        {workData.map((project, index) => (
          <div key={index}>
            <div
              className='aspect-square mb-4 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='absolute hidden flex-col gap-2 group-hover:flex transition right-10 bottom-10'>
                <a
                  href=''
                  className='border rounded-full backgroundSecondary w-9 aspect-square flex items-center justify-center'
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ color: "#000" }}
                  />
                </a>
                <a
                  href=''
                  className=' border rounded-full backgroundSecondary w-9 aspect-square flex items-center justify-center'
                >
                  <FontAwesomeIcon icon={faGithub} style={{ color: "#000" }} />
                </a>
              </div>
            </div>
            <div>
              <div>{project.title}</div>
              <p className='text-white/50'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
